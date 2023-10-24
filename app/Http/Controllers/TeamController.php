<?php

namespace App\Http\Controllers;

use App\Http\Resources\Employee as ResourcesEmployee;
use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeamController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Team', [
            'breadcrumbs' =>  [
                [
                    'route' => 'home',
                    'text' => 'Главная'
                ],
                [
                    'text' => 'Наша команда'
                ]
            ],
            'pagetitle' => __('Наша команда'),
            'employees' => ResourcesEmployee::collection(Employee::all())
        ]);
    }
}
