<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DeliveryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Delivery', [
            'pagetitle' => __('Оплата и доставка'),
            'table' => setting('delivery.table'),
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => 'Главная'
                ],
                [
                    'text' => 'Оплата и доставка'
                ]
            ],
            // 'posts' => Post::paginate(6)
        ]);
    }
}
