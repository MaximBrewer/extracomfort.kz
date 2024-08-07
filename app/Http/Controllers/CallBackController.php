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
        $message = ['title' => 'Спасибо!', 'text' => 'Ваше сообщение отправлено <br/>c  Вами свяжется в ближайшее время наш менеджер'];
        return redirect()->back()->with(['message' => $message]);
    }
}
