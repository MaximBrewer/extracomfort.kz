import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';

import ImgOrthopedic1 from "@/../images/img-orthopedic-1.png"
import ImgAbout1 from "@/../images/img-about-1.png"

import ImgParner1 from "@/../images/img-partners-logo-1.png"
import ImgParner2 from "@/../images/img-partners-logo-2.png"
import ImgParner3 from "@/../images/img-partners-logo-3.png"
import ImgParner4 from "@/../images/img-partners-logo-4.png"
import ImgParner5 from "@/../images/img-partners-logo-5.png"
import ImgParner6 from "@/../images/img-partners-logo-6.png"




import Slider from 'react-slick';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import NoPhoto from '@/Icons/NoPhoto';
import Cart2 from '@/Icons/Cart2';
import Star from '@/Icons/Star';
import ProductTizer from '@/Components/ProductTizer';
import FormAppDoctor from '@/Components/FormAppDoctor';
import Breadcrumbs from '@/Components/Breadcrumbs';



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

export default (props) => {

    const { pagetitle, partners } = props

    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="bg-white">
                <div className="container-outer">
                    <div className="catalogue-categories mt-0 pt-8">
                        <div className="container-outer">
                            <div className="catalogue-categories__outer">
                                <div className="catalogue-categories__inner">
                                    <Breadcrumbs {...props} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="partners-page">
                        <div className="container-outer">
                            <div className="catalogue-section__title refund__title center fw-700-45-55 mb-11">
                                <p>Партнеры</p>
                            </div>
                            <div className="partners-content">
                                <div className="grid md:grid-cols-2 gap-x-8 gap-y-7">
                                    {partners.data.map((item, index) => <div key={index} className="partners-content-items">
                                        <div className="flex flex-col lg:flex-row gap-5 items-center mb-4">
                                            <div className="partner-img">
                                                <img src={item.image} alt="" className="max-w-[175px]"/>
                                            </div>
                                            <h3 className="partner-name">{item.title}</h3>
                                        </div>
                                        <div className="partner-description">{item.text}</div>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
