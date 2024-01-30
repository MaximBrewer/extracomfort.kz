import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import Breadcrumbs from '@/Components/Breadcrumbs';


export default (props) => {

    const { pagetitle, partners } = props

    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="bg-white">
                <div className="container-outer">
                    <div className="catalogue-categories mt-0 pt-8">
                        <div className="container-outer">
                            <div className="catalogue-categories__outer">
                                <div className="catalogue-categories__inner">
                                    <Breadcrumbs {...props} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="partners-page">
                        <div className="container-outer">
                            <div className="catalogue-section__title refund__title center fw-700-45-55 mb-11">
                                <p>Партнеры</p>
                            </div>
                            <div className="partners-content">
                                <div className="grid md:grid-cols-2 gap-x-8 gap-y-7">
                                    {partners.data.map((item, index) => <div key={index} className="partners-content-items">
                                        <div className="flex flex-col lg:flex-row gap-5 items-center mb-4">
                                            <div className="partner-img">
                                                <img src={item.image} alt="" className="max-w-[175px]"/>
                                            </div>
                                            <h3 className="partner-name">{item.title}</h3>
                                        </div>
                                        <div className="partner-description">{item.text}</div>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
