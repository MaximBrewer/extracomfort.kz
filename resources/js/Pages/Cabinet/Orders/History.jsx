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
                                            {order.cart.items.map((item) => <div key={item.id} className="flex flex-col md:flex-row items-start gap-x-6 gap-y-3">
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
                                            </div>)}
                                            <div className="current-order-date">{moment(order.created_at).format('DD.MM.YYYY')}</div>
                                            {/* <div className="flex flex-col md:flex-row items-start gap-x-6 gap-y-3">
                                                <div className="current-order-status -aqua">
                                                    Оплачено
                                                </div>
                                                <div className="current-order-price">{priceFormat(order.cart.sum)}</div>
                                            </div> */}
                                        </div>
                                        <div className="flex items-center justify-end gap-11">
                                            <button className="current-order-remove">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_0_3286)">
                                                        <path d="M12.2028 9.99984L19.6805 2.52179C19.8862 2.31594 19.9997 2.0413 20 1.74846C20 1.45545 19.8865 1.18049 19.6805 0.97496L19.0252 0.319838C18.8192 0.113496 18.5446 0.000488281 18.2514 0.000488281C17.9587 0.000488281 17.6841 0.113496 17.478 0.319838L10.0003 7.7974L2.52228 0.319838C2.31659 0.113496 2.04179 0.000488281 1.74878 0.000488281C1.4561 0.000488281 1.1813 0.113496 0.97561 0.319838L0.32 0.97496C-0.106667 1.40163 -0.106667 2.09561 0.32 2.52179L7.79789 9.99984L0.32 17.4776C0.114146 17.6837 0.000813008 17.9584 0.000813008 18.2512C0.000813008 18.5441 0.114146 18.8187 0.32 19.0247L0.975447 19.6798C1.18114 19.886 1.4561 19.9992 1.74862 19.9992C2.04163 19.9992 2.31642 19.886 2.52211 19.6798L10.0002 12.2021L17.4779 19.6798C17.6839 19.886 17.9585 19.9992 18.2512 19.9992H18.2515C18.5444 19.9992 18.819 19.886 19.025 19.6798L19.6803 19.0247C19.886 18.8189 19.9995 18.5441 19.9995 18.2512C19.9995 17.9584 19.886 17.6837 19.6803 17.4777L12.2028 9.99984Z" fill="black" fillOpacity="0.2" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_0_3286">
                                                            <rect width="20" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>)}
                                {/* <div className="current-orders-items">
                                        <div className="flex justify-between gap-6 items-center">
                                            <div className="flex flex-col items-start gap-x-6 gap-y-3">
                                                <div className="flex flex-col md:flex-row items-start gap-x-6 gap-y-3">
                                                    <div className="current-order-img">
                                                        <img src="./assets/images/catalogue-item-photo.svg" alt="" className="">
                                                    </div>
                                                    <div className="current-order-text">
                                                        <div className="flex flex-col gap-2">
                                                            <p className="current-order-name">
                                                                Название товара
                                                            </p>
                                                            <div className="current-order-subname">
                                                                <div className="current-order-count">Количество х1</div>
                                                                <div className="current-order-date">20.05.2021</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col md:flex-row items-start gap-x-6 gap-y-3">
                                                    <div className="current-order-status -orange">
                                                        Товар в пути
                                                    </div>
                                                    <div className="current-order-price">
                                                        40 000 тг
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-end gap-11">
                                                <button className="current-order-remove">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_0_3286)">
                                                            <path d="M12.2028 9.99984L19.6805 2.52179C19.8862 2.31594 19.9997 2.0413 20 1.74846C20 1.45545 19.8865 1.18049 19.6805 0.97496L19.0252 0.319838C18.8192 0.113496 18.5446 0.000488281 18.2514 0.000488281C17.9587 0.000488281 17.6841 0.113496 17.478 0.319838L10.0003 7.7974L2.52228 0.319838C2.31659 0.113496 2.04179 0.000488281 1.74878 0.000488281C1.4561 0.000488281 1.1813 0.113496 0.97561 0.319838L0.32 0.97496C-0.106667 1.40163 -0.106667 2.09561 0.32 2.52179L7.79789 9.99984L0.32 17.4776C0.114146 17.6837 0.000813008 17.9584 0.000813008 18.2512C0.000813008 18.5441 0.114146 18.8187 0.32 19.0247L0.975447 19.6798C1.18114 19.886 1.4561 19.9992 1.74862 19.9992C2.04163 19.9992 2.31642 19.886 2.52211 19.6798L10.0002 12.2021L17.4779 19.6798C17.6839 19.886 17.9585 19.9992 18.2512 19.9992H18.2515C18.5444 19.9992 18.819 19.886 19.025 19.6798L19.6803 19.0247C19.886 18.8189 19.9995 18.5441 19.9995 18.2512C19.9995 17.9584 19.886 17.6837 19.6803 17.4777L12.2028 9.99984Z" fill="black" fillOpacity="0.2" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_0_3286">
                                                                <rect width="20" height="20" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="current-orders-items">
                                        <div className="flex justify-between gap-6 items-center">
                                            <div className="flex flex-col items-start gap-x-6 gap-y-3">
                                                <div className="flex flex-col md:flex-row items-start gap-x-6 gap-y-3">
                                                    <div className="current-order-img">
                                                        <img src="./assets/images/catalogue-item-photo.svg" alt="" className="">
                                                    </div>
                                                    <div className="current-order-text">
                                                        <div className="flex flex-col gap-2">
                                                            <p className="current-order-name">
                                                                Название товара
                                                            </p>
                                                            <div className="current-order-subname">
                                                                <div className="current-order-count">Количество х1</div>
                                                                <div className="current-order-date">20.05.2021</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col md:flex-row items-start gap-x-6 gap-y-3">
                                                    <div className="current-order-status -green">
                                                        Завершен
                                                    </div>
                                                    <div className="current-order-price">
                                                        40 000 тг
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-end gap-11">
                                                <button className="current-order-remove">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_0_3286)">
                                                            <path d="M12.2028 9.99984L19.6805 2.52179C19.8862 2.31594 19.9997 2.0413 20 1.74846C20 1.45545 19.8865 1.18049 19.6805 0.97496L19.0252 0.319838C18.8192 0.113496 18.5446 0.000488281 18.2514 0.000488281C17.9587 0.000488281 17.6841 0.113496 17.478 0.319838L10.0003 7.7974L2.52228 0.319838C2.31659 0.113496 2.04179 0.000488281 1.74878 0.000488281C1.4561 0.000488281 1.1813 0.113496 0.97561 0.319838L0.32 0.97496C-0.106667 1.40163 -0.106667 2.09561 0.32 2.52179L7.79789 9.99984L0.32 17.4776C0.114146 17.6837 0.000813008 17.9584 0.000813008 18.2512C0.000813008 18.5441 0.114146 18.8187 0.32 19.0247L0.975447 19.6798C1.18114 19.886 1.4561 19.9992 1.74862 19.9992C2.04163 19.9992 2.31642 19.886 2.52211 19.6798L10.0002 12.2021L17.4779 19.6798C17.6839 19.886 17.9585 19.9992 18.2512 19.9992H18.2515C18.5444 19.9992 18.819 19.886 19.025 19.6798L19.6803 19.0247C19.886 18.8189 19.9995 18.5441 19.9995 18.2512C19.9995 17.9584 19.886 17.6837 19.6803 17.4777L12.2028 9.99984Z" fill="black" fillOpacity="0.2" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_0_3286">
                                                                <rect width="20" height="20" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}
