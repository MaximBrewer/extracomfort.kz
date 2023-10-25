<?php

namespace App\Http\Controllers;

use App\Http\Resources\Category as ResourcesCategory;
use App\Http\Resources\Facility as ResourcesFacility;
use App\Http\Resources\Menu as ResourcesMenu;
use App\Models\Cart;
use App\Models\Category;
use App\Models\Facility;
use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;
use Inertia\Inertia;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Models\Menu;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public $cart = null;
    public $favorites = null;

    public function __construct()
    {

        $topCategory = Category::whereNull('parent_id')->orderBy('id')->firstOrFail();
        $categories = ResourcesCategory::collection(Category::where('parent_id', $topCategory->id)->with('children')->get());
        $facilities = ResourcesFacility::collection(Facility::whereNull('parent_id')->with('children')->get());

        $menus = ResourcesMenu::collection(Menu::whereNot('name', 'admin')->get());
        $email = setting('contacts.email');
        $footeremail = setting('site.footeremail');
        $footerphone = setting('site.footerphone');
        $headerphone = setting('site.headerphone');
        $copyright = setting('site.copyright');
        $copyright = setting('site.copyright');

        $shopBannerTop = Voyager::image(setting('shop.banner_top_image'));
        $shopBannerTopText = setting('shop.banner_top_text');
        $shopBannerTopButtonText = setting('shop.banner_top_btn_text');

        $shopBannerBottom = Voyager::image(setting('shop.banner_bottom_image'));
        $shopBannerBottomText = setting('shop.banner_bottom_text');
        $shopBannerBottomTitle = setting('shop.banner_bottom_title');
        $shopBannerBottomButtonText = setting('shop.banner_bottom_btn_text');

        $servicesBannerBottom = Voyager::image(setting('services.banner_bottom_image'));
        $servicesBannerBottomTitle = setting('services.banner_bottom_title');
        $servicesBannerBottomText = setting('services.banner_bottom_text');
        $servicesBannerBottomButtonText = setting('services.banner_bottom_btn_text');

        View::share('appdata', compact(
            'menus',
            'email',
            'categories',
            'facilities',
            'footeremail',
            'footerphone',
            'headerphone',
            'shopBannerBottom',
            'shopBannerBottomTitle',
            'shopBannerBottomText',
            'shopBannerBottomButtonText',
            'shopBannerTop',
            'shopBannerTopText',
            'shopBannerTopButtonText',
            'servicesBannerBottom',
            'servicesBannerBottomTitle',
            'servicesBannerBottomText',
            'servicesBannerBottomButtonText',
            'copyright'
        ));
    }

    /**
     * Execute an action on the controller.
     *
     * @param  string  $method
     * @param  array  $parameters
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function callAction($method, $parameters)
    {
        $this->cart = Auth::check() ? Auth::user()->cart : (Session::getId() ? Cart::where('session_id', Session::getId())->first() : null);
        if (!$this->cart) {
            if (Auth::check()) {
                $this->cart = Cart::where('session_id', Session::getId())->first();
                if ($this->cart) {
                    $this->cart->update([
                        'user_id' => Auth::id()
                    ]);
                }
                $this->cart = $this->cart ?: Cart::firstOrCreate([
                    'user_id' => Auth::id()
                ], [
                    'session_id' => Session::getId()
                ]);
            } elseif (Session::getId()) {
                $this->cart = Cart::firstOrCreate(['session_id' => Session::getId()]);
            }
        }
        $this->cart->calc();
        Inertia::share('cart', new \App\Http\Resources\Cart($this->cart));

        $favorites = Auth::check() ? User::find(Auth::id())->favorites()->pluck('id')->toArray() : (Session::get('favorites'));

        if (!$favorites) {
            $favorites = [];
            Session::put('favorites', $favorites);
        }
        Inertia::share('favorites', $favorites);
        Inertia::share('sitenote', setting('site.note'));
        return $this->{$method}(...array_values($parameters));
    }
}
