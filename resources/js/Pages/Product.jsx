import Breadcrumbs from '@/Components/Breadcrumbs';
import ProductSlider from '@/Components/ProductSlider';
import Layout from '@/Layouts/Layout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import Slider from 'react-slick';
import InStock from "../../images/in-stock-tick.svg"
import Phone from "../../images/phone.svg"
import Cart from '@/Icons/Cart';
import Heart from '@/Icons/Heart';
import { useEffect, useRef, useState } from 'react';
import { useLayout } from '@/Contexts/LayoutContext';
import parse from "html-react-parser"
import ProductTizer from '@/Components/ProductTizer';
import InputError from '@/Components/InputError';
import Star from '@/Icons/Star';
import Sizes from '@/Modals/Sizes';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';


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
    autoplay: false,
    autoplaySpeed: 1200,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dots: false,
    responsive: [{
        breakpoint: 1620,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1
        }
    }, {
        breakpoint: 460,
        settings: {
            slidesToShow: 1
        }
    }]
};

export default (props) => {

    const { pagetitle, product, auth, cart, favorites } = props

    const { priceFormat, moment, setModal } = useLayout()

    const [price, setPrice] = useState(null)
    const [offer, setOffer] = useState(null)
    const [tab, setTab] = useState(product.data.body ? 0 : 1)

    const [specifications, setSpecifications] = useState([])
    const [spFilter, setSpFilter] = useState({})

    const add = (offer) => {
        if (!offer) return;
        router.post(route(`cart.add`), {
            item: offer.id
        }, {
            preserveScroll: true
        })
    }

    const deleteItem = (offer) => {
        if (!offer) return;
        router.post(route(`cart.delete`), {
            item: offer.id
        }, {
            preserveScroll: true
        })
    }

    const subtract = (offer) => {
        if (!offer) return;
        router.post(route(`cart.subtract`), {
            item: offer.id
        }, {
            preserveScroll: true
        })
    }

    const favorite = () => {
        if (auth.user)
            router.patch(route(`cabinet.favorite.toggle`), {
                item: product.data.id
            }, {
                preserveScroll: true
            })
        else
            router.visit(route(`login`))
    }


    const { data, setData, post, processing, errors, reset } = useForm({
        product_id: product.data.id,
        name: '',
        email: '',
        rate: 5,
        text: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('reviews.store'), {
            preserveScroll: true
        });
    };


    useEffect(() => {
        if (product.data.offers.length) {
            setOffer(product.data.offers[0])
            let specifications = []
            for (let offer of product.data.offers) {
                for (let specification of offer.specifications) {
                    let specificationIndex = specifications.findIndex(el => el.id == specification.id)
                    if (specificationIndex < 0) {
                        specificationIndex = specifications.length
                        specifications.push({
                            id: specification.id,
                            title: specification.title,
                            values: []
                        })
                    }
                    let valueIndex = specifications[specificationIndex].values.findIndex(el => el.value == specification.pivot.value)
                    if (valueIndex < 0) {
                        valueIndex = specifications[specificationIndex].values.length
                        specifications[specificationIndex].values.push({
                            value: specification.pivot.value,
                            offers: []
                        })
                    }
                    specifications[specificationIndex].values[valueIndex].offers.push(specification.pivot.offer_id)
                }
            }
            setSpecifications(specifications)
        }
    }, [product])

    useEffect(() => {
        let price = null;
        if (offer) {
            // const f = {};
            // for (let s of specifications) {
            //     for (let vIndex in s.values) {
            //         let v = s.values[vIndex]
            //         if (v.offers.indexOf(offer.id) > -1) {
            //             f[s.id] = vIndex
            //         }
            //     }
            // }
            // setSpFilter(f)
            if (offer.prices.length) {
                var priceIndex = offer.prices.findIndex(el => el.currency == 'тен' || el.currency == 'KZT');
                if (priceIndex > -1) price = offer.prices[priceIndex].value
            }
        }
        setPrice(price)
    }, [offer, specifications])

    useEffect(() => {
        let offers = [...product.data.offers];
        for (let s of specifications) {
            let offersArray = s.values[spFilter[s.id]] ? s.values[spFilter[s.id]].offers.map(el => 1 * el) : []
            offers = offers.filter(el => offersArray.indexOf(1 * el.id) > -1)
        }
        setOffer(offers[0] ?? null)
    }, [spFilter])

    return (
        <Layout {...props} >
            <Head title={pagetitle} />
            <div className="catalogue-categories">
                <div className="container-outer">
                    <div className="catalogue-categories__outer">
                        <div className="catalogue-categories__inner">
                            {/* <TopCategories /> */}
                            <Breadcrumbs {...props} lastActive={true} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-description">
                <div className="container-outer">
                    <div className="product-description__outer">
                        <div className="product-description__inner">
                            {product.data.images.length ? <ProductSlider {...props} /> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-auto text-gray-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>}
                            <div className="product-description__purchase-details">
                                <div className="product-title fw-700-35-42">
                                    <p>{pagetitle}</p>
                                </div>
                                <div className="product-description__row-one">
                                    {offer ? <div className="in-stock-label">
                                        <div className="in-stock-label__tick center">
                                            <img src={InStock} alt="" />
                                        </div>
                                        {offer.quantity ? <div className="in-stock-label__txt fw-400-14-17">В наличии</div> : <div className="in-stock-label__txt fw-400-14-17">Под заказ</div>}
                                    </div> : ``}
                                    <div className="articul fw-400-14-17">
                                        <p>Артикул:&nbsp;</p><span className="articul__code">{product.data.article}</span>
                                    </div>
                                </div>
                                <div className="product-description__card">
                                    <div className="product-description__card-inner">
                                        <div className="product-description__card-left">
                                            {/* <div className="product-description__card-brand-wrapper">
                                                <div className="product-description__card-brand-label fw-700-14-17">
                                                    <p>Бренд</p>
                                                </div>
                                                <div className="product-description__card-brand-title fw-400-14-17">
                                                    <p>Название</p>
                                                </div>
                                            </div> */}
                                            {specifications.map((sp, sdx) => <div key={sp.id}>
                                                <div className="product-description__card-size-wrapper">
                                                    <div className="product-description__card-size-label fw-700-14-17 flex gap-2">
                                                        <span>{sp.title}</span>
                                                        {sp.id === 1 && product.data.sizes && (product.data.sizes.image || product.data.sizes.html) ? <a href="#" onClick={e => {
                                                            e.preventDefault()
                                                            setModal(<Sizes sizes={product.data.sizes} />)
                                                        }} className="product-description__card-size-link fw-400-14-17">Подобрать размер</a> : ``}
                                                    </div>
                                                </div>
                                                <div className="product-description__card-size-flexbox">
                                                    {sp.values.map((v, vdx) => <div key={vdx} onClick={e => setSpFilter(prev => {
                                                        const spFilter = { ...prev }
                                                        spFilter[sp.id] = vdx
                                                        return spFilter
                                                    })} className={`product-description__product-size-item fw-400-12-14 ${spFilter[sp.id] == vdx ? `bg-primary-500 text-white` : ``}`}>
                                                        <p>{v.value}</p>
                                                    </div>)}
                                                </div>
                                            </div>)}
                                            {/* <div className="product-description__card-purchase-label fw-700-14-17">
                                                <p>Оплата</p>
                                            </div>
                                            <div className="product-description__card-purchase-flexbox">
                                                <div className="product-description__card-purchase-item center">
                                                    <img src={VisaLogo} alt="" />
                                                </div>
                                                <div className="product-description__card-purchase-item center">
                                                    <img src={MastercardLogo} alt="" />
                                                </div>
                                                <div className="product-description__card-purchase-item center">
                                                    <img src={Money} alt="" />
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="product-description__card-right">
                                            {/* <div className="product-description__card-delivery-wrapper">
                                                <div className="product-description__card-delivery-label fw-700-14-17">
                                                    <p>Доставка</p>
                                                </div>
                                                <div className="product-description__card-delivery-desc fw-400-14-17">
                                                    <p>Описание и условие доставки</p>
                                                </div>
                                            </div> */}
                                            <div className="btn-secondary product-description__btn-secondary">
                                                <div className="product-description__btn-secondary-phone-icon-wrapper">
                                                    <img src={Phone} alt="" />
                                                </div>
                                                <div className="product-description__btn-secondary-txt-wrapper fw-700-16-20">
                                                    <p>Заказать звонок</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-description__line"></div>
                                <div className="product-description__row-two">
                                    <div className="catalogue__item-price fw-700-18-22 center mr-4">{price && offer && offer.quantity ? priceFormat(price) : `Нет предложения`}</div>
                                    <div className="purchase-btn-group product-description__purchase-btn-group center">
                                        {offer && offer.quantity ? <>
                                            {cart.items.findIndex(el => el.offer.id == offer.id) < 0 ? <>
                                                <div className="btn-purchase product-description__btn-purchase" onClick={() => add(offer)}>
                                                    <Cart className={`w-5 h-5 mr-2`} />
                                                    <div className="btn-purchase__txt fw-700-16-20">Купить</div>
                                                </div>
                                            </> : <Link href={route('cart.index')}>
                                                <div className="btn-purchase product-description__btn-purchase">
                                                    <Cart className={`w-5 h-5 mr-2`} />
                                                    <div className="btn-purchase__txt fw-700-16-20">Перейти в корзину</div>
                                                </div>
                                            </Link>}
                                        </> : ``}
                                        <div className={`heart-icon-wrapper product-description__heart-icon-wrapper text-primary-500`} onClick={() => {
                                            favorite()
                                        }}>
                                            <Heart className={`w-4 h-4`} filled={favorites.indexOf(product.data.id) > -1} />
                                        </div>
                                        {/* <div className="product-description__scales-icon-wrapper scales-icon-wrapper">
                                            <img src={ScaleIcon} alt="" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-review-tab-wrapper pb-20">
                <div className="container-outer">
                    <div className="product-review-tab-wrapper__tab-line fw-700-20-24">
                        {product.data.body ? <button className={`tab-item ${tab === 0 ? `product-active` : ``}`} onClick={e => setTab(0)}>Описание</button> : ``}
                        <button className={`tab-item ${tab === 1 ? `product-active` : ``}`} onClick={e => setTab(1)}>Отзывы</button>
                    </div>
                    <div className="product-review-tab-wrapper__bottom-section">
                        <div className="product-review-tab-wrapper__bottom-section-inner">
                            <ul className="product-review-tab-wrapper__bottom-section-list">
                                <ul className="product-review-tab-wrapper__bottom-list-item" style={{ display: tab === 0 ? `` : `none` }}>
                                    <li className="product-review-tab-wrapper__bottom-section-item">
                                        <div className="product-review-tab-wrapper__bottom-section-title fw-600-20-24">
                                            <p>Основное</p>
                                        </div>
                                        <div className="product-review-tab-wrapper__bottom-section-desc fw-400-16-19">
                                            {parse(product.data.body ?? ``)}
                                        </div>
                                    </li>
                                    {/* <li className="product-review-tab-wrapper__bottom-section-item">
                                        <div className="product-review-tab-wrapper__bottom-section-title fw-600-20-24">
                                            <p>Характеристики</p>
                                        </div>
                                        <div className="product-review-tab-wrapper__bottom-section-desc fw-400-16-19">
                                            <p>Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий. Товарищи! консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий. С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке форм развития. Разнообразный и богатый опыт новая модель организационной деятельности в значительной степени обуславливает создание новых предложений.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="product-review-tab-wrapper__bottom-section-item">
                                        <div className="product-review-tab-wrapper__bottom-section-title fw-600-20-24">
                                            <p>Рекомендации</p>
                                        </div>
                                        <div className="product-review-tab-wrapper__bottom-section-desc fw-400-16-19">
                                            <p>Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий. Товарищи! консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий. С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке форм развития. Разнообразный и богатый опыт новая модель организационной деятельности в значительной степени обуславливает создание новых предложений.
                                            </p>
                                        </div>
                                    </li> */}
                                </ul>
                                <div className="product-review-tab-wrapper__bottom-list-item" style={{ display: tab === 1 ? `` : `none` }}>
                                    <ul className="comment-wrapper product-review-tab-wrapper__comment-wrapper">
                                        {product.data.reviews.map((review, rdx) => <li key={rdx} className="comment-wrapper__comment comment">
                                            <div className="comment__left">
                                                <div className="comment__photo">
                                                    <img src={review.avatar} alt="" />
                                                </div>
                                                <div className="comment__content ">
                                                    <div className="comment__fullname fw-500-16-22">{review.name}</div>
                                                    <div className="comment__txt fw-400-16-19">{review.text}</div>
                                                    <div className="comment__date fw-500-14-20">{moment(review.created_at).format('DD.MM.YYYY HH:mm')}</div>
                                                </div>
                                            </div>
                                            <div className="comment__right">
                                                <div className="catalogue__item-rating">
                                                    <div className="catalogue__stars">
                                                        {[null, null, null, null, null].map((st, stdx) => <div key={stdx} className="catalogue__star-wrapper center">
                                                            <Star className="w-4 h-4 shrink-0 text-yellow-400" />
                                                        </div>)}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>)}
                                    </ul>
                                    {/* <div className="product-feedback__btn-wrapper" onClick={e => addMoreReviews()}>
                                        <button className="btn-secondary">Показать еще</button>
                                    </div> */}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
            <form className="contact mb-20" onSubmit={submit}>
                <div className="container-outer">
                    <div className="contact__outer">
                        <div className="contact__inner">
                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name} className="contact__input input"
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder={`Имя`}
                                    />
                                    <InputError message={errors.name} />
                                </div>
                                <div>
                                    <input
                                        id="email"
                                        type="text"
                                        name="email"
                                        value={data.email} className="contact__input input"
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder={`E-mail`}
                                    />
                                    <InputError message={errors.email} />
                                </div>
                            </div>
                            <div className="contact__row fw-400-16-19">
                                <textarea
                                    id="text"
                                    name="text"
                                    value={data.text} className="feedback-textarea"
                                    onChange={(e) => setData('text', e.target.value)}
                                    placeholder="Отзыв" />
                                <InputError message={errors.text} />
                            </div>
                            <div className="contact__row fw-400-16-19">
                                <button className="btn-primary fw-700-16-20">Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {product.data.similars.length ? <div className="similar-products bg_aqua">
                <div className="container-outer">
                    <div className="similar-products__outer">
                        <div className="similar-products__inner">
                            <div className="similar-products-title-label similar-products__similar-products-title-label fw-700-45-55 color_white">
                                <p>Похожие товары</p>
                            </div>
                            <Slider {...settings} className="similar-products-slick">
                                {product.data.similars.map((item, index) => <div key={index} className="">
                                    <div className="catalogue-item">
                                        <ProductTizer item={item} />
                                    </div>
                                </div>)}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div> : ``}
            {product.data.relateds.length ? <div className="similar-products bg_aqua">
                <div className="container-outer">
                    <div className="similar-products__outer">
                        <div className="similar-products__inner">
                            <div className="similar-products-title-label similar-products__similar-products-title-label fw-700-45-55 color_white">
                                <p>С этим товаром покупают</p>
                            </div>

                            <Slider {...settings} className="similar-products-slick">
                                {product.data.relateds.map((item, index) => <div key={index} className="">
                                    <div className="catalogue-item">
                                        <ProductTizer item={item} />
                                    </div>
                                </div>)}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div> : ``}
        </Layout>
    );
}
