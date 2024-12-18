import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import CabinetPanel from '@/Components/CabinetPanel';
import CabinetTop from '@/Components/CabinetTop';

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function Edit(props) {

    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };


    const { auth, mustVerifyEmail, status } = props
    return (
        <Layout {...props}>
            <Head {...props} />
            <div className="cabinet-page bg-white py-10 md:py-20">
                <div className="container-outer">
                    <CabinetTop {...props} />
                    <div className="flex flex-col lg:flex-row items-start gap-7">
                        <CabinetPanel />
                        <div className="cabinet-content ">
                            <div className="cabinet-my-data white-block -gray">
                                <form onSubmit={submit} className="mt-6 space-y-6">
                                    <div>
                                        <InputLabel htmlFor="name" value="Имя" />

                                        <TextInput
                                            id="name"
                                            className="mt-1 block w-full"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            required
                                            isFocused
                                            autoComplete="name"
                                        />

                                        <InputError className="mt-2" message={errors.name} />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="email" value="E-mail" />

                                        <TextInput
                                            id="email"
                                            type="email"
                                            className="mt-1 block w-full"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                            autoComplete="username"
                                        />

                                        <InputError className="mt-2" message={errors.email} />
                                    </div>

                                    {mustVerifyEmail && user.email_verified_at === null && (
                                        <div>
                                            <p className="text-sm mt-2 text-gray-800">
                                                Your email address is unverified.
                                                <Link
                                                    href={route('verification.send')}
                                                    method="post"
                                                    as="button"
                                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Click here to re-send the verification email.
                                                </Link>
                                            </p>

                                            {status === 'verification-link-sent' && (
                                                <div className="mt-2 font-medium text-sm text-green-600">
                                                    A new verification link has been sent to your email address.
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex items-center gap-4">
                                        <button className="form-profile-btn" disabled={processing}>Сохранить</button>
                                        <Transition
                                            show={recentlySuccessful}
                                            enterFrom="opacity-0"
                                            leaveTo="opacity-0"
                                            className="transition ease-in-out"
                                        >
                                            <p className="text-sm text-gray-600">Saved.</p>
                                        </Transition>
                                    </div>
                                </form>
                                {/* <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                        <DeleteUserForm className="max-w-xl" />
                                    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    );
}
