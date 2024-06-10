// 'address1' => setting('contacts.address1'),
// 'schedule1' => setting('contacts.schedule1'),
// 'address2' => setting('contacts.address2'),
// 'schedule2' => setting('contacts.schedule2'),
// 'email' => setting('contacts.email'),

import Layout from '@/Layouts/Layout';
// import PageTop from '@/Layouts/PageTop';
import { Head, useForm } from '@inertiajs/react';
// import Email from "../../images/email.svg"
// import Baloon from "../../images/baloon.svg"
// import Clock from "../../images/clock2.svg"
import Breadcrumbs from '@/Components/Breadcrumbs';
import parse from "html-react-parser"
import InputError from '@/Components/InputError';
// import ContactForm from '@/Components/ContactForm';
import Map from "../../images/map.jpg"
import Map2 from "../../images/map2.jpg"
import Baloon from '@/Icons/Baloon';
import Device from '@/Icons/Device';
import Email from '@/Icons/Email';

export default (props) => {

    const { address1, schedule1, address2, schedule2, pagetitle } = props;
    const { email } = window.appdata

    return (
        <Layout
            {...props}
        >
            <Head title={pagetitle} />
            <div className="">
                <div className="catalogue-categories mt-0 pt-8">
                    <div className="container-outer">
                        <div className="catalogue-categories__outer">
                            <div className="catalogue-categories__inner">
                                <Breadcrumbs {...props} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contacts-page pb-20">
                    <div className="container-outer">
                        <div className="flex flex-col lg:flex-row">
                            <div className="grow">
                                <div className="text-black text-[45px] font-bold mb-10">Главный офис</div>
                                <div className="gap-5 flex mb-5">
                                    <div className="w-12 h-12 bg-white rounded-full justify-center items-center flex">
                                        <Baloon className="w-5 h-auto" />
                                    </div>
                                    <div className="text-zinc-800">
                                        <div className="mb-3">Адрес:</div>
                                        <div className="font-bold">г. Караганда, ул. Комиссарова,&nbsp;22</div>
                                    </div>
                                </div>
                                <div className="gap-5 flex mb-5">
                                    <div className="w-12 h-12 bg-white rounded-full justify-center items-center flex">
                                        <Baloon className="w-5 h-auto" />
                                    </div>
                                    <div className="text-zinc-800">
                                        <div className="mb-3">Часы работы:</div>
                                        <div className="font-bold">ПН-ПТ - с 09:00 до 19:30</div>
                                        <div className="font-bold">СБ - с 11:00 до 15:00 </div>
                                        <div className="font-bold">ВС - выходной</div>
                                    </div>
                                </div>
                                <div className="gap-5 flex mb-5">
                                    <div className="w-12 h-12 bg-white rounded-full justify-center items-center flex">
                                        <Device className="w-4 h-auto" />
                                    </div>
                                    <div className="text-zinc-800">
                                        <div className="mb-3">Регистратура лечебного отдела:</div>
                                        <div className="font-bold">+7 700 836 96 65</div>
                                        <div className="font-bold mb-3">+7 778 276 23 43 (WhatsApp)</div>
                                        <div className="mb-3">Магазин ортопедических товаров:</div>
                                        <div className="font-bold">+7 747 095 40 69</div>
                                        <div className="font-bold">+7 708 045 84 25 (WhatsApp)</div>
                                    </div>
                                </div>
                                <div className="gap-5 flex mb-5">
                                    <div className="w-12 h-12 bg-white rounded-full justify-center items-center flex">
                                        <Email className="w-4 h-auto" />
                                    </div>
                                    <div className="text-zinc-800">
                                        <div className="mb-3">E-mail:</div>
                                        <a href="mailto:extracomfort@mail.ru" className="font-bold block">extracomfort@mail.ru</a>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-[42rem] shrink-0">
                                <div className="bg-slate-100 rounded-[40px] border border-stone-300 overflow-hidden">
                                    <img alt="" src={Map} className="block" />
                                </div>
                            </div>
                            {/* <div className="w-[358px] h-[193px] left-0 top-[321px] absolute justify-start items-start gap-[19px] inline-flex">
                                <div className="w-12 h-12 p-4 bg-white rounded-[25px] justify-center items-center gap-2.5 flex">
                                    <img className="w-[15.50px] h-[21.50px]" src="https://via.placeholder.com/15x21" />
                                </div>
                                <div className="flex-col justify-start items-start gap-3 inline-flex">
                                    <div className="mb-3">Регистратура лечебного отдела:</div>
                                    <div className="font-bold">+7 700 836 96 65</div>
                                    <div className="font-bold">+7 778 276 23 43 (WhatsApp)</div>
                                    <div className="text-zinc-800 text-base font-normal font-['Montserrat']">Магазин ортопедических товаров:</div>
                                    <div className="font-bold">+7 747 095 40 69</div>
                                    <div className="font-bold">+7 708 045 84 25 (WhatsApp)</div>
                                </div>
                            </div>
                            <div className="w-[298px] h-[127px] left-0 top-[174px] absolute justify-start items-start gap-[19px] inline-flex">
                                <div className="w-12 h-12 p-4 bg-white rounded-[25px] justify-center items-center gap-2.5 flex">
                                    <img className="w-[17.50px] h-[20.54px]" src="https://via.placeholder.com/17x21" />
                                </div>
                                <div className="flex-col justify-start items-start gap-3 inline-flex">
                                    <div className="mb-3">Часы работы:</div>
                                    <div className="font-bold">ПН-ПТ - с 09:00 до 19:30</div>
                                    <div className="font-bold">СБ - с 11:00 до 15:00 </div>
                                    <div className="font-bold">ВС - выходной</div>
                                </div>
                            </div> */}
                        </div>

                        <div className="flex flex-col lg:flex-row my-8">
                            <div className="grow">
                                <div className="text-black text-[45px] font-bold mb-10">Филиал*</div>
                                <div className="gap-5 flex mb-5">
                                    <div className="w-12 h-12 bg-white rounded-full justify-center items-center flex">
                                        <Baloon className="w-5 h-auto" />
                                    </div>
                                    <div className="text-zinc-800">
                                        <div className="mb-3">Адрес:</div>
                                        <div className="font-bold">г. Караганда, пр. Бухар Жырау, 79</div>
                                    </div>
                                </div>
                                <div className="gap-5 flex mb-5">
                                    <div className="w-12 h-12 bg-white rounded-full justify-center items-center flex">
                                        <Baloon className="w-5 h-auto" />
                                    </div>
                                    <div className="text-zinc-800">
                                        <div className="mb-3">Часы работы:</div>
                                        <div className="font-bold">ПН-ПТ - с 10:00 до 18:00</div>
                                        <div className="font-bold">1-я и 3-я СБ месяца - с 11:00 до 15:00 </div>
                                        <div className="font-bold">ВС - выходной</div>
                                    </div>
                                </div>
                                <div className="gap-5 flex mb-5">
                                    <div className="w-12 h-12 bg-white rounded-full justify-center items-center flex">
                                        <Device className="w-4 h-auto" />
                                    </div>
                                    <div className="text-zinc-800">
                                        <div className="mb-3">Телефон:</div>
                                        <div className="font-bold">+7 747 095 94 29</div>
                                        <div className="font-bold mb-3">+7 778 276 23 44 (WhatsApp)</div>
                                    </div>
                                </div>
                                <div className="gap-5 flex mb-5">
                                    <div className="w-12 h-12 bg-white rounded-full justify-center items-center flex">
                                        <Email className="w-4 h-auto" />
                                    </div>
                                    <div className="text-zinc-800">
                                        <div className="mb-3">E-mail:</div>
                                        <a href="mailto:extracomfort@mail.ru" className="font-bold block">extracomfort@mail.ru</a>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-[42rem] shrink-0">
                                <div className="bg-slate-100 rounded-[40px] border border-stone-300 overflow-hidden">
                                    <img alt="" src={Map2} className="block" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row my-8 gap-12 lg:justify-between">
                            <div>
                                <div className="mb-2">*На данном филиале предоставляются следующие услуги:</div>
                                <ul className="pl-8">
                                    <li className="list-disc">проводится кинезотерапия (зал лечебной гимнастики)</li>
                                    <li className="list-disc">кабинет подолога (лечебный педикюр)</li>
                                    <li className="list-disc">товары после мастэктомии</li>
                                    <li className="list-disc">товары для людей с ограниченными возможностями</li>
                                    <li className="list-disc">изделия для стомы</li>
                                    <li className="list-disc">аренда костылей, инвалидных колясок</li>
                                </ul>
                            </div>
                            <div className="text-black text-sm font-medium italic">
                                <p>ИП "Extra comfort" БИН 750522450185</p>
                                <p>Юр. адрес: РК, г.Караганда, ул.Ермекова д.52, кв. 213</p>
                                <p>&nbsp;</p>
                                <p>ИП Батманов Дмитрий Анатольевич БИН 730115350142</p>
                                <p>Юр. адрес: РК, г.Караганда, ул.Ермекова д.52, кв. 213</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
