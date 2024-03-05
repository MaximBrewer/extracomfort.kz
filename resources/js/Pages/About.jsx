import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';

import Slider from 'react-slick';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import FormAppDoctor from '@/Components/FormAppDoctor';
import CallBack from '@/Modals/CallBack';
import { useLayout } from '@/Contexts/LayoutContext';
import parse from "html-react-parser"
import AboutTextBlock from '@/Components/AboutTextBlock';


function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} -right-8 lg:-right-20 top-1/2 -translate-y-[8.5rem] orthopedic-slider-slick__arrow-left center bg-purple-900 rounded-full w-10 lg:w-[62px] h-10 lg:h-[62px] flex  items-center justify-center text-[#C7C7C7]`}
            onClick={onClick}
        >
            <ChevronUpIcon className="w-5 lg:w-8 h-5 lg:h-8 shrink-0 relative -top-px" />
        </div>
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} -right-8 lg:-right-20 bottom-1/2 translate-y-[8.5rem] orthopedic-slider-slick__arrow-right center bg-purple-900 rounded-full w-10 lg:w-[62px] h-10 lg:h-[62px] flex  items-center justify-center text-[#C7C7C7]`}
            onClick={onClick}
        >
            <ChevronDownIcon className="w-5 lg:w-8 h-5 lg:h-8 shrink-0 relative top-px" />
        </div>
    );
}

var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1200,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dots: true,
    vertical: true,
    centerMode: true,
    infinite: true,
    centerPadding: `0px`
};


export default (props) => {

    const {
        pagetitle,
        youtube,
        rewards,
        aboutImages
    } = props


    const {
        aboutBannerTop,
        aboutBannerTopText,
        aboutBannerTopButtonText
    } = window.appdata;

    const { setModal } = useLayout()

    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="main-block">
                <div className="main-bg" style={{ backgroundImage: `url(${aboutBannerTop})` }} />
                <div className="container-outer">
                    <div className="main-content flex flex-col justify-center text-center">
                        <div className="main-subtitle">{parse(aboutBannerTopText ?? ``)}</div>
                        <a href="#" className="btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto" onClick={e => {
                            e.preventDefault()
                            setModal(<CallBack />)
                        }}>{aboutBannerTopButtonText}</a>
                    </div>
                </div>
            </div>
            <div className="about-info bg-white py-20">
                <div className="container-outer">
                    <h4 className="fw-700-32-40 mb-6 center">Наша деятельность развивается в двух направлениях:</h4>
                    <div className="flex flex-col md:flex-row items-stretch gap-5 mb-5">
                        <div className="white-block -gray md:w-1/2">
                            <h4 className="fw-700-20-24 mb-6 center">Диагностика и лечение опорно-двигательной системы</h4>
                            <ul className="about-content-list">
                                <li>Мы занимаемся патологией стоп и опорно-двигательной системы более 17 лет!</li>
                                <li>Уникальный опыт 17-летней практики ортореабилитологии, учитывающий взаимосвязи между верхним и нижним отделами опорно-двигательной системы</li>
                                <li>Уникальная подометрическая система PadPro Professional - для диагностики плоскостопия и нагрузки опорно-двигательного аппарата</li>
                                <li>Единственный в городе Оптический топограф – система безлучевой 3D диагностики сколиоза и других деформаций позвоночника</li>
                                <li>У нас создана мультидисциплинарная команда по реабилитации опорно-двигательной системы</li>
                                <li>Высокий профессиональный уровень специалистов -
                                    в постоянном процессе его повышения - проходят регулярные обучения, участвуют в международных конференциях, семинарах, тренингах</li>
                                <li>35500 пациентам сделали индивидуальные и индивидуализированные стельки</li>
                                <li>Уникальный опыт создания разгрузочных систем при язвенных поражениях стоп, после частичных ампутаций стоп</li>
                            </ul>
                        </div>
                        <div className="white-block -aqua md:w-1/2 flex flex-col justify-between">
                            <div className="block">
                                <h4 className="fw-700-20-24 mb-6 center">Консультация и подбор при реализации товаров медицинского назначения</h4>
                                <ul className="about-content-list">
                                    <li>
                                        <p><strong>Высокое качество ортопедической продукции</strong></p>
                                        <p>У нас представлена продукция лидеров рынка в ортопедии, проверенная через собственное использование и выбор лучшего по качеству и соответствующей цене. Более 1500 наименований изученных и тщательно отобранных медицинских изделий (из них ортопедических стелек - более 150 видов!)</p>
                                    </li>
                                    <li>
                                        <p><strong>Сотрудничество с лучшими производителями</strong></p>
                                        <p>Мы регулярно посещаем выставки медицинских изделий в Казахстане и зарубежом. Отслеживаем появление нового ассортимента ортопедической продукции у производителей и вводим в линейку товаров инновационные изделия</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="white-block relative mt-16 mb-0">
                                <p className="fw-600-24-34">
                                    Достижение максимально возможного результата в лечении пациента и усовершенствовании качества жизни людей
                                </p>
                                <svg className="absolute right-0 -top-16" width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="91.667" height="91.667" rx="45.8335" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.958 45.8336C13.958 28.2295 28.229 13.9585 45.8331 13.9585C63.4373 13.9585 77.7083 28.2295 77.7083 45.8336C77.7083 63.4378 63.4373 77.7087 45.8331 77.7087H16.1293L18.9583 73.4653L19.0122 73.3845C19.4947 72.6609 19.9479 71.9812 20.2739 71.3764C20.6301 70.7158 20.9564 69.9325 21.0029 68.9954C21.0508 68.0309 20.7758 67.1858 20.4777 66.4842C20.1962 65.8213 19.7868 65.0519 19.3388 64.2098L19.2935 64.1247C17.0807 59.9645 13.958 52.8074 13.958 45.8336ZM45.8331 8.9585C25.4676 8.9585 8.95801 25.4681 8.95801 45.8336C8.95801 54.07 12.5655 62.123 14.8792 66.4727C15.3873 67.4281 15.6901 68.0022 15.8757 68.4391C15.9415 68.594 15.976 68.6953 15.9937 68.7547C15.9734 68.8044 15.9368 68.8849 15.8729 69.0036C15.6718 69.3765 15.3534 69.8588 14.798 70.6918L9.37789 78.822C8.86646 79.5891 8.81878 80.5755 9.25383 81.3884C9.68887 82.2013 10.536 82.7087 11.458 82.7087H45.8331C66.1987 82.7087 82.7083 66.1992 82.7083 45.8336C82.7083 25.4681 66.1987 8.9585 45.8331 8.9585ZM16.0156 68.6945C16.0166 68.6911 16.0169 68.6895 16.0169 68.6895C16.0168 68.6896 16.0166 68.6902 16.0163 68.6914C16.0161 68.6922 16.0159 68.6932 16.0156 68.6945ZM60.969 38.0527C61.9453 37.0764 61.9453 35.4935 60.969 34.5172C59.9927 33.5409 58.4098 33.5409 57.4335 34.5172L42.0137 49.937L36.1425 44.0659C35.1662 43.0895 33.5833 43.0895 32.607 44.0659C31.6307 45.0422 31.6307 46.6251 32.607 47.6014L40.2459 55.2403C41.2222 56.2166 42.8051 56.2166 43.7814 55.2403L60.969 38.0527Z" fill="#65BC54" />
                                </svg>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="orthopedic-block bg-white pb-20">
                <div className="container-outer">
                    <AboutTextBlock />
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="block md:w-1/2">
                            <h4 className="fw-600-24-34 uppercase mb-5">ОРТОПЕДИЧЕСКИЙ ЦЕНТР</h4>
                            <div className="orthopedic-block-text">
                                <p>Ортопедический центр Extra Comfort (лицензия № 000168DM) - лечебное учреждение, оказывающее консультативно-реабилитационные услуги амбулаторного уровня пациентам всех возрастных групп преимущественно с заболеваниями опорно-двигательного аппарата и нервной системы</p>
                                <p>Консультативные услуги предусматривают осмотр специалистов с использованием компьютерной диагностики позвоночника и стоп на аппаратах: электронный и барометрический оптический подометр и оптический топограф.</p>
                                <p>Реабилитационные услуги включает назначение и проведение физиопроцедур, массажа, мануальной терапии, кинезотерапии с использованием эффективных методик (Войта терапии, Бобат терапии, Шрот терапии, SEAS, методик по Кальтенборну-Эвенту, PNF), кинезиотейпирования, ортопедической коррекции.
                                    Ортопедический центр Extra Comfort является клинической базой Медицинского Университета г. Караганды</p>
                            </div>
                        </div>
                        <div className="block md:w-1/2">
                            <div className="w-[240px] lg:w-[409px]">
                                <Slider {...settings} className="orthopedic-slider">
                                    {aboutImages.data.map((item, index) => <div key={index} className="orthopedic-slide-item">
                                        <div className="relative">
                                            <img src={item.image} alt="" className="w-full block" />
                                            <div className="top-0 left-0 bottom-0 right-0 absolute backdrop-blur" />
                                        </div>
                                    </div>)}
                                    {aboutImages.data.length < 4 ? aboutImages.data.map((item, index) => <div key={index} className="orthopedic-slide-item">
                                        <div className="relative">
                                            <img src={item.image} alt="" className="w-full block" />
                                            <div className="top-0 left-0 bottom-0 right-0 absolute backdrop-blur" />
                                        </div>
                                    </div>) : <></>}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white pb-12">
                <div className="container-outer">
                    <div className="flex justify-center">
                        <div className="rounded-lg w-full max-w-[879px] overflow-hidden">
                            <iframe className="w-full h-[275px] md:h-[450px]" src={`https://www.youtube.com/embed/${youtube}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white pb-24 pt-12">
                <div className="container-outer">
                    <div className="text-center text-[32px] font-semibold mb-4">Наши награды</div>
                    <div className="text-center text-zinc-800 text-[28px] mb-8">Награды ортопедического центра Extra Comfort от Национального рейтинга Казахстана в сфере здравоохранения, которое продемонстрировало превосходные результаты, ведущие к восстановлению здоровья и жизни людей.</div>
                    <ul className="grid grid-cols-2 lg:grid-cols-4 my-6 gap-3">
                        {rewards.data.map((item, index) => <li key={index} className="bg-slate-50 rounded-[20px] p-6 pb-12">
                            <div className="px-4 pb-8 mx-auto max-w-[180px]">
                                <div className="bg-center bg-contain bg-no-repeat pt-[100%]" style={{ backgroundImage: `url('${item.image}')` }} />
                            </div>
                            <div className="text-center text-lg font-bold">{item.title}</div>
                        </li>)}
                    </ul>
                </div>
            </div>

            <div className="bg-white pb-20">
                <div className="container-outer">
                    <FormAppDoctor />
                </div>
            </div>
        </Layout >
    );
}
