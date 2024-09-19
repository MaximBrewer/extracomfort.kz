<?php

namespace App\Http\Controllers;

use App\Models\Rent;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RentController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Rent', [
            'pagetitle' => __('Информация по аренде'),
            'rents' => Rent::all(),
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => 'Главная'
                ],
                [
                    'text' => 'Информация по аренде'
                ]
            ]
        ]);
    }
}
