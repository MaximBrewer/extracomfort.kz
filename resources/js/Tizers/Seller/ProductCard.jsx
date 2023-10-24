export default (props) => {
    return <div className="product-card seller-product-card">
        <button className="btn-plain product-delete">
            <i className="icon icon-close"></i>
        </button>
        <div className="product-card-img">
            <img src="img/content/product-img.png" alt="" />
        </div>
        <div className="product-card-caption">
            <div className="product-name">
                <p>Ashuki 024567846</p>
            </div>
            <div className="product-category">
                <p>Рулевое управление</p>
            </div>
            <div className="product-detail">
                <div className="product-detail-item">
                    <p>Арт:</p>
                    <span>ASK1421</span>
                </div>
                <div className="product-detail-item">
                    <p>Код:</p>
                    <span>0654812</span>
                </div>
            </div>
        </div>
        <div className="product-card-price">
            <p>от 150 000 тг</p>
            <a href="" className="btn btn-main btn-sm product-card-btn" data-toggle="modal" data-target="#productEdit">
                <i className="icon icon-edit"></i>
                <span>Редактировать товар</span>
            </a>
        </div>
    </div>
}