import { Link, usePage } from "@inertiajs/react"
import parse from "html-react-parser"

export default ({ item }) => {

    const { facility = null } = usePage().props

    const params = facility ? {
        facility: facility.data.slug,
        subfacility: item.slug
    } : {
        facility: item.slug
    }


    return <Link href={route('facility', params)} className="our-services-item">
        <div className="our-services-bg">
            <img src={item.bg} alt="" />
        </div>
        <div className="flex flex-col justify-start items-center gap-4">
            <div className="our-services-icon">
                {parse(item.icon ?? ``)}
            </div>
            <div className="our-services-name">{parse(item.title ?? ``)}</div>
        </div>
        {/* <span className="our-services-btn">Подробнее</span> */}
    </Link>
}