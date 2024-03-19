<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTerminRequest;
use App\Models\Facility;
use App\Models\Termin;
use Illuminate\Http\Request;

class TerminController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTerminRequest $request)
    {
        Termin::create($request->all());
        $message = ['title' => 'Спасибо!', 'text' => 'Спасибо! Ваше сообщение отправлено.'];
        return redirect()->back()->with(['message' => $message]);
    }
}
