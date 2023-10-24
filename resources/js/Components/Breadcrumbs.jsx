import { Link, usePage } from "@inertiajs/react"
import { Fragment } from "react"

export default (props) => {

    const { breadcrumbs = [
        {
            route: `home`,
            text: `Главная`
        }
    ], cabinet = false, inbanner = false, lastActive = false } = props

    const { sitenote } = usePage().props


    return <div className={`${sitenote ? `mt-4` : ``} ${cabinet ? `catalogue-breadcrumb-wrapper justify-start fw-400-18-22` : `catalogue-breadcrumb-wrapper fw-400-18-22 flex-wrap`}`}>
        {breadcrumbs.map((item, index) => <Fragment key={index}>
            <div className={`catalogue-breadcrumb-item ${breadcrumbs.length - 1 == index && !lastActive ? `active` : ``} ${inbanner ? `text-white` : ``}`}>
                {breadcrumbs.length - 1 > index || lastActive ? <Link href={route(item.route, item.params)}>{item.text}</Link> : <span>{item.text}</span>}
            </div>
            {breadcrumbs.length - 1 > index ? <div className="catalogue-breadcrumb-dot-wrapper center">
                <div className={`catalogue-breadcrumb-dot  ${inbanner ? `bg-white` : ``}`}></div>
            </div> : ``}
        </Fragment>)}
    </div>
}