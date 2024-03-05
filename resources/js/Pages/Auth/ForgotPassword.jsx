import Layout from '@/Layouts/Layout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import TopCategories from '@/Components/TopCategories';
import Breadcrumbs from '@/Components/Breadcrumbs';

export default function ForgotPassword(props) {
    const { status } = props
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <Layout {...props}>
            <Head title="Восстановление пароля" />
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
                        <p>Восстановление пароля</p>
                    </div>
                    <form className="registration-section__form reg-form fw-400-16-19" onSubmit={submit}>
                        <div className="reg-form__col">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="reg__input"
                                placeholder={`E-mail`}
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>


                        <div className="reg-form__btn-wrapper fw-700-16-20">
                            <button className="btn-primary" disabled={processing}>Отправить ссылку</button>
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
