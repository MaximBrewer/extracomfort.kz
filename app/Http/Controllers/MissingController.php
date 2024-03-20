<?php

namespace App\Http\Controllers;

use App\Http\Requests\MissingStoreRequest;
use App\Models\Missing;
use Illuminate\Http\Request;

class MissingController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(MissingStoreRequest $request)
    {
        Missing::create($request->all());
        $message = ['title' => 'Спасибо!', 'text' => 'Ваша заявка отправлено <br/>c  Вами свяжется в ближайшее время наш менеджер'];
        return redirect()->back()->with(['message' => $message]);
    }
}
