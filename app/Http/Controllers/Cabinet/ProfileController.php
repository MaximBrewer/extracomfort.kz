<?php

namespace App\Http\Controllers\Cabinet;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Cabinet/Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'pagetitle' => 'Мои данные',
            'meta' => [
                'title' => 'Мои данные',
                'description' => 'Мои данные'
            ],
            'breadcrumbs' => [
                [
                    'text' => 'Главная',
                    'route' => 'home'
                ],
                [
                    'text' => 'Личный кабинет',
                    'route' => 'home'
                ],
                [
                    'text' => 'Мои данные'
                ]
            ],
        ]);
    }
}
