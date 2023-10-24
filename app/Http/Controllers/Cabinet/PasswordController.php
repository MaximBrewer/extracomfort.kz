<?php

namespace App\Http\Controllers\Cabinet;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PasswordController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render("Cabinet/Password", [
            'pagetitle' => 'Сменить пароль',
            'meta' => [
                'title' => 'Сменить пароль',
                'description' => 'Сменить пароль'
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
                    'text' => 'Сменить пароль'
                ]
            ],
        ]);
    }
    /**
     * Update the user's password.
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back();
    }
}
