<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RefundController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Refund', [
            'pagetitle' => __('Возврат и обмен товара'),
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => 'Главная'
                ],
                [
                    'text' => 'Возврат и обмен товара'
                ]
            ],
            // 'posts' => Post::paginate(6)
        ]);
    }
}
