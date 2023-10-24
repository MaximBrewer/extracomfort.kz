import { Link } from "@inertiajs/inertia-react"

export default (props) => {
    const { item } = props
    return <Link className={`top-seller-card`} href={route(`sellers.show`, {
        seller: item.uniqid
    })}>
        <div className={`top-seller-card-img`}>
            <img src={item.logotip} alt={item.title} />
        </div>
        <div className={`top-seller-card-caption`}>
            <h6>{item.title}</h6>
            <div className={`rating`}>
                <p>Рейтинг</p>
                <span>{item.rating}</span>
                <i className={`icon icon-star`}></i>
            </div>
            <div className={`top-seller-card-review`}>
                <p>Отзывов <span>{item.reviewsCount}</span></p>
            </div>
        </div>
    </Link>
}