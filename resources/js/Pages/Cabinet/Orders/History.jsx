import React, { useState } from 'react';
import { useLayout } from '@/Contexts/LayoutContext';
import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import CabinetTop from '@/Components/CabinetTop';
import CabinetPanel from '@/Components/CabinetPanel';
import NoPhoto from '@/Icons/NoPhoto';

export default (props) => {

    const { orders } = props

    const { numWord, priceFormat, moment } = useLayout();

    // const [index, setIndex] = useState(0)
    // const [processing, setProcessing] = useState(false)

    // const paylink = (order) => {
    //     setProcessing(true)
    //     axios.get(route('paybox.paylink', {
    //         order: order.id
    //     }))
    //         .then((data) => {
    //             setProcessing(false)
    //             if (data && data.data && data.data.pg_redirect_url) {
    //                 location.href = data.data.pg_redirect_url
    //             }
    //         })
    //         .catch((error) => {
    //             setProcessing(false)
    //         })
    // }

    return (
        <Layout {...props}>
            <Head {...props} />
            <div className="cabinet-page bg-white py-10 md:py-20">
                <div className="container-outer">
                    <CabinetTop {...props} />
                    <div className="flex flex-col lg:flex-row items-start gap-7">
                        <CabinetPanel />
                        <div className="cabinet-content ">
                            <div className="cabinet-current-orders white-block -gray">

                                {orders.data.map((order) => <div key={order.id} className="current-orders-items">
                                    <div className="flex justify-between gap-6 items-start">
                                        <div className="flex flex-col items-start gap-x-6 gap-y-3">
                                            {order.cart ? order.cart.items.map((item) => <div key={item.id} className="flex flex-col md:flex-row items-start gap-x-6 gap-y-3">
                                                <div className="current-order-img shrink-0">
                                                    {item.offer.product.images.length ? <div className='pt-[100%] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url('${item.offer.product.images[0].url}')` }} /> : <div className="pt-[100%] relative">
                                                        <NoPhoto className="absolute w-full h-auto text-gray-300 top-1/2 -translate-y-1/2" />
                                                    </div>}
                                                </div>
                                                <div className="current-order-text">
                                                    <div className="flex flex-col gap-2">
                                                        <p className="current-order-name">{item.offer.product.title}</p>
                                                        <div className="current-order-subname">
                                                            <div className="current-order-count">Количество х{item.quantity}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>) : <></>}
                                            <div className="current-order-date">{moment(order.created_at).format('DD.MM.YYYY')}</div>
                                            {order.status ? <div className="flex flex-col md:flex-row items-start gap-x-6 gap-y-3">
                                                <div className="current-order-status" style={{ backgroundColor: order.status.color }}>
                                                    {order.status.title}
                                                </div>
                                                <div className="current-order-price">{priceFormat(order.cart.sum)}</div>
                                            </div> : <></>}
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}
