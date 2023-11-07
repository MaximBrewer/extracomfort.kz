import { useEffect } from 'react';
import Layout from '@/Layouts/Layout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import Breadcrumbs from '@/Components/Breadcrumbs';

export default function ResetPassword(props) {

    const { token, email } = props
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
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

        post(route('password.store'));
    };

    return (
        <Layout {...props}>
            <Head title="Сброс Password" />
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
                        <p>Сброс пароля</p>
                    </div>
                    <form className="registration-section__form reg-form fw-400-16-19" onSubmit={submit}>
                        <div className="reg-form__col">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="reg__input"
                                autoComplete="username"
                                placeholder={`E-mail`}
                                onChange={(e) => setData('email', e.target.value)}
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
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="reg-form__col">
                            <input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="reg__input"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                            />

                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        <div className="reg-form__btn-wrapper fw-700-16-20">
                            <button className="btn-primary" disabled={processing}>Сбросить пароль</button>
                        </div>
                    </form>
                    <br />
                    <br />
                </div>
            </div>
        </Layout>
    );
}
