<?php

namespace App\Http\Controllers;

use App\Http\Resources\Category as ResourcesCategory;
use App\Http\Resources\Option as ResourcesOption;
use App\Http\Resources\Product as ResourcesProduct;
use App\Http\Resources\ProductTizer;
use App\Http\Resources\Specification as ResourcesSpecification;
use App\Models\Category;
use App\Models\Facet;
use App\Models\Option;
use App\Models\Product;
use App\Models\Specification;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Inertia\Inertia;

class CatalogController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, $path = false)
    {
        if (!$path) return $this->catalog($request);
        $path = explode('/', $path);
        $lasturl = array_pop($path);
        $category = Category::find(1);
        foreach ($path as $c) $category = $category->children()->where('slug', $c)->firstOrFail();
        if ($s = $category->children()->where('slug', $lasturl)->first()) return $this->category($request, $s);
        $product = $category->products()->where('slug', $lasturl)->firstOrFail();
        return $this->product($request, $product);
    }

    public function catalog(Request $request)
    {
        $products = new Product();

        if ($request->sort && $request->order) {
            $products = $products->orderBy($request->sort, $request->order);
        }

        $specifications = Specification::all();
        $options = Option::all();

        $topCategory = Category::whereNull('parent_id')->orderBy('id')->firstOrFail();

        return Inertia::render('Catalog', [
            'pagetitle' => __('Каталог'),
            'categories' => ResourcesCategory::collection(Category::where('parent_id', $topCategory->id)->with('children')->get()),
            'products' => ProductTizer::collection($products->paginate(36)->appends(request()->only(['sort', 'order']))),
            'specifications' => ResourcesSpecification::collection($specifications),
            'options' => ResourcesOption::collection($options),
            'sort' => $request->sort,
            'order' => $request->order,
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => 'Главная'
                ],
                [
                    'text' => 'Каталог'
                ]
            ]
        ]);
    }

    public function search(Request $request)
    {
        $products = Product::where('title', 'like', '%' . $request->q . '%');

        return Inertia::render('Search', [
            'pagetitle' => __('Поиск'),
            'products' => ProductTizer::collection($products->paginate(36)->appends(request()->only(['sort', 'order', 'q']))),
            'sort' => $request->sort,
            'order' => $request->order,
            'query' => $request->q,
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => 'Главная'
                ],
                [
                    'text' => 'Поиск'
                ]
            ]
        ]);
    }

    public function category(Request $request, Category $category)
    {
        global $categoryPath;
        $categoryPath = $category->path;

        $breadcrumbs = [
            [
                'route' => 'home',
                'text' => 'Главная'
            ]
        ];

        $category->ancestors->map(function ($c) use (&$breadcrumbs, &$path) {
            if ($c->parent) {
                $breadcrumbs[] =   [
                    'href' => $c->path,
                    'text' => $c->name
                ];
            } else {
                $breadcrumbs[] =   [
                    'route' => 'catalog',
                    'text' => 'Каталог'
                ];
            }
        });

        $breadcrumbs[] =   [
            'href' => $category->path,
            'text' => $category->name
        ];

        $specifications = Specification::all();
        $options = Option::all();

        $products = Product::whereHas('facets',  function (Builder $query) use ($category) {
            $query->where('path', 'like', $category->path . '%');
        });

        if ($request->sort && $request->order) {
            $products = $products->orderBy($request->sort, $request->order);
        }

        $facets = Facet::groupBy('specification_accounting_id')->pluck('specification_accounting_id');

        $filter = [];
        foreach ($facets as $fk) {
            if (!$fk || $fk === 'func') continue;
            if ($fv = $request->get($fk)) {
                $filter[$fk] = explode(":::", $fv);
                $products = $products->whereHas('facets',  function (Builder $query) use ($fk, $fv) {
                    $query->where('specification_accounting_id', $fk);
                    $query->whereIn('specification_value', explode(":::", $fv));
                });
            }
        }

        if ($fv = $request->get('func')) {
            $filter['func'] = explode(":::", $fv);
            foreach ($filter['func'] as $fnc) {
                $products = $products->whereHas('facets',  function (Builder $query) use ($fnc) {
                    $query->where('option_id', 1);
                    $query->where('option_value', $fnc);
                });
            }
        }

        return Inertia::render('Category', [
            'filter' => $filter,
            'sort' => $request->sort,
            'order' => $request->order,
            'pagetitle' => $category->name,
            'category' => new ResourcesCategory($category),
            'categories' => ResourcesCategory::collection($category->children),
            'parent' => new ResourcesCategory($category->parent),
            'categories' => ResourcesCategory::collection($category->children),
            'siblings' => ResourcesCategory::collection($category->siblingsAndSelf()->get()),
            'parentsiblings' => ResourcesCategory::collection($category->parent && $category->parent->parent ? $category->parent->siblingsAndSelf()->get() : []),
            'total' => 'Показано ' . $products->count() . ' ' . Lang::choice('товар|товара|товаров', $products->count(), [], 'ru'),
            'products' => ProductTizer::collection($products->paginate(36)),
            'breadcrumbs' => $breadcrumbs,
            'specifications' => ResourcesSpecification::collection($specifications),
            'options' => ResourcesOption::collection($options),
            // 'posts' => Post::paginate(6)
        ]);
    }

    /**
     * Handle the incoming request.
     */
    public function product(Request $request, Product $product)
    {
        $breadcrumbs = [
            [
                'route' => 'home',
                'text' => 'Главная'
            ]
        ];
        if ($product->categories->count()) {
            $product->categories[0]->ancestors->map(function ($c) use (&$breadcrumbs, &$path) {
                if ($c->parent) {
                    $breadcrumbs[] =   [
                        'href' => $c->path,
                        'text' => $c->name
                    ];
                } else {
                    $breadcrumbs[] =   [
                        'route' => 'catalog',
                        'text' => 'Каталог'
                    ];
                }
            });

            $breadcrumbs[] =   [
                'href' => $product->categories[0]->path,
                'text' => $product->categories[0]->name
            ];
        }

        return Inertia::render('Product', [
            'pagetitle' => $product->title,
            'breadcrumbs' => $breadcrumbs,
            'product' => new ResourcesProduct($product)
        ]);
    }
}
