import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';
import SertProduct from "../../images/about/sert-product.png"
import SertService from "../../images/about/sert-service.png"
import { useState } from 'react';
import Breadcrumbs from '@/Components/Breadcrumbs';

export default (props) => {

    const { pagetitle } = props

    const [type, setType] = useState(1)

    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="catalogue-categories mt-0 pt-8">
                <div className="container-outer">
                    <div className="catalogue-categories__outer">
                        <div className="catalogue-categories__inner">
                            {/* <TopCategories /> */}
                            <Breadcrumbs {...props} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="promotion-wrapper">
                <div className="container-outer">
                    <div className="container-inner bg-gray-50 xl:rounded-[20px] pb-8 xl:px-12 -mx-5">
                        <div className="my-6 flex justify-center">
                            <Link href={route('shop')} className="main-page-link-btn -purple whitespace-nowrap w-auto min-w-[13rem]">Магазин</Link>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-8 xl:items-center px-2 py-12">
                            <div className="shrink-0 flex items-center justify-center relative h-[20rem] xl:h-[364px] xl:w-[470px]">
                                <div className={`w-[20rem] xl:w-[364px] h-[20rem] xl:h-[364px] absolute bg-sky-300 rounded-full`} />
                                <img className="absolute rounded-[10px] shadow w-full" src={SertProduct} />
                            </div>
                            <div className="grow px-3">
                                <div className="text-[26px] font-semibold mb-5">Подарочные сертификаты</div>
                                <div className="">
                                    <p className="mb-3">Вы можете порадовать Ваших близких и друзей, подарив им «Подарочный сертификат» на приобретение товаров, которые принесут пользу здоровью!</p>
                                    <p>Вы можете выбрать конкретный вид товара – и мы на него оформим «Подарочный сертификат», либо укажите сумму, на которую Вы хотите оформить «Подарочный сертификат».</p>
                                </div>
                            </div>
                        </div>
                        <div className="my-6 flex justify-center">
                            <Link href={route('services')} className="main-page-link-btn -purple whitespace-nowrap w-auto min-w-[13rem]">Ортопедический центр</Link>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-8 xl:items-center px-2 py-12">
                            <div className="shrink-0 flex items-center justify-center relative h-[20rem] xl:h-[364px] xl:w-[470px]">
                                <div className={`w-[20rem] xl:w-[364px] h-[20rem] xl:h-[364px] absolute bg-primary-200 rounded-full`} />
                                <img className="absolute rounded-[10px] shadow w-full" src={SertService} />
                            </div>
                            <div className="grow px-3">
                                <div className="text-[26px] font-semibold mb-5">Подарочные сертификаты</div>
                                <div className="">
                                    <p className="mb-3">Вы можете позаботиться о Ваших близких и друзьях, подарив им «Подарочный сертификат» на медицинские услуги нашего центра, которые принесут пользу здоровью!</p>
                                    <p>Вы можете выбрать конкретный вид услуги – и мы на него оформим «Подарочный сертификат», либо наш консультант предложит Вам варианты, максимально результативные в конкретной ситуации.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
