<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductTizer;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NoveltyController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Novelties', [
            'pagetitle' => 'Новинки',
            'products' => ProductTizer::collection(Product::novelty()->paginate(36)->appends(request()->only(['sort', 'order']))),
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => 'Главная'
                ],
                [
                    'text' => 'Новинки'
                ]
            ]
        ]);
    }
}
