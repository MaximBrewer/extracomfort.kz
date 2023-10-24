<?php

namespace App\Http\Controllers;

use App\Http\Resources\Category as ResourcesCategory;
use App\Http\Resources\Product as ResourcesProduct;
use App\Http\Resources\Specification as ResourcesSpecification;
use App\Models\Category;
use App\Models\Facet;
use App\Models\Product;
use App\Models\Specification;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CatalogController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $products = new Product();

        if ($request->sort && $request->order) {
            $products = $products->orderBy($request->sort, $request->order);
        } else {
            $products = $products->orderBy('title');
        }

        $specifications = Specification::all();

        return Inertia::render('Catalog', [
            'pagetitle' => __('Каталог'),
            'products' => ResourcesProduct::collection($products->paginate(12)->appends(request()->only(['sort', 'order']))),
            'specifications' => ResourcesSpecification::collection($specifications),
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
}
