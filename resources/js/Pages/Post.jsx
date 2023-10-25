import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';

import PromotionBlockImg from "../../images/promotion-block-img.png"
import Slider from 'react-slick';

export default (props, { pagetitle = `` }) => {


    var settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        arrows: true,
        // prevArrow: '<div className="slick-arrow-wrapper arrow-left center"><ion-icon name="arrow-back-outline"></ion-icon></div>',
        // nextArrow: '<div className="slick-arrow-wrapper arrow-right center"><ion-icon name="arrow-forward-outline"></ion-icon></div>',
        dots: true,
        responsive: [{
            breakpoint: '600',
            variableWidth: true
        }]
    };


    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="hero">
            </div>
            <div className="promotion-wrapper">
                <div className="container-outer">
                    <div className="promotion__outer">
                        <div className="promotion__inner">
                            <div className="promotion-title fw-700-36-50">
                                <p>Акционные товары</p>
                            </div>
                            <div className="promotion-main-wrapper center">
                                <div className="promotion-main__left">
                                    <Slider {...settings} className="promotion-goods-slick">
                                        <div className="promotion-goods__item">
                                            <div className="promotion-goods__title fw-700-26-35">
                                                <p>Название товара</p>
                                            </div>
                                            <div className="promotion-goods__desc fw-400-15-25">
                                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                            </div>
                                            <div className="promotion-prices-wrapper">
                                                <div className="promotion-price-main fw-700-48-72">
                                                    <p>25 000 тг</p>
                                                </div>
                                                <div className="promotion-price-discount fw-400-24-36 center">
                                                    <p><s>40 000 тг</s></p>
                                                </div>
                                            </div>
                                            <div className="promotion-btn-group-wrapper">
                                                <button className="btn-primary fw-400-18-30">В корзину</button>
                                                <button className="btn-secondary fw-400-18-30">Подробнее</button>
                                            </div>
                                        </div>
                                        <div className="promotion-goods__item">
                                            <div className="promotion-goods__title fw-700-26-35">
                                                <p>Тренажер для спины</p>
                                            </div>
                                            <div className="promotion-goods__desc fw-400-15-25">
                                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                            </div>
                                            <div className="promotion-prices-wrapper">
                                                <div className="promotion-price-main fw-700-48-72">
                                                    <p>120 000 тг</p>
                                                </div>
                                                <div className="promotion-price-discount fw-400-24-36 center">
                                                    <p><s>165 400 тг</s></p>
                                                </div>
                                            </div>
                                            <div className="promotion-btn-group-wrapper">
                                                <button className="btn-primary fw-400-18-30">В корзину</button>
                                                <button className="btn-secondary fw-400-18-30">Подробнее</button>
                                            </div>
                                        </div>
                                        <div className="promotion-goods__item">
                                            <div className="promotion-goods__title fw-700-26-35">
                                                <p>Система подогрева Omron</p>
                                            </div>
                                            <div className="promotion-goods__desc fw-400-15-25">
                                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                            </div>
                                            <div className="promotion-prices-wrapper">
                                                <div className="promotion-price-main fw-700-48-72">
                                                    <p>80 000 тг</p>
                                                </div>
                                                <div className="promotion-price-discount fw-400-24-36 center">
                                                    <p><s>105 600 тг</s></p>
                                                </div>
                                            </div>
                                            <div className="promotion-btn-group-wrapper">
                                                <button className="btn-primary fw-400-18-30">В корзину</button>
                                                <button className="btn-secondary fw-400-18-30">Подробнее</button>
                                            </div>
                                        </div>
                                        <div className="promotion-goods__item">
                                            <div className="promotion-goods__title fw-700-26-35">
                                                <p>Чайник (+ фильтр)</p>
                                            </div>
                                            <div className="promotion-goods__desc fw-400-15-25">
                                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                            </div>
                                            <div className="promotion-prices-wrapper">
                                                <div className="promotion-price-main fw-700-48-72">
                                                    <p>32 000 тг</p>
                                                </div>
                                                <div className="promotion-price-discount fw-400-24-36 center">
                                                    <p><s>45 000 тг</s></p>
                                                </div>
                                            </div>
                                            <div className="promotion-btn-group-wrapper">
                                                <button className="btn-primary fw-400-18-30">В корзину</button>
                                                <button className="btn-secondary fw-400-18-30">Подробнее</button>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                                <div className="promotion-main__right">
                                    <img src={PromotionBlockImg} alt="" />
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="bottom-banner">
                <div className="container-outer">
                    <div className="bottom-banner__outer">
                        <div className="bottom-banner__inner">
                            <div className="bottom-banner__title fw-700-36-50">
                                <p>Лечение опорно-двигательной системы</p>
                            </div>
                            <div className="bottom-banner__subtitle fw-700-26-35">
                                <p>Основна сфера деяльности – краткое описание желательно в две строки</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
