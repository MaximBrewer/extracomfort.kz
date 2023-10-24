import { useLayout } from "@/Contexts/LayoutContext";
import { Inertia } from "@inertiajs/inertia";

export default (props) => {

    const { item } = props

    const close = () => {
        Inertia.patch(route(`cabinet.purchases.close`, {
            purchase: item.id
        }), {}, {
            preserveScroll: true
        })
    }

    return <div className={`seller-card`}>
        <div className={`seller-card-product-list`}>
            <div className={`seller-card-product`}>
                <div className={`seller-card-product-img`}>
                    <img src={item.truck.image} alt={item.truck.title} />
                </div>
                <div className={`seller-card-product-caption`}>
                    <p className={`text-ellipsis`}>{item.truck.title}</p>
                    {/* <span>{i.quantity} шт</span> */}
                </div>
            </div>
        </div>
        <div className={`seller-card-detail`}>
            <div className={`seller-card-detail-item`}>
                <h6>Номер заявки</h6>
                <p>{item.id}</p>
            </div>
            <div className={`seller-card-detail-item`}>
                <h6>Статус заявки</h6>
                <p className={item.statusColor}>{item.statusTitle}</p>
            </div>
            <div className={`seller-card-detail-item`}>
                <h6>Имя</h6>
                <p>{item.name}</p>
            </div>
            <div className={`seller-card-detail-item`}>
                <h6>Телефон</h6>
                <p>{item.phone}</p>
            </div>
            {/* <div className={`seller-card-detail-item`}>
                <h6>Спецтехника</h6>
                <p>{item.truck.title}</p>
            </div> */}
        </div>
        {item.status_id < 100 ? <div className={`seller-card-bottom`}>
            <button className={`btn btn-main btn-md`} onClick={() => {
                close()
            }}>Закрыть</button>
        </div> : ``}
    </div>
}