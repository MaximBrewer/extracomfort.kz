<?php

namespace App\Http\Controllers;

use App\Http\Resources\Page as ResourcesPage;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{

    /**
     * Display the specified resource.
     */
    public function show(string $page)
    {
        $page = Page::where('slug', $page)->firstOrFail();

        $page['page_type_id'] == 1 && Inertia::share('shoppage', true);
        $page['page_type_id'] == 2 && Inertia::share('servicepage', true);

        return Inertia::render('Page', [
            'pagetitle' => $page->title,
            'page' => new ResourcesPage($page),
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => 'Главная'
                ],
                [
                    'text' => $page->title
                ]
            ]
        ]);
    }
}
