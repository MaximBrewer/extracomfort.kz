import { useLayout } from "@/Contexts/LayoutContext";
import Cart2 from "@/Icons/Cart2";
import NoPhoto from "@/Icons/NoPhoto";
import Star from "@/Icons/Star";
import { Link } from "@inertiajs/react";

export default ({ item }) => {

    const { numWord } = useLayout();

    const offerPrice = () => {
        let prices = [];
        item.offers.map((offer) => {
            if (offer.prices.findIndex(el => el.type_id === 1) > -1) prices.push(offer.prices.find(el => el.type_id === 1).value)
        })
        if (!prices.length) return ``;
        const minValue = Math.min.apply(null, prices);
        return <p>{minValue} тг</p>
    }

    return <>
        <Link href={item.url} className="catalogue__item-photo-wrapper relative">
            <div className="catalogue__item-photo">
                {item.images.length ? <div className='pt-[100%] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url('${item.images[0].url}')` }} /> : <div className="pt-[100%] relative">
                    <NoPhoto className="absolute w-full h-auto text-gray-300 top-1/2 -translate-y-1/2" />
                </div>}
            </div>
            <ul className="absolute flex items-center flex-wrap gap-2 top-3 left-3">
                {item.novelty ? <li className="py-1 px-1.5 bg-blue-500 rounded text-sm font-medium text-white">Новинка</li> : <></>}
                {item.promo ? <li className="py-1 px-1.5 bg-red-500 rounded text-sm font-medium text-white">Акция</li> : <></>}
            </ul>
        </Link>
        <div className="catalogue__item-bottom">
            {item.min_price}
            <div className="catalogue__item-bottom-inner">
                <Link href={item.url} className="catalogue__item-title fw-600-16-19 h-[2.5rem] line-clamp-2">{item.title}</Link>
                <div className="catalogue__item-rating">
                    {/* <div className="catalogue__stars">
                        {[null, null, null, null, null].map((st, stdx) => <div key={stdx} className="catalogue__star-wrapper center">
                            <Star className="w-4 h-4 shrink-0 text-yellow-400" />
                        </div>)}
                    </div> */}
                    <div className="catalogue__feedback-label fw-500-12-18">{numWord(item.reviewsCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
                </div>
                {item.quantity ? <div className="in-stock-label__txt fw-400-14-17">В наличии</div> : <div className="in-stock-label__txt fw-400-14-17">Под заказ</div>}
                <div className="catalogue__short-desc-label fw-400-16-19">{item.excerpt}</div>
                {item.offers.length ? <div className="catalogue__item-price fw-700-18-22">
                    {offerPrice()}
                </div> : ``}
                <Link href={item.url} className="cart-icon-wrapper catalogue__cart-icon-wrapper">
                    <Cart2 className="w-4 h-4 shrink-0" />
                </Link>
            </div>
        </div>
    </>
}