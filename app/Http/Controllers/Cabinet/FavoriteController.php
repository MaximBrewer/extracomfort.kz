<?php

namespace App\Http\Controllers\Cabinet;

use App\Http\Controllers\Controller;
use App\Http\Resources\Product as ResourcesProduct;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FavoriteController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = User::find(Auth::id());
        return Inertia::render("Cabinet/Favorites", [
            'pagetitle' => 'Избранное',
            'products' => ResourcesProduct::collection($user->favorites()->paginate(12)),
            'breadcrumbs' => [
                [
                    'text' => 'Главная',
                    'route' => 'home'
                ],
                [
                    'text' => 'Избранное'
                ]
            ],
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function toggle(Request $request)
    {
        $user = User::find(Auth::id());
        if ($request->item) {
            $item = Product::find($request->item);
            if ($item) {
                if ($user->favorites()->where('id', $item->id)->first()) {
                    $user->favorites()->detach($item->id);
                } else {
                    $user->favorites()->attach($item->id);
                }
            }
        }
        return redirect()->back();
    }
}
