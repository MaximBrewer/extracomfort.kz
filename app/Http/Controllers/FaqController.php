<?php

namespace App\Http\Controllers;

use App\Http\Resources\Faq as ResourcesFaq;
use App\Models\Faq;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FaqController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Faq', [
            'pagetitle' => 'Часто задаваемые вопросы',
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => 'Главная'
                ],
                [
                    'text' => 'Часто задаваемые вопросы'
                ]
            ],
            'faqs' => ResourcesFaq::collection(Faq::all())
        ]);
    }
}
