import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/react";

import ImgMain1 from "@/../images/img-main-1.jpg"
import FormAppDoctor from "@/Components/FormAppDoctor";
import Slider from 'react-slick';
import Breadcrumbs from "@/Components/Breadcrumbs";
import CallBack from "@/Modals/CallBack";
import { useLayout } from "@/Contexts/LayoutContext";
import FacilityTizer from "@/Components/FacilityTizer";
import ImgOrthopedic1 from "@/../images/img-orthopedic-1.png"
import ImgAbout1 from "@/../images/img-about-1.png"
import parse from "html-react-parser"

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';


function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} z-10 left-0 lg:left-24 top-1/2 -translate-y-1/2 bg-purple-900 rounded-full w-10 lg:w-[62px] h-10 lg:h-[62px] flex items-center justify-center text-[#C7C7C7]`}
            onClick={onClick}
        >
            <ChevronLeftIcon className="w-5 lg:w-8 h-5 lg:h-8 shrink-0 relative -top-px" />
        </div>
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} z-10 right-0 lg:right-24 top-1/2 -translate-y-1/2 bg-purple-900 rounded-full w-10 lg:w-[62px] h-10 lg:h-[62px] flex  items-center justify-center text-[#C7C7C7]`}
            onClick={onClick}
        >
            <ChevronRightIcon className="w-5 lg:w-8 h-5 lg:h-8 shrink-0 relative top-px" />
        </div>
    );
}

var setts = {
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: true,
    // dots: true,
    // vertical: true,
    // centerMode: true,
    // infinite: true,
    centerPadding: 0,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1
        }
    }]
};


export default (props) => {

    const {
        pagetitle,
        banners,
        statistics,
        testimonials,
        stattitle,
        statsubtitle,
        aboutImages,
        abouttext1,
        abouttext2
    } = props;

    const {
        facilities,
        servicesBannerBottom,
        servicesBannerBottomTitle,
        servicesBannerBottomText,
        servicesBannerBottomButtonText
    } = window.appdata;

    const { setModal } = useLayout()

    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1200,
        arrows: false,
        prevArrow: '<div className="slick-arrow-purple main-slick__arrow-left center"><ion-icon name="arrow-back-outline"></ion-icon></div>',
        nextArrow: '<div className="slick-arrow-purple main-slick__arrow-right center"><ion-icon name="arrow-forward-outline"></ion-icon></div>',
        dots: true
    };

    return <Layout
        {...props}
    >
        <Head title={pagetitle} />
        <div className="main-block relative">
            <div className="absolute top-0 w-full flex justify-center text-white pt-6">
                <Breadcrumbs {...props} inbanner={true} />
            </div>
            <Slider {...settings} className="main-slider w-full">
                {banners.data.map((item, index) => <div key={index} className="main-slider-item">
                    <div className="main-bg brightness-50">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="container-outer flex flex-col justify-between h-full py-8">
                        <div className="main-content flex flex-col justify-center items-center text-center w-full">
                            <div className="text-3xl font-bold max-w-4xl mx-auto text-center text-white">{item.title}</div>
                            <a href="#" className="btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto" onClick={e => {
                                e.preventDefault()
                                setModal(<CallBack />)
                            }}>Заказать звонок</a>
                        </div>
                        <div></div>
                    </div>
                </div>)}
            </Slider>
        </div>

        <div className="our-services">
            <div className="container-outer">
                <div className="our-services-title">
                    <h2>Наши услуги</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {facilities.map((item, index) => <FacilityTizer key={index} item={item} />)}
                </div>
            </div>
        </div>

        <div className="bg-white">
            <div className="container-outer">
                {/* <div className="appointment-doctor py-24 md:mx-20">
                    <div className="appointment-doctor-title">
                        <h2>Рекомендовано записаться на прием:</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Для сохранения здоровья суставов
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            При лечении мышц и связок
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Для профилактики заболеваний вен
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Перенесшим операцию
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Нуждающимся в реабилитации
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Любителям спорта
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Для коррекции походки
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            При борьбе с головной болью
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Будущим мамам
                        </div>
                    </div>
                </div> */}
                <div className="pb-16">
                    <FormAppDoctor />
                </div>
            </div>
            <div className="container-outer">
                <div className="text-[32px] font-semibold mb-4 text-center">{stattitle}</div>
                <div className="text-zinc-400 text-[28px] mb-10 text-center">{statsubtitle}</div>
                <div className="pb-24 grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {statistics.data.map((item, index) => <div key={index} className="">
                        <div className="flex justify-between items-center mb-5">
                            <div className="w-24 lg:w-36 h-24 lg:h-36 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                                <div className="w-12 lg:w-16 h-12 lg:h-16 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url('${item.icon}')` }} />
                            </div>
                            {index < statistics.data.length - 1 ? <ChevronRightIcon className="w-8 h-8 shrink-0" /> : <></>}
                        </div>
                        <div className="text-zinc-900">{item.title}</div>
                    </div>)}
                </div>
            </div>
            <div className="container-outer">
                <div className="text-[32px] font-semibold mb-4 text-center">Отзывы</div>
                <div className="pb-24 grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.data.map((item, index) => <div key={index} className="bg-slate-50 p-4 rounded-lg">
                        <div className="mb-5 flex flex-col justify-center items-center">
                            <div className="w-12 lg:w-16 h-12 lg:h-16 bg-center bg-cover bg-no-repeat rounded-full" style={{ backgroundImage: `url('${item.photo}')` }} />
                        </div>
                        <div className="text-center mb-4 text-lg font-bold">{item.name}</div>
                        <div className="text-zinc-900">{item.text}</div>
                    </div>)}
                </div>
            </div>
            <div className="container-outer">
                <div className="text-[26px] font-semibold text-center">О компании</div>
                <div className="pb-6">
                    <Slider {...setts} className="about-slider">
                        {aboutImages.data.map((item, index) => <div key={index} className="about-slide-item">
                            <div className="relative">
                                <img src={item.image} alt="" className="w-full block" />
                                <div className="top-0 left-0 bottom-0 right-0 absolute backdrop-blur" />
                            </div>
                        </div>)}
                    </Slider>
                </div>
                <div className="pb-24 grid grid-cols-1 lg:grid-cols-2 gap-6 abouttext">
                    <div>{parse(abouttext1 ?? ``)}</div>
                    <div>
                        <div className="mb-4">{parse(abouttext2 ?? ``)}</div>
                        <div className="flex gap-4 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                                <path d="M26.1002 25.2006V6.30059C26.1002 4.80929 24.8915 3.60059 23.4002 3.60059C21.9089 3.60059 20.7002 4.80929 20.7002 6.30059V24.3006" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M31.5001 26.1004V8.10039C31.5001 6.60909 30.2914 5.40039 28.8001 5.40039C27.3088 5.40039 26.1001 6.60909 26.1001 8.10039" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M30.6001 52.2004V50.4004C30.6001 46.8004 36.0001 44.1004 36.0001 36.9004V12.1504C36.0001 10.9075 34.993 9.90039 33.7501 9.90039C32.5072 9.90039 31.5001 10.9075 31.5001 12.1504" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M15.3001 52.2004V51.3004C15.3001 45.5908 10.126 44.3164 9.1558 37.4296C8.9164 35.7313 8.4205 34.0789 7.5736 32.5867L3.9817 26.2552C3.7315 25.8133 3.6001 25.294 3.6001 24.7504C3.6001 23.0107 5.0104 21.6004 6.7501 21.6004C7.7527 21.6004 8.6455 22.0684 9.2224 22.7983L13.6918 28.4557C13.8565 28.6654 14.113 28.8004 14.4001 28.8004C14.8969 28.8004 15.3001 28.3972 15.3001 27.9004V8.10039C15.3001 6.60909 16.5088 5.40039 18.0001 5.40039C19.4914 5.40039 20.7001 6.60909 20.7001 8.10039" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M5.54932 37.653C5.46022 37.0815 5.35582 36.6045 5.19922 36.123" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M11.6999 51.3005C11.6999 47.8175 7.48791 45.9347 5.94531 39.7607" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M36 13.8799L41.544 9.56798C42.0012 9.21248 42.5754 9.00098 43.2 9.00098C44.6913 9.00098 45.9 10.2097 45.9 11.701C45.9 12.5677 45.4914 13.3399 44.856 13.8331L36 20.7217" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M44.856 13.8333L46.9431 12.2682C47.2941 12.0063 47.9754 11.7012 48.6 11.7012C50.0913 11.7012 51.3 12.9099 51.3 14.4012C51.3 15.2679 50.8914 16.0401 50.256 16.5333L36 27.6222" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M46.6002 19.3765C46.9989 19.066 47.493 18.9004 48.0375 18.9004C49.3425 18.9004 50.4 19.9579 50.4 21.2629C50.4 22.0603 49.9833 22.7371 49.3992 23.1925L36 33.6442" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M45.0204 26.6082C45.4056 26.3076 45.8655 26.1006 46.392 26.1006C47.6115 26.1006 48.5997 27.0888 48.5997 28.3083C48.5997 29.0346 48.2316 29.6574 47.6997 30.0723L35.772 39.3765" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M11.6997 19.8006V8.10059" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M11.6997 6.30098V4.50098" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M44.1001 39.6006V43.2006" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M44.1001 46.8008V50.4008" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M49.4999 45.001H45.8999" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M42.2997 45.001H38.6997" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                            </svg>
                            <div className="text-teal-500 font-bold">Пожелаем центру процветания и побольше оздоровленных людей. </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bottom-banner" style={{ backgroundImage: `url(${servicesBannerBottom})` }}>
            <div className="container-outer">
                <div className="bottom-banner__outer">
                    <div className="bottom-banner__inner">
                        <div className="bottom-banner__title fw-700-36-50">{servicesBannerBottomTitle}</div>
                        <div className="bottom-banner__subtitle fw-700-26-35">{servicesBannerBottomText}</div>
                        <div className="my-6 text-center">
                            <Link href={route('shop')} className="main-page-link-btn -green">{servicesBannerBottomButtonText}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}