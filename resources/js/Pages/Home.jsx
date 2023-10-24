import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';

import FormAppDoctor from '@/Components/FormAppDoctor';

export default (props) => {

    const { pagetitle = ``, services = {}, shop = {} } = props

    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="container-outer">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 my-10">
                    <div className="main-page-link">
                        <div className="main-page-img">
                            <img src={shop.bg} alt={shop.title} />
                        </div>
                        <div className="main-page-text">
                            <h3 className="main-page-name mb-4">{shop.title}</h3>
                            {shop.subtitle ? <p className="main-page-subname mb-6 md:mb-12">{shop.subtitle}</p> : ``}
                            <Link href={route('shop')} className="main-page-link-btn -green">Посетить</Link>
                        </div>
                    </div>
                    <div className="main-page-link">
                        <div className="main-page-img">
                            <img src={services.bg} alt={services.title} />
                        </div>
                        <div className="main-page-text">
                            <h3 className="main-page-name mb-4">{services.title}</h3>
                            {services.subtitle ? <p className="main-page-subname mb-6 md:mb-12">{services.subtitle}</p> : ``}
                            <Link href={route('services')} className="main-page-link-btn -purple">Посетить</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}