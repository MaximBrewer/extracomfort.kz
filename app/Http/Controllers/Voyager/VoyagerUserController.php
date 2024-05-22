<?php

namespace App\Http\Controllers\Voyager;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use TCG\Voyager\Http\Controllers\VoyagerUserController as BaseVoyagerUserController;

class VoyagerUserController extends BaseVoyagerUserController
{
    public function auth($id)
    {
        $user = User::findOrFail($id);
        if (Auth::check() && Auth::user()->role->name === 'admin' || Auth::user()->role->name === 'manager') {
            // Auth::logout();
            Auth::login($user);
            return redirect('/');
        }
        return abort(404);
    }
}
