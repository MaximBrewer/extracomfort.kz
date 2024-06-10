import Breadcrumbs from "@/Components/Breadcrumbs";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import ClockSvg from "../../images/clock.svg"
import PinSvg from "../../images/pin.svg"
import Cdek from "../../images/cdek.svg"
import Post from "../../images/kaz-post.svg"
import parse from "html-react-parser"

export default (props) => {

    const { pagetitle, table } = props;

    return <Layout
        {...props}
    >
        <Head title={pagetitle} />
        <div className="catalogue-categories">
            <div className="container-outer">
                <div className="catalogue-categories__outer">
                    <div className="catalogue-categories__inner">
                        {/* <TopCategories /> */}
                        <Breadcrumbs {...props} />
                    </div>
                </div>
            </div>
        </div>
        <div className="info">
            <div className="container-outer">
                <div className="info__outer">
                    <div className="info__inner">
                        <div className="catalogue-section__title info__title center fw-700-45-55">
                            <p>Оплата и доставка</p>
                        </div>
                        <div className="payment-info">
                            <div className="info__title center payment-info__title fw-600-30-37">
                                <p>Прайс на почтовые услуги EMS АО «KAZPOST»</p>
                            </div>
                            <div className="info__subtitle center fw-700-18-22">
                                <p>Курьером до двери, либо в почтовом отделении</p>
                            </div>
                        </div>
                        <div className="white-block -green">
                            <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center mb-3">
                                <p className="payment__city-name">Караганда*</p>
                                <span className="payment__city-type">По ценам яндекс доставки, либо самовывоз</span>
                            </div>
                            <p className="text-white max-w-xl text-sm">* В другие города возможна отправка с индрайвером (поиск и взаимодействием с индрайвером клиент осуществляет самостоятельно)</p>
                        </div>
                        <div className="white-block flex justify-start gap-3">
                            <svg className="basis-auto flex-shrink-0 flex-grow-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V11C11.25 10.5858 11.5858 10.25 12 10.25ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" fill="#22282F"></path>
                            </svg>
                            Сроки доставки указаны без учета дня приема и без учета выходных дней
                        </div>
                        <div className="payment__table-block">
                            <div className="payment__table">
                                {parse(table ?? ``)}
                            </div>
                        </div>

                        <div className="white-block flex justify-start gap-3 mb-6">
                            <svg className="basis-auto flex-shrink-0 flex-grow-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V11C11.25 10.5858 11.5858 10.25 12 10.25ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" fill="#22282F"></path>
                            </svg>
                            При желании, можно с объявленной ценностью +1 % от стоимости товара
                        </div>

                        <div className="white-block flex justify-start gap-3 mb-6">
                            <svg className="basis-auto flex-shrink-0 flex-grow-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V11C11.25 10.5858 11.5858 10.25 12 10.25ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" fill="#22282F"></path>
                            </svg>
                            Плата за возврат, осуществляется согласно установленного тарифа за пересылку посылок почтовой связи
                        </div>

                        <div className="samovyvoz white-block mb-6">
                            <div className="info__title payment-info__title fw-600-30-37">
                                <p>Самовывоз</p>
                            </div>
                            <div className="info__subtitle fw-700-18-22 max-w-4xl">
                                <p>Клиент может забрать заказ по следующему адресу</p>
                            </div>
                            <div className="samovyvoz fw-400-16-19 mb-6 max-w-4xl">
                                <div className="samovyvoz__address">
                                    <div className="pin samovyvoz__pin shrink-0">
                                        <img src={PinSvg} alt="" />
                                    </div>
                                    <div className="samovyvoz__label">
                                        <p>г. Караганда, ул. Комиссарова,&nbsp;22.</p>
                                    </div>
                                </div>
                                <div className="samovyvoz__working-hours">
                                    <div className="clock-icon samovyvoz__clock-icon shrink-0">
                                        <img src={ClockSvg} alt="" />
                                    </div>
                                    <div className="samovyvoz__label">
                                        <p>График выдачи товара: понедельник - пятница с 9.00 до 19.00, суббота с 11.00 до 15.00, без перерыва.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="samovyvoz fw-400-16-19 mb-6 max-w-4xl">
                                <div className="samovyvoz__address">
                                    <div className="pin samovyvoz__pin shrink-0">
                                        <img src={PinSvg} alt="" />
                                    </div>
                                    <div className="samovyvoz__label">
                                        <p className="mb-3">г. Караганда, ул. Бухар Жырау, 79</p>
                                        <p>По данному адресу самовывоз следующих товаров: изделия после мастэктомии, средства для людей с ограниченными возможностями, средства для лечения язв и пролежней, все для стомы</p>
                                    </div>
                                </div>
                                <div className="samovyvoz__working-hours">
                                    <div className="clock-icon samovyvoz__clock-icon shrink-0">
                                        <img src={ClockSvg} alt="" />
                                    </div>
                                    <div className="samovyvoz__label">
                                        <p>График выдачи товара: понедельник - пятница с 10.00 до 18.00, без перерыва.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 py-8 bg-white rounded-[20px] mb-6">
                            <div className="text-black text-3xl font-semibold mb-4">Способы оплаты</div>
                            <div className="space-y-2.5">
                                <div className="">Платежные карты</div>
                                <div className="">Наличными при самовывозе</div>
                                <div className="">Онлайн оплата</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </Layout >
}