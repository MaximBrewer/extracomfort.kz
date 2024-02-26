
import ChevronDown from "@/../images/chevron-down.svg"
import ArrowTop from "@/../images/arrow-top.svg"
import LogoVertical from "@/../images/logo_vertical.svg"
import Email from "@/../images/email.svg"
import Phone from "@/../images/phone.svg"
import { Link } from "@inertiajs/react"
import CallBack from "@/Modals/CallBack"
import { useLayout } from "@/Contexts/LayoutContext"

export default () => {

    const { menus, footeremail, footerphone, copyright } = window.appdata

    const { setModal, goToTop } = useLayout()

    return <footer>
        <div className="container-outer h-full">
            <div className="footer__outer">
                <div className="flex flex-col xl:flex-row pb-12">
                    <div className="mb-10 lg:mr-20 shrink-0 hidden xl:block">
                        <Link href={route('home')}>
                            <img src={LogoVertical} alt="" />
                        </Link>
                    </div>
                    <ul className="flex flex-col lg:flex-row justify-between w-full">
                        <li className="mb-10 lg:mr-20">
                            <div className="footer-navbar-item__title fw-600-18-22">Услуги</div>
                            <ul className="footer-navbar-item__menu fw-400-18-22">
                                {menus.find(menu => menu.name === `services`).items.map((item, index) => <li key={index}>
                                    <Link href={item.link}>{item.title}</Link>
                                </li>)}
                            </ul>
                        </li>
                        <li className="mb-10 lg:mr-20">
                            <div className="footer-navbar-item__title fw-600-18-22">Товары</div>
                            <ul className="footer-navbar-item__menu fw-400-18-22">
                                {menus.find(menu => menu.name === `products`).items.map((item, index) => <li key={index}>
                                    <Link href={item.link}>{item.title}</Link>
                                </li>)}
                            </ul>
                        </li>
                        <li className="mb-10">
                            <div className="footer-navbar-item__title fw-600-18-22">Контакты</div>
                            <div className="footer-contacts-wrapper">
                                <div className="mb-5">
                                    <div className="font-semibold">Главный офис на Комиссарова 22:</div>
                                    <div className="lg:whitespace-nowrap">+7 (778) 276 23 43 (телефон и  <a href="https://wa.me/+77782762343" target="_blank" className="inline underline">WhatsApp</a>)</div>
                                </div>
                                <div className="mb-5">
                                    <div className="font-semibold">Филиал на Бухар Жырау 79:</div>
                                    <div className="lg:whitespace-nowrap">+7 (778) 276 23 44 (телефон и  <a href="https://wa.me/+77782762344" target="_blank" className="inline underline">WhatsApp</a>)</div>
                                </div>
                                <div className="mb-5 flex gap-2">
                                    <span className="font-semibold">E-mail:</span>
                                    <a href="mailto:extracomfort@mail.ru" target="_blank" className="inline underline">extracomfort@mail.ru</a>
                                </div>
                                <div className="mb-5 flex gap-2">
                                    <span className="font-semibold">Instagram:</span>
                                    <a href="https://instagram.com/extra_comfort" target="_blank" className="inline underline">@extra_comfort</a>
                                </div>
                                {/* <div className="footer-contacts-tel-wrapper">
                                    <a href={`tel:${footerphone}`} className="icon-wrapper center">
                                        <img src={Phone} alt="" />
                                    </a>
                                    <div className="footer-contacts-details-wrapper">
                                        <a href={`tel:${footerphone}`} className="footer-contacts-num-wrapper">
                                            <div className="footer-num-wrapper">
                                                {footerphone}
                                            </div>
                                            <div className="footer-num-chevron-wrapper center">
                                                <img src={ChevronDown} alt="" />
                                            </div>
                                        </a>
                                        <div className="order-callback purple">
                                            <a href="#" onClick={e => {
                                                e.preventDefault()
                                                setModal(<CallBack />)
                                            }}>Заказать обратный звонок</a>
                                        </div>
                                    </div>
                                </div>
                                <a href={`mailto:${footeremail}`} className="footer-contacts-email-wrapper">
                                    <div className="icon-wrapper center">
                                        <img src={Email} alt="" />
                                    </div>
                                    <div className="email-wrapper center fw-400-16-19">
                                        {footeremail}
                                    </div>
                                </a> */}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="footer-copy-wrapper center fw-400-14-17">{copyright}</div>
                <div className="go-top-wrapper js-back-to-top" onClick={e => goToTop(e)}>
                    <div className="go-top-arrow-wrapper">
                        <img src={ArrowTop} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
}