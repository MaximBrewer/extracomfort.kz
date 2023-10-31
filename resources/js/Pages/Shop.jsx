import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';

import Slider from 'react-slick';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
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

    const {
        categories,
        shopBannerTop,
        shopBannerBottomTitle,
        shopBannerTopText,
        shopBannerTopButtonText,
        shopBannerBottom,
        shopBannerBottomText,
        shopBannerBottomButtonText
    } = window.appdata;


    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="main-block">
                <div className="main-bg bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${shopBannerTop})` }} />
                <div className="container-outer">
                    <div className="main-content">
                        <h1 className="text-3xl max-w-4xl text-white xl:w-2/3">{shopBannerTopText}</h1>
                        <Link href={route('catalog')}><button className="btn-primary fw-700-16-20 py-4 px-6 mt-7">{shopBannerTopButtonText}</button></Link>
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
            <div className="bottom-banner" style={{ backgroundImage: `url(${shopBannerBottom})` }}>
                <div className="container-outer">
                    <div className="bottom-banner__outer">
                        <div className="bottom-banner__inner">
                            <div className="bottom-banner__title fw-700-36-50">{shopBannerBottomTitle}</div>
                            <div className="bottom-banner__subtitle fw-700-26-35">{shopBannerBottomText}</div>
                            <div className="my-6 text-center">
                                <Link href={route('services')} className="main-page-link-btn -purple">{shopBannerBottomButtonText}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
