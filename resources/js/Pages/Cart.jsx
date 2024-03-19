import Layout from '@/Layouts/Layout';
import { useLayout } from '@/Contexts/LayoutContext';

import { Head, Link, router, useForm } from '@inertiajs/react';
import XIcon from '@/Icons/XIcon';
import Breadcrumbs from '@/Components/Breadcrumbs';
import InputError from '@/Components/InputError';
import NoPhoto from '@/Icons/NoPhoto';

export default (props) => {

    const { cart, pagetitle } = props
    const { priceFormat, numWord } = useLayout();

    const deleteItem = (offer) => {
        if (!offer) return;
        router.post(route(`cart.delete`), {
            item: offer.id
        }, {
            preserveScroll: true
        })
    }

    const add = (offer) => {
        if (!offer) return;
        router.post(route(`cart.add`), {
            item: offer.id,
            silent: true
        }, {
            preserveScroll: true
        })
    }

    const subtract = (offer) => {
        if (!offer) return;
        router.post(route(`cart.subtract`), {
            item: offer.id,
            silent: true
        }, {
            preserveScroll: true
        })
    }

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        comment: '',
        delivery_id: 1,
        region: '',
        city: '',
        street: '',
        house: '',
        appartement: '',
        payment_id: 1
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('cabinet.orders.store'), {
            preserveScroll: true
        });
    };

    return (
        <Layout {...props} >
            <Head title={pagetitle} />
            <div className="catalogue-categories">
                <div className="container-outer">
                    <div className="catalogue-categories__outer">
                        <div className="catalogue-categories__inner">
                            <Breadcrumbs {...props} />
                        </div>
                    </div>
                </div>
            </div>
            <form className="ordering" onSubmit={submit}>
                <div className="container-outer">
                    <div className="ordering__outer">
                        <div className="ordering__inner">
                            <div className="catalogue-section__title ordering__title center fw-700-45-55">
                                <p>Оформление заказа</p>
                            </div>
                            <div className="ordering__main">
                                <div className="ordering-details ordering__ordering-details">
                                    <div className="ordering-contacts ordering-details__ordering-contacts">
                                        <div className="ordering-contacts__title-label fw-600-20-24">
                                            <p>Ваши контакты</p>
                                        </div>
                                        <div className="ordering-contacts-form ordering-details__ordering-contacts-form fw-400-16-19">
                                            <div className="grid grid-cols-2 gap-8 pb-8">
                                                <div>
                                                    <input
                                                        id="name"
                                                        type="text"
                                                        name="name"
                                                        value={data.name} className="ordering__input"
                                                        onChange={(e) => setData('name', e.target.value)}
                                                        placeholder={`Имя`}
                                                    />
                                                    <InputError message={errors.name} />
                                                </div>
                                                <div>
                                                    <input
                                                        id="lastname"
                                                        type="text"
                                                        name="lastname"
                                                        value={data.lastname} className="ordering__input"
                                                        onChange={(e) => setData('lastname', e.target.value)}
                                                        placeholder={`Фамилия`}
                                                    />
                                                    <InputError message={errors.lastname} />
                                                </div>
                                                <div>
                                                    <input
                                                        id="phone"
                                                        type="text"
                                                        name="phone"
                                                        value={data.phone} className="ordering__input"
                                                        onChange={(e) => setData('phone', e.target.value)}
                                                        placeholder={`Телефон`}
                                                    />
                                                    <InputError message={errors.phone} />
                                                </div>
                                                <div>
                                                    <input
                                                        id="email"
                                                        type="text"
                                                        name="email"
                                                        value={data.email} className="ordering__input"
                                                        onChange={(e) => setData('email', e.target.value)}
                                                        placeholder={`E-mail`}
                                                    />
                                                    <InputError message={errors.email} />
                                                </div>
                                                <div className='col-span-2'>
                                                    <textarea
                                                        id="comment"
                                                        name="comment"
                                                        value={data.comment}
                                                        className="ordering-contacts-form__textarea fw-400-16-19"
                                                        onChange={(e) => setData('comment', e.target.value)}
                                                        placeholder="Комментарии"
                                                    />
                                                    <InputError message={errors.comment} />
                                                </div>
                                            </div>
                                            <div className="ordering-contacts-form__line"></div>
                                            <div>
                                                <div className="ordering-contacts-form__row">
                                                    <label className="checkbox-grid__item" htmlFor="delivery_id-1">
                                                        <div className="checkbox-wrapper center">
                                                            <input type="radio" defaultChecked={true} name="delivery_id" id="delivery_id-1" value="1" onChange={e => setData(prev => ({
                                                                ...prev,
                                                                delivery_id: e.target.checked ? 1 : prev.delivery_id
                                                            }))} />
                                                        </div>
                                                        <div className="checkbox-label-wrapper center">
                                                            <div className="checkbox-label">Доставка</div>
                                                        </div>
                                                    </label>
                                                    <label className="checkbox-grid__item" htmlFor="delivery_id-2">
                                                        <div className="checkbox-wrapper center">
                                                            <input type="radio" name="delivery_id" id="delivery_id-2" value="2" onChange={e => setData(prev => ({
                                                                ...prev,
                                                                delivery_id: e.target.checked ? 2 : prev.delivery_id
                                                            }))} />
                                                        </div>
                                                        <div className="checkbox-label-wrapper center">
                                                            <div className="checkbox-label">Самовывоз</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <InputError message={errors.delivery_id} />
                                            </div>
                                            <div className="ordering-contacts__title-label fw-600-20-24">
                                                <p>Доставка</p>
                                            </div>
                                            <div className="ordering-contacts-form ordering-details__ordering-contacts-form fw-400-16-19">
                                                <div className="ordering-contacts-form__row">
                                                    <div className="ordering-contacts-form__selectbox">
                                                        <input
                                                            id="region"
                                                            type="text"
                                                            name="region"
                                                            value={data.region} className="ordering__input"
                                                            onChange={(e) => setData('region', e.target.value)}
                                                            placeholder={`Область`}
                                                        />
                                                        <InputError message={errors.region} />
                                                    </div>
                                                    <div className="ordering-contacts-form__selectbox">
                                                        <input
                                                            id="city"
                                                            type="text"
                                                            name="city"
                                                            value={data.city} className="ordering__input"
                                                            onChange={(e) => setData('city', e.target.value)}
                                                            placeholder={`Город`}
                                                        />
                                                        <InputError message={errors.city} />
                                                    </div>
                                                </div>
                                                <div className="ordering-contacts-form__row">
                                                    <div className="ordering-contacts-form__selectbox w-full">
                                                        <input
                                                            id="street"
                                                            type="text"
                                                            name="street"
                                                            value={data.street} className="ordering__input w-full"
                                                            onChange={(e) => setData('street', e.target.value)}
                                                            placeholder={`Улица`}
                                                        />
                                                        <InputError message={errors.street} />
                                                    </div>
                                                </div>
                                                <div className="ordering-contacts-form__row">
                                                    <div className="ordering-contacts-form__row-inner">
                                                        <div className="ordering-contacts-form__selectbox">
                                                            <input
                                                                id="house"
                                                                type="text"
                                                                name="house"
                                                                value={data.house} className="ordering__input"
                                                                onChange={(e) => setData('house', e.target.value)}
                                                                placeholder={`№ Дома`}
                                                            />
                                                            <InputError message={errors.house} />
                                                        </div>
                                                        <div className="ordering-contacts-form__selectbox">
                                                            <input
                                                                id="appartement"
                                                                type="text"
                                                                name="appartement"
                                                                value={data.appartement} className="ordering__input"
                                                                onChange={(e) => setData('appartement', e.target.value)}
                                                                placeholder={`№ Квартиры`}
                                                            />
                                                            <InputError message={errors.appartement} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ordering-contacts-form__line"></div>
                                            </div>
                                            <div className="ordering-contacts__title-label fw-600-20-24">
                                                <p>Оплата</p>
                                            </div>
                                            <div action="" className="ordering-contacts-form ordering-details__ordering-contacts-form fw-400-16-19">
                                                <label className="checkbox-grid__item" htmlFor="payment_id-1">
                                                    <div className="checkbox-wrapper center">
                                                        <input type="radio" defaultChecked={true} name="payment_id" id="payment_id-1" value="1" onChange={e => setData(prev => ({
                                                            ...prev,
                                                            delivery_id: e.target.checked ? 1 : prev.delivery_id
                                                        }))} />
                                                    </div>
                                                    <div className="checkbox-label-wrapper center">
                                                        <div className="radio-label">Наличными</div>
                                                    </div>
                                                </label>
                                                <label className="checkbox-grid__item" htmlFor="payment_id-2">
                                                    <div className="checkbox-wrapper center">
                                                        <input type="radio" name="payment_id" id="payment_id-2" value="2" onChange={e => setData(prev => ({
                                                            ...prev,
                                                            delivery_id: e.target.checked ? 2 : prev.delivery_id
                                                        }))} />
                                                    </div>
                                                    <div className="checkbox-label-wrapper center">
                                                        <div className="radio-label">Оплата картой</div>
                                                    </div>
                                                </label>
                                                <label className="checkbox-grid__item" htmlFor="payment_id-3">
                                                    <div className="checkbox-wrapper center">
                                                        <input type="radio" name="payment_id" id="payment_id-3" value="3" onChange={e => setData(prev => ({
                                                            ...prev,
                                                            delivery_id: e.target.checked ? 3 : prev.delivery_id
                                                        }))} />
                                                    </div>
                                                    <div className="checkbox-label-wrapper center">
                                                        <div className="radio-label">Оплата картой онлайн</div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ordering-cart ordering-details__ordering-cart">
                                        <div className="ordering-cart__inner">
                                            <div className="ordering-cart__title-label fw-600-20-24">
                                                <p>Товары в корзине</p>
                                            </div>
                                            <div className="ordering-cart__wrapper">
                                                {cart.items.map((item, idx) => <div key={idx} className="ordering-cart__product-item">
                                                    <div className="ordering-product-desc ordering-cart__ordering-product-desc">
                                                        <div className="ordering-product-photo ordering-product-desc__ordering-product-photo center" style={{ flex: 0 }}>
                                                            <div className="w-20">
                                                                {item.offer.product.images.length ? <div className='pt-[100%] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url('${item.offer.product.images[0].url}')` }} /> : <div className="pt-[100%] relative">
                                                                    <NoPhoto className="absolute w-full h-auto text-gray-300 top-1/2 -translate-y-1/2" />
                                                                </div>}
                                                            </div>
                                                        </div>
                                                        <div className="ordering-product-details xl:max-w-[60%]">
                                                            <div
                                                                className="catalogue__item-title ordering-product-details__catalogue-item-title fw-600-16-19 "
                                                            >{item.offer.product.title}</div>
                                                            <div className="ordering-product-details__row">
                                                                <div className="mb-4">

                                                                    {item.offer.specifications.map((s, sdx) => <div key={sdx} className="mb-2"><b>{s.title}: </b>{s.pivot.value}</div>)}
                                                                </div>
                                                            </div>
                                                            <div className="ordering-product-details__row">

                                                                <div className="catalogue__item-price ordering-product-details__item-price fw-700-18-22">
                                                                    <p>{priceFormat(item.price)}</p>
                                                                </div>
                                                                <div className="ordering-product-details__total-quantity fw-400-16-19 center">
                                                                    <div className="relative flex items-center max-w-[6rem]">
                                                                        <button onClick={e => subtract(item.offer)} type="button" className="bg-gray-100 hover:bg-gray-200 border border-solid border-gray-300 rounded-s-lg p-2 h-9 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                                                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                                            </svg>
                                                                        </button>
                                                                        <input readOnly={true} type="text" value={item.quantity} className="bg-gray-50 border-solid border-x-0 border-gray-300 h-9 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-1" />
                                                                        <button onClick={e => add(item.offer)} type="button" className="bg-gray-100 hover:bg-gray-200 border border-solid border-gray-300 rounded-e-lg p-2 h-9 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                                                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                                            </svg>
                                                                        </button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ordering-cart__close-outline center cursor-pointer" onClick={e => deleteItem(item.offer)}>
                                                        <XIcon className="w-4 h-4 shrink-0 opacity-50 text-black" />
                                                    </div>
                                                </div>)}
                                            </div>
                                            <div className="ordering-total ordering-details__ordering-total">
                                                <div className="ordering-total-items ordering-total__ordering-total">
                                                    <p>Итого:</p><span className="fw-600-16-19">&nbsp;{cart.quantity} {numWord(cart.quantity, ['товар', 'товара', 'товаров'])}</span>
                                                </div>
                                                <div className="ordering-total-sum ordering-total__ordering-total-sum">
                                                    <p>На сумму:</p><span className="fw-600-16-19">&nbsp;{priceFormat(cart.sum)}</span>
                                                </div>
                                            </div>
                                            <div className="ordering-btn-wrapper ordering-details__ordering-btn-wrapper fw-700-16-20">
                                                <button className="btn-primary">Подтвердить заказ</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Layout >
    )
}