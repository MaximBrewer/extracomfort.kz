import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';
import SertProduct from "../../images/about/sert-product.png"
import SertService from "../../images/about/sert-service.png"
import Breadcrumbs from '@/Components/Breadcrumbs';
import CallBack from '@/Modals/CallBack';
import { useLayout } from '@/Contexts/LayoutContext';
import ProductTizer from '@/Components/ProductTizer';
import Paginate from '@/Components/Paginate';

export default (props) => {

    const { pagetitle, products } = props

    const { setModal } = useLayout()


    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="catalogue-categories mt-0 pt-8">
                <div className="container-outer">
                    <div className="catalogue-categories__outer">
                        <div className="catalogue-categories__inner">
                            <Breadcrumbs {...props} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="catalogue-section">
                <div className="container-outer mb-16">
                    <div className="catalogue__grid">
                        <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8 gap-3">
                            {products.data.map((item) => <li key={item.id} className="catalogue__item mx-auto">
                                <ProductTizer item={item} />
                            </li>)}
                        </ul>
                    </div>
                    <Paginate {...products.meta} />
                </div>
            </div>
        </Layout>
    );
}
