import { useEffect } from 'react';
import Layout from '@/Layouts/Layout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import Breadcrumbs from '@/Components/Breadcrumbs';

export default (props) => {

    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: ``,
        lastname: '',
        phone: '',
        email: ``,
        comment: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contacts.store'));
    };

    return (
        <form className="registration-section__form reg-form fw-400-16-19" onSubmit={submit}>
            <div className="grid grid-cols-2 gap-x-5 lg:gap-x-8 mb-5">
                <div>
                    <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        value={data.firstname}
                        className="bg-primary-100 rounded-full border-1 border-solid border-[rgba(0,0,0,.2)] py-2.5 px-5 fw-400-16-19"
                        autoComplete="firstname"
                        placeholder="Имя"
                        onChange={(e) => setData('firstname', e.target.value)}
                    />
                    <InputError message={errors.firstname} className="mt-2" />
                </div>
                <div>
                    <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        value={data.lastname}
                        className="bg-primary-100 rounded-full border-1 border-solid border-[rgba(0,0,0,.2)] py-2.5 px-5 fw-400-16-19"
                        autoComplete="lastname"
                        placeholder="Фамилия"
                        onChange={(e) => setData('lastname', e.target.value)}
                    />
                    <InputError message={errors.lastname} className="mt-2" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-5 lg:gap-x-8 mb-5">
                <div>
                    <input
                        id="phone"
                        type="text"
                        name="phone"
                        value={data.phone}
                        className="bg-primary-100 rounded-full border-1 border-solid border-[rgba(0,0,0,.2)] py-2.5 px-5 fw-400-16-19"
                        autoComplete="phone"
                        placeholder="Телефон"
                        onChange={(e) => setData('phone', e.target.value)}
                    />
                    <InputError message={errors.phone} className="mt-2" />
                </div>
                <div>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="bg-primary-100 rounded-full border-1 border-solid border-[rgba(0,0,0,.2)] py-2.5 px-5 fw-400-16-19"
                        autoComplete="email"
                        placeholder="Email"
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-x-5 lg:gap-x-8 mb-5">
                <textarea
                    id="comment"
                    name="comment"
                    value={data.comment}
                    className="font-sans bg-primary-100 rounded-2xl border-1 border-solid border-[rgba(0,0,0,.2)] py-2.5 px-5 w-full mb-5 h-[6.25rem] fw-400-16-19"
                    onChange={(e) => setData('comment', e.target.value)}
                    placeholder="Комментарий"
                />
                <InputError message={errors.comment} className="mt-2" />
            </div>
            <div className="ordering-btn-wrapper ordering-details__ordering-btn-wrapper fw-700-16-20">
                <PrimaryButton className="ml-4 justify-center" disabled={processing}>
                    <span>Отправить</span>
                </PrimaryButton>
            </div>
        </form>
    );
}
