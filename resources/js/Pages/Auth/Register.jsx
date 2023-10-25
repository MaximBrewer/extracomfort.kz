import { useEffect } from 'react';
import Layout from '@/Layouts/Layout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import TopCategories from '@/Components/TopCategories';
import Breadcrumbs from '@/Components/Breadcrumbs';

export default function Register(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
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
            <Head title="Register" />
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
                        <p>Регистрация</p>
                    </div>
                    <form className="registration-section__form reg-form fw-400-16-19" onSubmit={submit}>
                        <div className="reg-form__row">
                            <div style={{ width: `50%` }}>
                                <input
                                    id="name"
                                    name="name"
                                    value={data.name} className="reg__input"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder={`Имя`}
                                />
                                <InputError message={errors.name} />
                            </div>
                            <div style={{ width: `50%` }}>
                                <input
                                    id="email"
                                    type="text"
                                    name="email"
                                    value={data.email} className="reg__input"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder={`E-mail`}
                                />
                                <InputError message={errors.email} />
                            </div>
                        </div>

                        <div className="reg-form__col">

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

                        <div className="reg-form__col">

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
