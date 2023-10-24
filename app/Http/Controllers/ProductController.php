<?php

namespace App\Http\Controllers;

use App\Http\Resources\Product as ResourcesProduct;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Product $product)
    {
        $subsubcategory = null;
        $subcategory = null;
        $category = null;

        if ($product->category->parent && $product->category->parent->parent) {
            $subsubcategory = $product->category;
            $subcategory = $product->category->parent;
            $category = $product->category->parent->parent;
        } elseif ($product->category->parent) {
            $subcategory = $product->category;
            $category = $product->category->parent;
        } else {
            $category = $product->parent;
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

        if ($category) {
            $breadcrumbs[] = [
                'route' => 'category',
                'params' => [
                    'category' => $category->slug
                ],
                'text' => $category->name
            ];
            if ($subcategory) {
                $breadcrumbs[] = [
                    'route' => 'category',
                    'params' => [
                        'category' => $category->slug,
                        'subcategory' => $subcategory->slug
                    ],
                    'text' => $subcategory->name
                ];
                if ($subsubcategory) {
                    $breadcrumbs[] = [
                        'route' => 'category',
                        'params' => [
                            'category' => $category->slug,
                            'subcategory' => $subcategory->slug,
                            'subsubcategory' => $subsubcategory->slug
                        ],
                        'text' => $subsubcategory->name
                    ];
                }
            }
        }

        return Inertia::render('Product', [
            'pagetitle' => $product->title,
            'breadcrumbs' => $breadcrumbs,
            'product' => new ResourcesProduct($product)
        ]);
    }
}
