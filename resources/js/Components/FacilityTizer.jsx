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

    return <Link href={route('facility', params)} className="our-services-item group">
        <div className="our-services-bg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${item.bg}')` }} />
        <div className="flex flex-col justify-start items-center gap-4">
            <div className="relative our-services-icon">
                <div className="absolute top-0 left-0 bottom-0 right-0 bg-contain bg-center bg-no-repeat group-hover:opacity-1" style={{ backgroundImage: `url('${item.icon}')` }} />
                {/* <div className="absolute top-0 left-0 bottom-0 right-0 bg-contain bg-center bg-no-repeat opacity-1 group-hover:opacity-0" style={{ backgroundImage: `url('${item.icondark}')` }} /> */}
            </div>
            <div className="our-services-name">{parse(item.title ?? ``)}</div>
        </div>
        {/* <span className="our-services-btn">Подробнее</span> */}
    </Link>
}