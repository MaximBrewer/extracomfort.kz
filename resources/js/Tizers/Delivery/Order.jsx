import { useLayout } from "@/Contexts/LayoutContext";
import { Inertia } from "@inertiajs/inertia";
import { Fragment } from "react";

export default (props) => {

    const { item } = props

    const assign = () => {
        Inertia.patch(route(`cabinet.orders.assign`, {
            order: item.id
        }), {}, {
            preserveScroll: true
        })
    }

    const close = () => {
        // Inertia.patch(route(`cabinet.orders.close`, {
        //     order: item.id
        // }), {}, {
        //     preserveScroll: true
        // })
    }

    return <div className={`seller-card`}>
        <div className={`seller-card-product-list`}>
            {item.cart.items.map((i, iidx) => <Fragment key={iidx}>
                {iidx < 2 ? <div className={`seller-card-product`}>
                    <div className={`seller-card-product-img`}>
                        <img src={i.part.image} alt={i.part.title} />
                    </div>
                    <div className={`seller-card-product-caption`}>
                        <p className={`text-ellipsis`}>{i.part.title}</p>
                        <span>{i.quantity} шт</span>
                    </div>
                </div> : ``}
            </Fragment>)}
            {/* <a className={`seller-card-product-all`}>
                <p>Показать все <br />товары</p>
            </a> */}
        </div>
        <div className={`seller-card-detail`}>
            <div className={`seller-card-detail-item`}>
                <h6>Номер Заказа</h6>
                <p>{item.id}</p>
            </div>
            <div className={`seller-card-detail-item`}>
                <h6>Статус Заказа</h6>
                <p className={item.statusColor}>{item.statusTitle}</p>
            </div>
            <div className={`seller-card-detail-item`}>
                <h6>Способ доставки</h6>
                <p>{item.deliveryTitle}</p>
            </div>
            {/* <div className={`seller-card-detail-item`}>
                <h6>Способ оплаты</h6>
                <p>{item.deliveryTitle}</p>
            </div> */}
            {item.delivery === `delivery` ? <div className="seller-card-detail-item">
                <h6>Адрес доставки</h6>
                <p>{item.address}</p>
            </div> : ``}
            {/* <div className={`seller-card-detail-item`}>
                <h6>Стоимость товара</h6>
                <p>{priceFormat(item.cart.sum)}</p>
            </div> */}
        </div>
        {item.delivery_id ? <div className="seller-card-bottom">
            <button className="btn btn-main btn-md" onClick={() => close()}>Закрыть заказ</button>
        </div> : <div className="seller-card-bottom">
            <button className="btn btn-main btn-md" onClick={() => assign()}>Принять заказ</button>
        </div>}
    </div>
}