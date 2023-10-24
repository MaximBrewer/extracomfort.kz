import { useLayout } from "@/Contexts/LayoutContext"
import { Link } from "@inertiajs/inertia-react";


export default (props) => {
    const { item } = props

    const { moment } = useLayout();

    return <div className={`news-card`}>
        <div className={`news-card-img`}>
            <img src={item.image} alt={item.title} />
        </div>
        <div className={`news-card-caption`}>
            <h6>{item.title}</h6>
            <span>{moment(item.date).locale("ru").format("D MMMM YYYY")}</span>
        </div>
        <Link href={route(`posts.show`, {
            post: item.slug
        })} className={`absolute-link`}></Link>
    </div>
}