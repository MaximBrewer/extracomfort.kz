import { Link, usePage } from "@inertiajs/react"
import ProductTizer from "../ProductTizer"
import Paginate from "../Paginate"
import Filter from "./Filter"

export default () => {

    const { products, category = null, subcategory = null, subsubcategory = null, categories = null, subcategories = null, subsubcategories = null } = usePage().props

    return <div className="catalogue catalogue-section__catalogue">
        <div className="catalogue__left">
            {categories && categories.data.length ? <ul className="total-found-sidebar catalogue__total-found-sidebar fw-400-16-19">
                {categories.data.map((item) => <li key={item.id} className="total-found-sidebar__catalogue-sidebar-item">
                    <Link href={route('category', {
                        category: item.slug,
                    })} className={`catalogue-sidebar-item`}>
                        <div className="catalogue-sidebar-item__title fw-600-16-1  text-black">{item.name}</div>
                        <div className="catalogue-sidebar-item__total">{item.productsCount ? `(${item.productsCount})` : ``}</div>
                    </Link>
                </li>)}
            </ul> : <></>}
            {subcategories && subcategories.data.length ? <ul className="total-found-sidebar catalogue__total-found-sidebar fw-400-16-19">
                {subcategories.data.map((item) => <li key={item.id} className="total-found-sidebar__catalogue-sidebar-item">
                    <Link href={route('category', {
                        category: category.data.slug,
                        subcategory: item.slug,
                    })} className={`catalogue-sidebar-item ${subcategory && subcategory.data.id === item.id ? `underline purple` : `text-black`}`}>
                        <div className="catalogue-sidebar-item__title fw-600-16-19">{item.name}</div>
                        <div className="catalogue-sidebar-item__total">{item.productsCount ? `(${item.productsCount})` : ``}</div>
                    </Link>
                </li>)}
            </ul> : <></>}
            {subsubcategories && subsubcategories.data.length ? <ul className="total-found-sidebar catalogue__total-found-sidebar fw-400-16-19">
                {subsubcategories.data.map((item) => <li key={item.id} className="total-found-sidebar__catalogue-sidebar-item">
                    <Link href={route('category', {
                        category: category.data.slug,
                        subcategory: subcategory.data.slug,
                        subsubcategory: item.slug,
                    })} className={`catalogue-sidebar-item ${subsubcategory && subsubcategory.data.id === item.id ? `underline purple` : `text-black`}`}>
                        <div className="catalogue-sidebar-item__title fw-600-16-19">{item.name}</div>
                        <div className="catalogue-sidebar-item__total">{item.productsCount ? `(${item.productsCount})` : ``}</div>
                    </Link>
                </li>)}
            </ul> : <></>}
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