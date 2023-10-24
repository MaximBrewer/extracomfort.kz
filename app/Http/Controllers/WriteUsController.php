<?php

namespace App\Http\Controllers;

use App\Http\Requests\WriteUsStoreRequest;
use App\Models\WriteUs;

class WriteUsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(WriteUsStoreRequest $request)
    {
        WriteUs::create($request->all());
        return redirect()->back();
    }
}
