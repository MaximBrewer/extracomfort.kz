import Main from '@/Components/Catalog/Main';
import Sort from '@/Components/Catalog/Sort';
import Top from '@/Components/Catalog/Top';
import Total from '@/Components/Catalog/Total';
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';

export default (props) => {

    const { pagetitle } = props

    return (
        <Layout {...props} >
            <Head title={pagetitle} />
            <Top />
            <div className="catalogue-section">
                <div className="container-outer">
                    <div className="catalogue-section__title center fw-700-45-55">{pagetitle}</div>
                    <div className="catalogue-filter-row catalogue-section__catalogue-filter-row mb-3">
                        <Total />
                        <Sort />
                    </div>
                    <Main />
                </div>
            </div>
        </Layout>
    );
}
