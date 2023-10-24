<?php

namespace App\Http\Controllers\Cabinet;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class Controller extends \App\Http\Controllers\Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render("Cabinet/Index", [
            'pagetitle' => 'Сменить пароль',
            'meta' => [
                'title' => 'Личный кабинет',
                'description' => 'Личный кабинет'
            ],
            'breadcrumbs' => [
                [
                    'text' => 'Главная',
                    'route' => 'home'
                ],
                [
                    'text' => 'Личный кабинет'
                ]
            ],
        ]);
    }
}
