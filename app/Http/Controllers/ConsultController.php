<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ConsultController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Consult', [
            'pagetitle' => __('Информация по онлайн консультации'),
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => 'Главная'
                ],
                [
                    'text' => 'Информация по онлайн консультации'
                ]
            ]
        ]);
    }
}
