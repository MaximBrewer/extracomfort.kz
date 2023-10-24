import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import Breadcrumbs from '@/Components/Breadcrumbs';
import parse from "html-react-parser"

export default (props) => {

    const { pagetitle, page } = props

    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="catalogue-categories">
                <div className="container-outer">
                    <div className="catalogue-categories__outer">
                        <div className="catalogue-categories__inner">
                            <Breadcrumbs {...props} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="oferta">
                <div className="container-outer">
                    <div className="oferta-content">
                        <div className="refund__inner">
                            <div className="catalogue-section__title refund__title center fw-700-45-55">{page.data.title}</div>
                            <div className="oferta-text">{parse(page.data.body ?? ``)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
