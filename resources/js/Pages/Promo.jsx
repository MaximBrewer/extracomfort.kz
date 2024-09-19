import Top from "@/Components/Catalog/Top"
import Paginate from "@/Components/Paginate"
import ProductTizer from "@/Components/ProductTizer"
import { Head } from "@inertiajs/react"
import Layout from '@/Layouts/Layout';

export default (props) => {

    const { products, pagetitle } = props

    return (
        <Layout {...props} >
            <Head title={pagetitle} />
            <Top />
            <div className="info">
                <div className="container-outer">
                    <div className="catalogue__grid pb-12">
                        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            {products.data.map((item) => <li key={item.id} className="catalogue__item">
                                <ProductTizer item={item} />
                            </li>)}
                        </ul>
                        <Paginate {...products.meta} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}