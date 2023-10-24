import { Link, usePage } from "@inertiajs/react"
import ProductTizer from "../ProductTizer"
import Paginate from "../Paginate"
import Filter from "./Filter"

export default ({ categories }) => {

    const { products, category = null, subcategory = null, subsubcategory = null } = usePage().props

    return <div className="catalogue catalogue-section__catalogue">
        <div className="catalogue__left">
            {subsubcategory ? `` : <ul className="total-found-sidebar catalogue__total-found-sidebar fw-400-16-19">
                {categories.map((item) => <li key={item.id} className="total-found-sidebar__catalogue-sidebar-item">
                    <Link href={route('category', subcategory ? {
                        category: category.data.slug,
                        subcategory: subcategory.data.slug,
                        subsubcategory: item.slug,
                    } : (category ? {
                        category: category.data.slug,
                        subcategory: item.slug,
                    } : {
                        category: item.slug,
                    }))} className="catalogue-sidebar-item">
                        <div className="catalogue-sidebar-item__title">{item.name}</div>
                        <div className="catalogue-sidebar-item__total">{item.productsCount ? `(${item.productsCount})` : ``}</div>
                    </Link>
                </li>)}
            </ul>}
            {category ? <Filter /> : ``}
        </div>
        <div className="catalogue__grid">
            <ul className="catalogue__grid-inner">
                {products.data.map((item) => <li key={item.id} className="catalogue__item">
                    <ProductTizer item={item} />
                </li>)}
            </ul>
            <Paginate {...products.meta} />
        </div>
    </div >
}