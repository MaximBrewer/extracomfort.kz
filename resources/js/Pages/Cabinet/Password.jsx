import React, { useRef, useState } from 'react';
import { useLayout } from '@/Contexts/LayoutContext';
import { Head, Link, useForm } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Cart from '@/Icons/Cart';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import CabinetPanel from '@/Components/CabinetPanel';
import Breadcrumbs from '@/Components/Breadcrumbs';

export default (props) => {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('cabinet.password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };


    return (
        <Layout {...props}>
            <Head {...props} />

            <div className="cabinet-page bg-white py-10 md:py-20">
                <div className="container-outer">
                    <div className="flex items-start gap-7">
                        <div className="hidden md:block-1/4"></div>
                        <div className="w-3/4">
                            <div className="catalogue-categories mt-0 mb-4">
                                <div className="catalogue-categories__outer">
                                    <div className="catalogue-categories__inner">
                                        <Breadcrumbs {...props} cabinet={true} />
                                    </div>
                                </div>
                            </div>
                            <div className="registration-section__title catalogue-section__title text-left fw-700-45-55">
                                <p>Сменить пароль</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start gap-7">
                        <CabinetPanel />
                        <div className="cabinet-content">
                            <div className="cabinet-my-data white-block -gray">
                                <form action="" className="form-profile" onSubmit={updatePassword}>
                                    <div className="grid grid-cols-1 gap-y-4 mb-5">
                                        <div className="form-profile-item">
                                            <span>Старый пароль</span>
                                            <div className="form-profile-label">
                                                <input
                                                    id="current_password"
                                                    ref={currentPasswordInput}
                                                    value={data.current_password}
                                                    onChange={(e) => setData('current_password', e.target.value)}
                                                    type="password"
                                                    autoComplete="current-password"
                                                />
                                            </div>
                                            <InputError message={errors.current_password} className="mt-2" />
                                        </div>
                                        <div className="form-profile-item">
                                            <span>Новый пароль</span>
                                            <div className="form-profile-label">
                                                <input
                                                    id="password"
                                                    ref={passwordInput}
                                                    value={data.password}
                                                    onChange={(e) => setData('password', e.target.value)}
                                                    type="password"
                                                    autoComplete="new-password"
                                                />
                                            </div>
                                            <InputError message={errors.password} className="mt-2" />
                                        </div>
                                        <div className="form-profile-item">
                                            <span>Подтвердите пароль</span>
                                            <div className="form-profile-label">
                                                <input
                                                    id="password_confirmation"
                                                    value={data.password_confirmation}
                                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                                    type="password"
                                                    autoComplete="new-password"
                                                />
                                            </div>
                                            <InputError message={errors.password_confirmation} className="mt-2" />
                                        </div>
                                    </div>
                                    <button className="form-profile-btn">Сохранить</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
