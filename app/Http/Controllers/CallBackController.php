<?php

namespace App\Http\Controllers;

use App\Http\Requests\CallBackStoreRequest;
use App\Models\CallBack;

class CallBackController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CallBackStoreRequest $request)
    {
        CallBack::create($request->all());
        return redirect()->back();
    }
}
