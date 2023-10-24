<?php

namespace App\Http\Controllers;

use App\Http\Resources\Partner as ResourcesPartner;
use App\Models\Partner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PartnerController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Partners', [
            'pagetitle' => 'Партнеры',
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => 'Главная'
                ],
                [
                    'text' => 'Партнеры'
                ]
            ],
            'partners' => ResourcesPartner::collection(Partner::all())
        ]);
    }
}
