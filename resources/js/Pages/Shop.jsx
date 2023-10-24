import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';

import Main1Img from "@/../images/img-main-1.jpg"
import Slider from 'react-slick';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import NoPhoto from '@/Icons/NoPhoto';
import Cart2 from '@/Icons/Cart2';
import Star from '@/Icons/Star';
import ProductTizer from '@/Components/ProductTizer';
import CategoryTizer from '@/Components/CategoryTizer';


function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow-purple similar-products-slick__arrow-left center`}
            onClick={onClick}
        >
            <ArrowLeftIcon className="w-6 h-6 shrink-0" />
        </div>
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow-purple similar-products-slick__arrow-right center`}
            onClick={onClick}
        >
            <ArrowRightIcon className="w-6 h-6 shrink-0" />
        </div>
    );
}

var settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dots: true,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 460,
        settings: {
            slidesToShow: 1
        }
    }]
};

export default (props) => {

    const { pagetitle, products } = props

    const { categories } = window.appdata;


    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="main-block">
                <div className="main-bg">
                    <img src={Main1Img} alt="" />
                </div>
                <div className="container-outer">
                    <div className="main-content">
                        <h1 className="main-title xl:w-2/3">Хруст в коленях – норма или повод обратиться к врачу?</h1>
                        <Link href={route('catalog')}><button className="btn-primary fw-700-16-20 py-4 px-6 mt-7">Посмотреть каталог</button></Link>
                    </div>
                </div>
            </div>
            <div className="similar-products">
                <div className="container-outer">
                    <div className="similar-products__outer pb-0">
                        <div className="similar-products__inner">
                            {/* <div className="similar-products-title-label similar-products__similar-products-title-label fw-700-45-55">Категории товаров</div> */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {categories.map((item, index) => <CategoryTizer key={index} item={item} />
                                    // <Link href={route('category', {
                                    //                                 category: item.slug
                                    //                             })} key={index} className="p-6 bg-white shadow text-center flex flex-col gap-3 justify-between items-center">
                                    //                                 <div>
                                    //                                     <div className="w-12 h-12 bg-center bg-no-repeat bg-contain mx-auto mb-2"
                                    //                                         style={{ backgroundImage: `url('${item.image}')` }}
                                    //                                     />
                                    //                                     <div className="font-semibold">{item.name}</div>
                                    //                                 </div>
                                    //                                 <Link href={route('category', {
                                    //                                     category: item.slug
                                    //                                 })} className="border border-purple-900 px-6 py-1.5 rounded-full text-purple-900 text-center" >Подробнее</Link>
                                    //                             </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="similar-products">
                <div className="container-outer">
                    <div className="similar-products__outer">
                        <div className="similar-products__inner">
                            <div className="similar-products-title-label similar-products__similar-products-title-label fw-700-45-55">Акционные товары</div>
                            <Slider {...settings} className="similar-products-slick-main">
                                {products.data.map((item, index) => <div key={index} className="catalogue-item slick-slide">
                                    <ProductTizer item={item} />
                                </div>)}
                            </Slider>
                            <div className="similar-products__btn-wrapper">
                                <button className="btn-primary similar-products__btn-primary fw-400-18-30">Посмотреть все</button>
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
                            <div className="my-6 text-center">
                                <Link href={route('services')} className="main-page-link-btn -purple">Перейти</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
