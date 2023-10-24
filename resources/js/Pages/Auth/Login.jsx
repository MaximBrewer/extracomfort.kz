import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import Layout from '@/Layouts/Layout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import TopCategories from '@/Components/TopCategories';
import Breadcrumbs from '@/Components/Breadcrumbs';

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
            <Head title="Log in" />
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

                    <div className="registration-section__subtitle reg-subtitle fw-400-16-19">
                        <p>Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании систем массового участия.</p>
                    </div>
                    <form className="registration-section__form reg-form fw-400-16-19" onSubmit={submit}>
                        <div className="reg-form__col">

                            <input
                                id="email"
                                name="email"
                                value={data.email}
                                className="reg__input"
                                autoComplete="username"
                                isFocused={true}
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

                        <div className="reg-form__col">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Забыли пароль?
                            </Link>

                            <PrimaryButton className="ml-4" disabled={processing}>Войти</PrimaryButton>
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
