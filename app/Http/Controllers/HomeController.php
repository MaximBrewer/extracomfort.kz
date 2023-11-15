<?php

namespace App\Http\Controllers;

use App\Http\Resources\Category as ResourcesCategory;
use App\Http\Resources\Facility as ResourcesFacility;
use App\Http\Resources\Product as ResourcesProduct;
use App\Http\Resources\ProductTizer;
use App\Models\Category;
use App\Models\Facility;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Home', [
            'pagetitle' => setting('site.title'),
            'services' => [
                'title' => setting('services.title_on_main'),
                'subtitle' => setting('services.subtitle_on_main'),
                'bg' => Storage::url(setting('services.bg_on_main')),
            ],
            'shop' => [
                'title' => setting('shop.title_on_main'),
                'subtitle' => setting('shop.subtitle_on_main'),
                'bg' => Storage::url(setting('shop.bg_on_main')),
            ]
        ]);
    }
    /**
     * Handle the incoming request.
     */
    public function shop(Request $request)
    {
        return Inertia::render('Shop', [
            'pagetitle' => setting('site.title'),
            'products' => ProductTizer::collection(Product::limit(20)->get())
        ]);
    }
}
