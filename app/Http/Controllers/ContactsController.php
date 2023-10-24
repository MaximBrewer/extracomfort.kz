<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Contacts', [
            'pagetitle' => __('Контакты'),
            'address1' => setting('contacts.address1'),
            'schedule1' => setting('contacts.schedule1'),
            'address2' => setting('contacts.address2'),
            'schedule2' => setting('contacts.schedule2'),
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => __('Главная')
                ],
                [
                    'text' => __('Контакты')
                ],
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {
        Contact::create($request->all());
        return redirect()->route('contacts');
    }
}
