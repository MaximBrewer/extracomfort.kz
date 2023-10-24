import { useLayout } from "@/Contexts/LayoutContext";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";

export default (props) => {

    const { auth, item } = props

    const { priceFormat } = useLayout();

    // const add = () => {
    //     Inertia.post(route(`cart.add`), {
    //         item: item.part.uniqid
    //     }, {
    //         preserveScroll: true
    //     })
    // }

    // const deleteItem = () => {
    //     Inertia.post(route(`cart.delete`), {
    //         item: item.part.uniqid
    //     }, {
    //         preserveScroll: true
    //     })
    // }

    // const subtract = () => {
    //     Inertia.post(route(`cart.subtract`), {
    //         item: item.part.uniqid
    //     }, {
    //         preserveScroll: true
    //     })
    // }

    // const favorite = () => {
    //     if (props.auth.user)
    //         Inertia.patch(route(`cabinet.favorite.parts.toggle`), {
    //             item: item.part.uniqid
    //         }, {
    //             preserveScroll: true
    //         })
    //     else
    //         Inertia.patch(route(`favorite.parts.toggle`), {
    //             item: item.part.uniqid
    //         }, {
    //             preserveScroll: true
    //         })
    // }

    return <li className="small-basket-card">
        <div className="small-basket-card-caption">
            <div className="small-basket-card-caption-main">
                <div className="small-basket-card-name">
                    <p>{item.part.title}</p>
                </div>
                <div className="small-basket-card-category">
                    <p>{item.part.category.title}</p>
                </div>
                <div className="small-basket-card-code">
                    <div className="small-basket-card-code-item">
                        <p>Арт: <span>{item.part.article}</span></p>
                    </div>
                    <div className="small-basket-card-code-item">
                        <p>Код: <span>{item.part.code}</span></p>
                    </div>
                </div>
            </div>
            <div className="small-basket-card-caption-bottom">
                {/* <div className="basket-card-stock">
                    <p>В наличии: {item.part.total} шт</p>
                </div> */}
                <div className="small-basket-card-price">
                    <p>{priceFormat(item.price)}</p>
                    {/* <div className="product-amount-toggle">
                        <button className="product-amount-btn btn-decrement" onClick={() => subtract()}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H12H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12H6C5.58579 12.75 5.25 12.4142 5.25 12Z" fill="#818294"></path>
                            </svg>
                        </button>
                        <input type="text" value={item.quantity} disabled="" />
                        <button className="product-amount-btn btn-increment" onClick={() => add()} >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" fill="#818294"></path>
                            </svg>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="small-basket-card-img">
            <img src={item.part.image} alt={item.title} />
            {/* {!auth.user || auth.user.type === 'BUYER' ? <button className={`btn-plain basket-card-favourite ${props.favorites.parts.indexOf(item.part.uniqid) > -1 ? `active` : ``}`}
                onClick={() => {
                    favorite()
                }}
            >
                <i className="icon icon-favourite-gray"></i>
            </button> : ``} */}
        </div>
        {/* <button className="btn-plain basket-card-remove" onClick={() => {
            deleteItem()
        }}>
            <span className="icon icon-close"></span>
        </button> */}
    </li>
}