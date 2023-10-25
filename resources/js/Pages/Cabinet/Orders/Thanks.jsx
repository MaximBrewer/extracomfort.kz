import React, { useState } from 'react';
import { useLayout } from '@/Contexts/LayoutContext';
import { Head, Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Cart from '@/Icons/Cart';

export default (props) => {

    return (
        <Layout {...props}>
            <Head {...props} />
            <div className="thank-you">
                <div className="container-outer">
                    <div className="thank-you__outer">
                        <div className="thank-you__inner">
                            <div className="thank-you__title fw-700-45-55">
                                <p>Спасибо за заказ</p>
                            </div>
                            <div className="thank-you__subtitle fw-400-20-24">
                                <p>Наш менеджер свяжется с вами в ближайшее время</p>
                            </div>
                            <div className="thank-you__btn-group">
                                <Link href={route('catalog')} className="btn-primary thank-you__btn-primary">
                                    <div className="btn-purchase__cart-icon center">
                                        <Cart className="w-4 h-4 shrink-0" />
                                    </div>
                                    <div className="btn-purchase__txt fw-700-16-20 center">
                                        <p>Продолжить покупки</p>
                                    </div>
                                </Link>
                                <Link href={route('cabinet.orders.index')} className="btn-secondary thank-you__btn-secondary fw-700-16-20 center">
                                    <p>Мои заказы</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
