import { useEffect } from 'react';
import Layout from '@/Layouts/Layout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <Layout {...props}>
            <Head title="Подтверждение пароля" />

            <div className="mb-4 text-sm text-gray-600">
                Это безопасная область приложения. Пожалуйста, подтвердите свой пароль, прежде чем продолжить.
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Пароль" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="reg-form__btn-wrapper fw-700-16-20">
                    <button className="btn-primary" disabled={processing}>Подтвердить</button>
                </div>

            </form>
            <br />
            <br />
        </Layout>
    );
}
