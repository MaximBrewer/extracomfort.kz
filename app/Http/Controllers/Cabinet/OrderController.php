<?php

namespace App\Http\Controllers\Cabinet;

use App\Http\Controllers\Controller;
use App\Http\Requests\AssignOrderRequest;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Resources\Order as ResourcesOrder;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use hb\epay\HBepay;
use Illuminate\Support\Facades\Log;

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
        $orders = $user->orders()->current();

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
        $orders = $user->orders()->archive();

        return Inertia::render("Cabinet/Orders/History", [
            'orders' => ResourcesOrder::collection($orders->archive()->paginate(50)),
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
        // dump($order->id);
        // dump($this->cart);

        $this->cart && $this->cart->update([
            'order_id' => $order->id,
            'user_id' => null,
            'session_id' => null
        ]);

        // dd($this->cart);

        if ($order->payment_id == 3) {
            return Inertia::location(route('pay', [
                'order' => $order->id
            ]));
        }

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


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function pay(Order $order)
    {
        // dd($this->cart);
        $pay_order = new HBepay();
        return $pay_order->gateway(
            "",
            "EXTRACOMFORT.KZ",
            "x2MCo7LbtxNvFlqa",
            "d3363a74-ce0c-46bf-8f87-42248d793090",
            str_pad($order->id, 9, '0', STR_PAD_LEFT),
            $order->cart->sum,
            "KZT",
            // route('cabinet.orders.thanks'),
            // route('cabinet.orders.thanks'),
            url("https://extracomfort.kz/cabinet/orders"),
            url("https://extracomfort.kz/cabinet/orders"),
            url("https://extracomfort.kz/payed"),
            url("https://extracomfort.kz/payed")
        );
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function payed(Request $request)
    {
        Log::info($request);
        return 'ok';
    }
}
// Добрый день
 
// Данные по виртуальному терминалу EPAY 2.0
 
 
// https://epay.homebank.kz 
// email    :   ortokar2@mail.ru

// Номер процесса: 176340339
// password   :     wn73CbyY
// TerminalID : 61e58a47-f86a-4b5f-a9c4-86a132a141a4
// ClientID : EXTRACOMFORT.KZ2
// ClientSecret :  P2HTuj(MEvIdawQB
// Терминал: 92092922

// Номер процесса: 176340305
// password   :  TYlK6Uvk   
// TerminalID : d3363a74-ce0c-46bf-8f87-42248d793090
// ClientID : EXTRACOMFORT.KZ
// ClientSecret :  x2MCo7LbtxNvFlqa
// Терминал: 92092921
 
// Ссылка на документацию: https://epayment.kz/ru/docs/platezhnaya-stranica