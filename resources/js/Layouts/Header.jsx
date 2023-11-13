
import Logo from "@/../images/logo.svg"
import { Link, useForm, usePage } from "@inertiajs/react"
import { useEffect, useRef, useState } from "react"
import Cart from "@/Icons/Cart"
import ChevronDown from "@/Icons/ChevronDown"
import LogIn from "@/Icons/LogIn"
import LogOut from "@/Icons/LogOut"
import ChevronDown2 from "@/Icons/ChevronDown2"
import Phone from "@/Icons/Phone"
import Lens from "@/Icons/Lens"
import XIcon from "@/Icons/XIcon"
import CatalogMenu from "./CatalogMenu"
import MenuItem from "./MenuItem"
import { useLayout } from "@/Contexts/LayoutContext"
import CallBack from "@/Modals/CallBack"
import FacilitiesMenu from "./FacilitiesMenu"
import Profile from "@/Icons/Profile"
import Heart from "@/Icons/Heart"
import DangerButton from "@/Components/DangerButton"


export default (props) => {

    const { cart, favorites, shoppage = false, servicepage = false, sitenote = `` } = usePage().props

    const { menus } = window.appdata

    const headerphone = !shoppage ? window.appdata.headerphone : window.appdata.shopphone;

    const { auth } = props

    const [mmenu, setMmenu] = useState(false)

    const [catalogMenu, setCatalogMenu] = useState(false)
    const [facilitiesMenu, setFacilitiesMenu] = useState(false)

    const { setModal } = useLayout()

    const catalogMenuRef = useRef(null)
    const catalogButtonRef = useRef(null)
    const facilitiesMenuRef = useRef(null)
    const facilitiesButtonRef = useRef(null)

    const { post } = useForm({});

    useEffect(() => {

    }, []);

    const checkClick = (e) => {
        (catalogMenuRef.current && catalogMenuRef.current.contains(e.target))
            || (catalogButtonRef.current && catalogButtonRef.current.contains(e.target))
            || setCatalogMenu(false);
        (facilitiesMenuRef.current && facilitiesMenuRef.current.contains(e.target))
            || (facilitiesButtonRef.current && facilitiesButtonRef.current.contains(e.target))
            || setFacilitiesMenu(false)
    }

    useEffect(() => {
        document.addEventListener('click', checkClick)
        return () => {
            document.removeEventListener('click', checkClick)
        }
    })

    return <header className="header z-50 relative">
        <div className="header__top fw-300-16-19 border-b border-white border-opacity-20">
            <div className="container-outer">

                <div className="flex items-center justify-between">

                    <a href={`#`} onClick={e => {
                        e.preventDefault();
                        setMmenu(true)
                    }} className="mobile-menu">
                        <span className="menu-line line-one"></span>
                        <span className="menu-line line-two"></span>
                        <span className="menu-line line-three"></span>
                    </a>
                    <nav className="header__navbar center py-3">
                        <ul className="navbar-list">
                            {menus.find(menu => menu.name === `common`).items.map((item, index) => <MenuItem key={index} item={item} />)}
                        </ul>
                    </nav>
                    <div className="flex items-center">
                        {shoppage ? <div className="header__navbar basket-navbar py-3">
                            <ul className="navbar-list">
                                <li className="navbar-list__item center" style={{ marginRight: `.75rem` }}>
                                    <Link href={route('cabinet.favorites.index')} className="inline-flex items-center">
                                        <Heart className="w-5 h-5 shrink-0 mr-2.5" />
                                    </Link>
                                    {favorites.length ? <div className="basket-count">{favorites.length}</div> : ``}
                                </li>
                                {cart ? <li className="navbar-list__item center">
                                    <Link href={route('cart.index')} className="inline-flex items-center">
                                        <Cart className="w-5 h-5 shrink-0 mr-2.5" />
                                        <span className="hidden md:block">Корзина</span>
                                    </Link>
                                    {cart.items.length ? <div className="basket-count">{cart.items.length}</div> : ``}
                                </li> : <></>}
                            </ul>
                        </div> : ``}
                        <div className="header__navbar auth-navbar py-3">
                            <div className="flex items-center gap-1">
                                {auth.user ? <>
                                    <ul className="auth-navbar-list">
                                        <li className="auth-navbar-list__item">
                                            <Link href={route('cabinet.index')} className={`auth-navbar-link flex items-center gap-2`}>
                                                <Profile className="w-5 h-5 shrink-0" />
                                                <div className="auth-navbar-list__logout-label center hidden sm:block">Личный кабинет</div>
                                            </Link>
                                        </li>
                                        <li className="auth-navbar-list__item">
                                            <a className={`auth-navbar-link flex items-center gap-2`} href="#" onClick={e => {
                                                e.preventDefault();
                                                post(route('logout'))
                                            }}>
                                                <LogOut className="w-5 h-5 shrink-0" />
                                                <div className="auth-navbar-list__logout-label center hidden sm:block">Выход</div>
                                            </a>
                                        </li>
                                    </ul>
                                </> : <>
                                    <ul className="auth-navbar-list">
                                        <li className="auth-navbar-list__item">
                                            <Link href={route('login')} className={`auth-navbar-link flex items-center gap-2`}>
                                                <LogIn className="w-5 h-5 shrink-0" />
                                                <div className="auth-navbar-list__login-label center">Вход</div>
                                            </Link>
                                        </li>
                                        <li className="auth-navbar-list__item center">
                                            <Link href={route('register')} className={`auth-navbar-link`}>Регистрация</Link>
                                        </li>
                                    </ul>
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {shoppage || servicepage ? <div className="header__top fw-300-16-19">
            <div className="container-outer">
                <div className="flex items-center justify-between">
                    <nav className="header__navbar center py-3">
                        <ul className="navbar-list">
                            {menus.find(menu => menu.name === (shoppage ? `shop` : `service`)).items.map((item, index) => <MenuItem key={index} item={item} />)}
                        </ul>
                    </nav>
                    <div className="flex items-center">
                        <Link href={`gifts`} className="py-1.5 bg-amber-500 rounded-full px-6 text-stone-900 text-sm font-bold">Подарочные сертификаты</Link>
                    </div>
                </div>
            </div>
        </div> : <></>}
        <div className="header__bottom relative">
            <div className="container-outer relative">
                <div className="header-bottom-inner">
                    <div className="header-bottom-left">
                        <div className="logo">
                            <Link href={route('home')}><img className="logo" src={Logo} alt="Логотип" /></Link>
                        </div>
                    </div>
                    <div className="flex gap-6 items-center justify-end lg:justify-between grow">
                        {shoppage ? <>
                            <button className="catalogue-btn" type="button" ref={catalogButtonRef} onClick={e => setCatalogMenu(prev => !prev)}>
                                <i className="ic-catalogue-btn"></i>
                                <span>Каталог</span>
                            </button>
                            <div className="search-wrapper header-bottom__search-wrapper fw-400-16-19">
                                <input className="search-input" type="text" name="search" placeholder="Поиск" />
                                <div className="search-icon-wrapper center">
                                    <Lens className="w-3.5 h-3.5 shrink-0" />
                                </div>
                            </div>
                        </> : servicepage ? <>
                            <button className="catalogue-btn" type="button" ref={facilitiesButtonRef} onClick={e => setFacilitiesMenu(prev => !prev)}>
                                <i className="ic-catalogue-btn"></i>
                                <span>Услуги</span>
                            </button>
                            <div></div>
                        </> : <div></div>}
                        <div className="contact-info-wrapper header-bottom__contact-info-wrapper">
                            <a href={`tel:${headerphone}`} className="contact-info__left">
                                <div className="header-phone-icon-wrapper center">
                                    <Phone className="w-3 h-4 shrink-0" />
                                </div>
                            </a>
                            <div className="contact-info__right">
                                <a href={`tel:${headerphone}`} className="header-tel-wrapper">
                                    <div className="header-tel black fw-400-16-19">{headerphone}</div>
                                    {/* <div className="header-tel-chevron-icon center">
                                        <ChevronDown2 className="w-2.5 h-2.5 shrink-0" />
                                    </div> */}
                                </a>
                                <div className="order-callback purple fw-700-14-17">
                                    <a href="#" onClick={e => {
                                        e.preventDefault()
                                        setModal(<CallBack />)
                                    }}>Заказать обратный звонок</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {sitenote ? <div className="absolute justify-center flex w-full pointer-events-none top-full pb-1">
                <div className="min-w-[251px] px-10 py-1.5 bg-amber-500 rounded-b-[20px] text-stone-900 text-sm font-bold">{sitenote}</div>
            </div> : ``}
        </div>
        {catalogMenu ? <CatalogMenu catalogMenuRef={catalogMenuRef} /> : ``}
        {facilitiesMenu ? <FacilitiesMenu facilitiesMenuRef={facilitiesMenuRef} /> : ``}
        <div className={`header__mobile ${mmenu ? `is-active` : ``}`}>
            <div className="container-outer">
                <div className="menu-close" onClick={e => setMmenu(false)}>
                    <XIcon className="w-6 h-6 shrink-0" />
                </div>
                <ul className="navbar-list">
                    {menus.find(menu => menu.name === (shoppage ? `shop` : `service`)).items.map((item, index) => <MenuItem key={index} item={item} mobile={true} />)}
                </ul>
                <div className="search-wrapper header-bottom__search-wrapper fw-400-16-19">
                    <input className="search-input" type="text" name="search" placeholder="Поиск" />
                    <div className="search-icon-wrapper center">
                        <Lens className="w-3.5 h-3.5 shrink-0" />
                    </div>
                </div>
                <div className="contact-info-wrapper header-bottom__contact-info-wrapper">
                    <div className="contact-info__left">
                        <div className="header-phone-icon-wrapper center">
                            <Phone className="w-3 h-4 shrink-0" />
                        </div>
                    </div>
                    <div className="contact-info__right">
                        <div className="header-tel-wrapper">
                            <div className="header-tel black fw-400-16-19">
                                <p>{headerphone}</p>
                            </div>
                            {/* <div className="header-tel-chevron-icon center">
                                <ChevronDown2 className="w-2.5 h-2.5 shrink-0" />
                            </div> */}
                        </div>
                        <div className="order-callback purple fw-700-14-17">
                            <a href="#" onClick={e => {
                                e.preventDefault()
                                setModal(<CallBack />)
                            }}>Заказать обратный звонок</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>
}