<?php

namespace App\Http\Controllers\Cabinet;

use NumberToWords\NumberToWords;
use App\Http\Controllers\Controller;
use App\Http\Requests\AssignOrderRequest;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Resources\CourierOrder;
use App\Http\Resources\Order as ResourcesOrder;
use App\Http\Resources\SellerOrder;
use App\Http\Resources\Store as ResourcesStore;
use App\Models\Order;
use App\Models\Store;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;


class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = User::find(Auth::id());
        $orders = $user->orders()->whereHas('cart')->with('cart');

        return Inertia::render("Cabinet/Orders/Index", [
            'orders' => ResourcesOrder::collection($orders->get()),
            'pagetitle' => 'Мои заказы',
            'meta' => [
                'title' => 'Мои заказы',
                'description' => 'Мои заказы'
            ],
            'breadcrumbs' => [
                [
                    'text' => 'Главная',
                    'route' => 'home'
                ],
                [
                    'text' => 'Мои заказы'
                ]
            ],
        ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function history()
    {
        $user = User::find(Auth::id());
        $orders = $user->orders()->whereHas('cart')->with('cart');

        return Inertia::render("Cabinet/Orders/History", [
            'orders' => ResourcesOrder::collection($orders->get()),
            'pagetitle' => 'Мои заказы',
            'meta' => [
                'title' => 'Мои заказы',
                'description' => 'Мои заказы'
            ],
            'breadcrumbs' => [
                [
                    'text' => 'Главная',
                    'route' => 'home'
                ],
                [
                    'text' => 'Мои заказы'
                ]
            ],
        ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function thanks()
    {
        $user = User::find(Auth::id());
        $orders = $user->orders;

        return Inertia::render("Cabinet/Orders/Thanks", [
            'pagetitle' => 'Мои заказы',
            'meta' => [
                'title' => 'Мои заказы',
                'description' => 'Мои заказы'
            ],
            'breadcrumbs' => [
                [
                    'text' => 'Главная',
                    'route' => 'home'
                ],
                [
                    'text' => 'Мои заказы'
                ]
            ],
        ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function delivered()
    {
        // $type = ucfirst(strtolower(Auth::user()->type));

        // switch ($type) {
        //     case 'Delivery':
        //         $orders = CourierOrder::collection(Order::current()->where('delivery_id', Auth::id())->paginate(12));
        //         break;
        //     default:
        //         return redirect()->route('cabinet.index');
        // }

        // return Inertia::render("Cabinet/$type/Orders/Index", [
        //     'orders' => $orders,
        //     'title' => 'Заказы к доставке'
        // ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // $type = ucfirst(strtolower(Auth::user()->type));
        // if ($type != 'Buyer') return redirect()->route('cabinet.index');
        // return Inertia::render("Cabinet/$type/Orders/Create", [
        //     'times' => [
        //         ['title' => '10-11'],
        //         ['title' => '11-12'],
        //         ['title' => '12-13'],
        //         ['title' => '13-14'],
        //     ],
        //     'stores' => ResourcesStore::collection(Store::active()->get())
        // ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrderRequest $request)
    {
        $order = User::find(Auth::id())->orders()->create($request->all());
        $this->cart->update([
            'order_id' => $order->id,
            'user_id' => null,
            'session_id' => null
        ]);
        return redirect()->route('cabinet.orders.thanks');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function assign(AssignOrderRequest $request, Order $order)
    {
        // $order->update(['delivery_id' => Auth::id()]);
        // $order->setStatus('PROCESSING');
        // return redirect()->back();
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        // $type = ucfirst(strtolower(Auth::user()->type));

        // switch ($type) {
        //     case 'Buyer':
        //         $orderResource = new ResourcesOrder($order);
        //         break;
        //     case 'Seller':
        //         $orderResource = new SellerOrder($order);
        //         break;
        //     case 'Delivery':
        //         $orderResource = new CourierOrder($order);
        //         break;
        // }

        // if (Order::$statuses[$order->status_id] === 'NEW') {
        //     Inertia::share('pay', true);
        //     $order->setStatus('PROCESSING');
        // }

        // return Inertia::render("Cabinet/$type/Orders/Show", [
        //     'order' => $orderResource
        // ]);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function invoice(Order $order)
    {
        // $data = [
        //     'metatitle' => 'Счет на оплату № ' . $order->id . ' от ' . $order->created_at->format('d.m.Y'),
        //     'org' => setting('requisites.title'),
        //     'bin' => setting('requisites.bin'),
        //     'iik' => setting('requisites.iik'),
        //     'kbe' => setting('requisites.kbe'),
        //     'bank' => setting('requisites.bank'),
        //     'bik' => setting('requisites.bik'),
        //     'code' => setting('requisites.code'),
        //     'title' => 'Счет на оплату № ' . $order->id . ' от ' . $order->created_at->format('d.m.Y'),
        //     'supplier' => setting('requisites.supplier'),
        //     'contract' => 'Договор поставки № ' . $order->id,
        //     'items' => $order->cart->items,
        //     'total' => '<p>Всего наименований ' . count($order->cart->items) . ', на сумму ' . number_format($order->cart->sum, 2, ',', ' ') . ' KZT<br/><b>Всего к оплате: ' . NumberToWords::transformNumber('ru', $order->cart->sum) . ' тенге</b></p>',
        //     'fio' => setting('requisites.fio'),
        // ];
        // Pdf::setOption(['dpi' => 150, 'defaultFont' => 'dejavu sans']);
        // $pdf = Pdf::loadView('pdf.invoice', $data);
        // return $pdf->stream();
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function archive()
    {
        // $type = ucfirst(strtolower(Auth::user()->type));

        // switch ($type) {
        //     case 'Buyer':
        //         $orders = ResourcesOrder::collection(User::find(Auth::id())->orders()->archive()->paginate(12));
        //         break;
        //     case 'Seller':
        //         $orders = SellerOrder::collection(Order::archive()->whereHas('cart', function (Builder $query) {
        //             $query->whereHas('items', function (Builder $query) {
        //                 $query->whereHas('part', function (Builder $query) {
        //                     $query->where('user_id', Auth::id());
        //                 });
        //             });
        //         })->paginate(12));
        //         break;
        //     case 'Delivery':
        //         $orders = CourierOrder::collection(Order::archive()->whereNull('delivery_id')->paginate(12));
        //         break;
        // }

        // return Inertia::render("Cabinet/$type/Orders/Index", [
        //     'orders' => $orders,
        //     'title' => 'Архив заказов'
        // ]);
    }
}
