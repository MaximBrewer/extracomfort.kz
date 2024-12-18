import { useEffect } from 'react';
import Layout from '@/Layouts/Layout';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import Breadcrumbs from '@/Components/Breadcrumbs';
import Checked from "@/../images/checked.png"
import InputMask from 'react-input-mask';

export default function Register(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        phone: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Layout {...props}>
            <Head title="Регистрация" />
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
            <div className="registration-section">
                <div className="container-outer">
                    <div className="registration-section__title catalogue-section__title center text-xl lg:text-2xl font-bold text-center">
                        <p>Регистрация</p>
                    </div>
                    <form className="registration-section__form reg-form fw-400-16-19" onSubmit={submit}>
                        <div className="reg-form__row">
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                className="reg__input"
                                autoComplete="name"
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder={`Имя`}
                            />
                            <InputError message={errors.name} />
                        </div>

                        <div className="reg-form__row">
                            <div style={{ width: `50%` }}>
                                <InputMask
                                    alwaysShowMask={true}
                                    mask="+7 (999) 999-99-99"
                                    value={data.phone ?? ``}
                                    onChange={(e) => {
                                        setData('phone', e.target.value)
                                        setError("phone", null)
                                    }}
                                    placeholder={``}
                                >
                                    {(inputProps) => <input
                                        type="text"
                                        className="reg__input"
                                        {...inputProps}
                                    />}
                                </InputMask>
                            </div>
                            <div style={{ width: `50%` }}>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email} className="reg__input"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder={`E-mail`}
                                />
                                <InputError message={errors.email} />
                            </div>
                        </div>

                        <div className="reg-form__row">

                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={data.password}
                                className="reg__input"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} />
                        </div>

                        <div className="reg-form__row">

                            <input
                                id="password_confirmation"
                                type="password"
                                placeholder="Подтвердите пароль"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="reg__input"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                            />

                            <InputError message={errors.password_confirmation} />
                        </div>

                        <div className="reg-form__row">
                            <label className="flex items-center gap-3">
                                <div className="relative flex items-center justify-center w-5 h-5 rounded-[3px] border border-purple-900">
                                    <input
                                        id="accept"
                                        type="checkbox"
                                        name="accept"
                                        className="peer hidden absolute"
                                        value={data.accept}
                                        onChange={(e) => setData('accept', e.target.checked)}
                                    />
                                    <img src={Checked} className="opacity-0 peer-checked:opacity-100 absolute max-w-none" />
                                </div>
                                <span>я согласен на обработку и сбор персональных данных</span>
                            </label>

                            <InputError message={errors.accept} />
                        </div>


                        <div className="reg-form__btn-wrapper fw-700-16-20">
                            {/* <Link
                                href={route('login')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Already registered?
                            </Link> */}

                            <button className="btn-primary" disabled={processing}>Зарегистрироваться</button>
                        </div>
                    </form>
                    <br />
                    <br />
                </div>
            </div>
        </Layout>
    );
}
