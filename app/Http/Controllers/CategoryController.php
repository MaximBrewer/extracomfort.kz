<?php

namespace App\Http\Controllers;

use App\Http\Resources\Category as ResourcesCategory;
use App\Http\Resources\Product as ResourcesProduct;
use App\Http\Resources\Specification as ResourcesSpecification;
use App\Models\Category;
use App\Models\Facet;
use App\Models\Product;
use App\Models\Specification;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, $category, $subcategory = false, $subsubcategory = false)
    {
        global $categoryId;

        $category = Category::where('slug', $category)->firstOrFail();

        if ($subcategory) {
            $subcategory = $category->children()->where('slug', $subcategory)->firstOrFail();
            if ($subsubcategory)  $subsubcategory = $subcategory->children()->where('slug', $subsubcategory)->firstOrFail();
        }

        if ($subsubcategory) {
            $categoryId = $subsubcategory->id;
            $products = Product::whereHas('facets',  function (Builder $query) use ($subsubcategory) {
                $query->where('subsubcategory_id', $subsubcategory->id);
            });
        } elseif ($subcategory) {
            $categoryId = $subcategory->id;
            $products = Product::whereHas('facets',  function (Builder $query) use ($subcategory) {
                $query->where('subcategory_id', $subcategory->id);
            });
        } else {
            $categoryId = $category->id;
            $products = Product::whereHas('facets',  function (Builder $query) use ($category) {
                $query->where('category_id', $category->id);
            });
        }

        $facets = Facet::groupBy('specification_accounting_id')->pluck('specification_accounting_id');

        foreach ($facets as $fk) {
            if ($fv = $request->get($fk)) {
                $products->whereHas('facets',  function (Builder $query) use ($fk, $fv) {
                    $query->where('specification_accounting_id', $fk);
                    $query->whereIn('specification_value', explode(":::", $fv));
                });
            }
        }

        $breadcrumbs = [
            [
                'route' => 'home',
                'text' => 'Главная'
            ],
            [
                'route' => 'catalog',
                'text' => 'Каталог'
            ]
        ];

        $breadcrumbs[] = [
            'text' => $category->name,
            'route' => 'category',
            'params' => [
                'category' => $category->slug
            ],
        ];

        if ($subcategory) {
            $breadcrumbs[] = [
                'text' => $subcategory->name,
                'route' => 'category',
                'params' => [
                    'category' => $category->slug,
                    'subcategory' => $subcategory->slug
                ],
            ];
        }

        if ($subsubcategory) {
            $breadcrumbs[] = [
                'text' => $subsubcategory->name,
                'route' => 'category',
                'params' => [
                    'category' => $subsubcategory->slug,
                    'subcategory' => $subcategory->slug,
                    'subsubcategory' => $subsubcategory->slug
                ],
            ];
        }

        // $category = $subcategory ?: $category;

        $specifications = Specification::all();

        return Inertia::render('Category', [
            'pagetitle' => $category->name,
            'category' => new ResourcesCategory($category),
            'subcategory' => $subcategory ? new ResourcesCategory($subcategory) : null,
            'subsubcategory' => $subsubcategory ? new ResourcesCategory($subsubcategory) : null,
            'subcategories' => $category ? ResourcesCategory::collection($category->children) : null,
            'subsubcategories' => $subcategory ? ResourcesCategory::collection($subcategory->children) : null,
            // 'categories' => $subsubcategory ? ['data' => []] : ResourcesCategory::collection($subcategory ? $subcategory->children : $category->children),
            'total' => 'Показано ' . $products->count() . ' ' . Lang::choice('товар|товара|товаров', $products->count(), [], 'ru'),
            'products' => ResourcesProduct::collection($products->paginate(12)),
            'breadcrumbs' => $breadcrumbs,
            'specifications' => ResourcesSpecification::collection($specifications),
            // 'posts' => Post::paginate(6)
        ]);
    }
}
