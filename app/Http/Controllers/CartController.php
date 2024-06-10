<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartItemTizerOffer;
use App\Http\Resources\Offer as ResourcesOffer;
use App\Http\Resources\Product;
use App\Http\Resources\ProductTizer;
use App\Models\Offer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Cart', [
            'pagetitle' => 'Корзина',
            'lastorder' => Auth::user()->orders()->orderByDesc('id')->first(),
            'meta' => [
                'title' => 'Корзина',
                'description' => 'Корзина'
            ],
            'breadcrumbs' => [
                [
                    'text' => 'Главная',
                    'route' => 'home'
                ],
                [
                    'text' => 'Корзина'
                ]
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request)
    {
        if ($request->item) {
            $offer = Offer::find($request->item);
            if ($offer && $this->cart) {
                $itemOffer = $this->cart->items()->where('offer_id', $offer->id)->first();
                foreach ($offer->prices as $price)   if ($price->currency == 'тен' || $price->currency == 'KZT') break;
                if ($price) {
                    if ($itemOffer) {
                        $itemOffer->update([
                            'price' => $price->value,
                            'quantity' => $itemOffer->quantity + ($request->quantity ?: 1)
                        ]);
                    } else {
                        $this->cart->items()->create([
                            'offer_id' => $offer->id,
                            'price' => $price->value,
                            'quantity' => $request->quantity ?: 1
                        ]);
                    }
                }
            }
        }
        $added = $request->silent ? null : new CartItemTizerOffer($offer);
        return redirect()->back()->with(['added' => $added]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function subtract(Request $request)
    {
        if ($request->item) {
            $offer = Offer::find($request->item);
            if ($offer && $this->cart) {
                $itemOffer = $this->cart->items()->where('offer_id', $offer->id)->first();
                foreach ($offer->prices as $price)   if ($price->currency == 'тен' || $price->currency == 'KZT') break;
                $itemOffer = $this->cart->items()->where('offer_id', $offer->id)->first();
                if ($itemOffer) {
                    $itemOffer->update([
                        'price' => $price->value,
                        'quantity' => $itemOffer->quantity - ($request->quantity ?: 1)
                    ]);
                }
                if (!$itemOffer->quantity) {
                    $itemOffer->delete();
                }
            }
        }
        $added = $request->silent ? null : new CartItemTizerOffer($offer);
        return redirect()->back()->with(['added' => $added]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        if ($request->item) {
            $offer = Offer::find($request->item);
            if ($offer && $this->cart) {
                $itemOffer = $this->cart->items()->where('offer_id', $offer->id)->first();
                $itemOffer && $itemOffer->delete();
            }
        }
        return redirect()->back();
    }
}
