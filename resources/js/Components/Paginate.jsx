import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { Link } from "@inertiajs/react"

const Item = (props) => {

    const { item } = props

    if (!item.url && (item.label == 'prev' || item.label == 'next')) return ``

    const label = item.label == 'prev' ? <ChevronLeftIcon /> : (
        item.label == 'next' ? <ChevronRightIcon /> : item.label
    )

    return <li className={`page-item ${item.active ? `active` : ``}`}>
        {item.url && !item.active ? <Link className={`page-link`} href={item.url}>{label}</Link> : <span className={`page-link`}>{label}</span>}
    </li>
}


export default (props) => {

    const { current_page, from, last_page, links, path, per_page, to, total } = props

    return !from || from === last_page ? `` : <ul className={`pagination`}>
        {links.map((item, index) => <Item item={item} key={index} />)}
    </ul>
}