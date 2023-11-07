import { useEffect } from 'react';
import Layout from '@/Layouts/Layout';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import Breadcrumbs from '@/Components/Breadcrumbs';
import Checked from "@/../images/checked.png"

export default function Login(props) {

    const { status } = props

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Layout {...props}>
            <Head title="Вход" />
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
                    <div className="registration-section__title catalogue-section__title center fw-700-45-55">
                        <p>Вход</p>
                    </div>
                    <form className="registration-section__form reg-form fw-400-16-19" onSubmit={submit}>
                        <div className="reg-form__col">

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                className="reg__input"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder={`E-mail`}
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="reg-form__col">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="reg__input"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder={`Пароль`}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="reg-form__col flex items-center justify-between">

                            <label className="flex items-center gap-3">
                                <div className="relative flex items-center justify-center w-5 h-5 rounded-[3px] border border-purple-900">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        name="remember"
                                        className="peer hidden absolute"
                                        value={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                    />
                                    <img src={Checked} className="opacity-0 peer-checked:opacity-100 absolute max-w-none" />
                                </div>
                                <span>Запомнить</span>
                            </label>

                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Забыли пароль?
                            </Link>

                        </div>

                        <div className="reg-form__btn-wrapper fw-700-16-20">
                            <button className="btn-primary" disabled={processing}>Войти</button>
                        </div>

                        {status && <div className="mt-4 font-medium text-sm text-green-600">{status}</div>}
                    </form>
                    <br />
                    <br />
                </div>
            </div>
        </Layout>
    );
}
