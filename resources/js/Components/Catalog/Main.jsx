import { Link, usePage } from "@inertiajs/react"
import ProductTizer from "../ProductTizer"
import Paginate from "../Paginate"
import Filter from "./Filter"
import parse from "html-react-parser"

export default () => {

    const { products, category = null, categories = null, siblings = null, parentsiblings = null } = usePage().props

    return <div className="catalogue catalogue-section__catalogue">
        <div className="catalogue__left">
            {categories && categories.data.length ? <ul className="total-found-sidebar catalogue__total-found-sidebar fw-400-16-19">
                {categories.data.map((item) => <li key={item.id} className="total-found-sidebar__catalogue-sidebar-item">
                    <Link href={item.url} className={`catalogue-sidebar-item`}>
                        <div className="catalogue-sidebar-item__title fw-600-16-1  text-black">{item.name}</div>
                        <div className="catalogue-sidebar-item__total">{item.productsCount ? `(${item.productsCount})` : ``}</div>
                    </Link>
                </li>)}
            </ul> : <></>}
            {siblings && siblings.data.length ? <ul className="total-found-sidebar catalogue__total-found-sidebar fw-400-16-19">
                {siblings.data.map((item) => <li key={item.id} className="total-found-sidebar__catalogue-sidebar-item">
                    <Link href={item.url} className={`catalogue-sidebar-item`}>
                        <div className="catalogue-sidebar-item__title fw-600-16-1  text-black">{item.name}</div>
                        <div className="catalogue-sidebar-item__total">{item.productsCount ? `(${item.productsCount})` : ``}</div>
                    </Link>
                </li>)}
            </ul> : <></>}
            {parentsiblings && parentsiblings.data.length ? <ul className="total-found-sidebar catalogue__total-found-sidebar fw-400-16-19">
                {parentsiblings.data.map((item) => <li key={item.id} className="total-found-sidebar__catalogue-sidebar-item">
                    <Link href={item.url} className={`catalogue-sidebar-item`}>
                        <div className="catalogue-sidebar-item__title fw-600-16-1  text-black">{item.name}</div>
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