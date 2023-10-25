import FormDoctorImage from "@/../images/form-doctor.png"
import { useLayout } from "@/Contexts/LayoutContext";
import CallBack from "@/Modals/CallBack";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

import Select from 'react-select'
import InputError from "./InputError";


const styles = {
    control: (baseStyles, state) => ({
        ...baseStyles,
        borderColor: `transparent !important`,
        borderRadius: `9999px`,
        minHeight: `49.42px`,
        boxShadow: `none !important`,
        background: `#EEF2F5 !important`,
    }),
    indicatorSeparator: (baseStyles, state) => ({
        ...baseStyles,
        display: `none`
    }),
    singleValue: (baseStyles, state) => ({
        ...baseStyles,
        color: `#414D55`,
        padding: `0 4px`
    }),
    placeholder: (baseStyles, state) => ({
        ...baseStyles,
        whiteSpace: `nowrap`
    }),
    menu: (baseStyles, state) => ({
        ...baseStyles,
        minWidth: `12rem`,
        left: `auto`,
        right: 0
    }),
}

const options = [
    { value: 'title:asc', label: 'По названию А-Я' },
    { value: 'title:desc', label: 'По названию Я-А' },
    { value: 'min_price:asc', label: 'Дешевле' },
    { value: 'min_price:desc', label: 'Дороже' }
]

export default (props) => {

    const { menus, headerphone, facilities } = window.appdata

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        phone: '',
        message: '',
        facility_id: null,
        remember: false,
    });

    const { setModal } = useLayout();

    const submit = (e) => {
        e.preventDefault();
        post(route('termins.store'), {
            preserveScroll: true
        });
    };

    return <div className="form-app-doctor">
        <div className="form-app-doctor-content">
            <div className="form-app-doctor-title">
                <h4>Запишитесь к Врачу</h4>
                <p>Оставьте контактные данные и выберите услугу</p>
            </div>
            <form action="" className="form-app-doctor-form" onSubmit={submit}>
                <div className="grid sm:grid-cols-3 gap-x-3 gap-y-3 lg:w-[576px] 2xl:w-[768px]">
                    <div>
                        <input type="text"
                            value={data.name}
                            onChange={e => setData(prev => ({
                                ...prev,
                                name: e.target.value
                            }))} className="form-app-doctor-input" placeholder="ФИО" />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div>
                        <input type="tel"
                            value={data.phone}
                            onChange={e => setData(prev => ({
                                ...prev,
                                phone: e.target.value
                            }))} className="form-app-doctor-input" placeholder="Номер телефона" />
                        <InputError message={errors.phone} className="mt-2" />
                    </div>
                    <div className="ordering-contacts-form__selectbox mr-0">
                        <Select
                            options={facilities.map(el => ({
                                label: el.title,
                                value: el.id
                            }))}
                            styles={styles}
                            isSearchable={false}
                            placeholder={`Выберите услугу`}
                            value={data.facility_id && facilities.findIndex(el => el.id == data.value) ? {
                                label: facilities.find(el => el.id == data.facility_id).title,
                                value: data.facility_id
                            } : null}
                            onChange={value => setData(prev => ({
                                ...prev,
                                facility_id: value.value
                            }))}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary25: '#f1f5f8',
                                    primary: '#3A9EAA',
                                },
                            })} />
                        <InputError message={errors.facility_id} className="mt-2" />
                    </div>
                    <div className="col-span-3">
                        <textarea type='text'
                            value={data.message}
                            onChange={e => setData(prev => ({
                                ...prev,
                                message: e.target.value
                            }))}
                            className="w-full form-app-doctor-input rounded-lg" placeholder="Опишите причину вашего обращения"></textarea>
                        <InputError message={errors.message} className="mt-2" />
                    </div>
                    <div className="col-span-3">
                        <button className="form-app-doctor-btn" type="submit">Записаться на прием</button>
                    </div>
                </div>
            </form>
            <div className="form-app-doctor-contact">
                <span>Также запись по телефону:</span>
                <a href={`tel:${headerphone}`}
                    //  onClick={e => {
                    //     e.preventDefault()
                    //     setModal(<CallBack />)
                    // }} 
                    className="flex flex-col md:flex-row gap-x-4 gap-y-1 md:items-center">
                    <span>{headerphone}</span>
                    {/* <span className="-purple">Запись к врачу в 1 клик</span> */}
                </a>
            </div>
        </div>
        <div className="form-app-doctor-img">
            <img src={FormDoctorImage} alt="" />
        </div>
    </div>
}