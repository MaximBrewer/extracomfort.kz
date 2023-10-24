import { useState } from "react"
import SertProduct from "../../images/about/sert-product.png"
import SertService from "../../images/about/sert-service.png"

export default (props) => {

    const [type, setType] = useState(1)

    return <div className="container-inner bg-gray-50 xl:rounded-[20px] py-8 xl:py-10 xl:px-12 -mx-5">
        <div className="flex items-center justify-center mb-8">
            <div className="flex items-center justify-center bg-slate-100 rounded-[40px]">
                <div className={`xl:min-w-[15rem] px-5 py-3 text-center rounded-[40px] ${type ? `text-white bg-primary-500` : `cursor-pointer text-primary-500`}`} onClick={e => setType(1)}>Магазин</div>
                <div className={`xl:min-w-[15rem] px-5 py-3 text-center rounded-[40px] ${!type ? `text-white bg-primary-500` : `cursor-pointer text-primary-500`}`} onClick={e => setType(0)}>Ортопедический центр</div>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 xl:items-center px-2">
            <div className="shrink-0 flex items-center justify-center relative h-[20rem] xl:h-[364px] xl:w-[470px]">
                <div className={`w-[20rem] xl:w-[364px] h-[20rem] xl:h-[364px] absolute  ${!type ? `bg-primary-200` : `bg-sky-300`} rounded-full`} />
                <img className="absolute rounded-[10px] shadow w-full" src={type ? SertProduct : SertService} />
            </div>
            <div className="grow px-3">
                <div className="text-[26px] font-semibold mb-5">Подарочные сертификаты</div>
                {!type ? <div className="">
                    <p className="mb-3">Вы можете позаботиться о Ваших близких и друзьях, подарив им «Подарочный сертификат» на медицинские услуги нашего центра, которые принесут пользу здоровью!</p>
                    <p>Вы можете выбрать конкретный вид услуги – и мы на него оформим «Подарочный сертификат», либо наш консультант предложит Вам варианты, максимально результативные в конкретной ситуации.</p>
                </div> : <div className="">
                    <p className="mb-3">Вы можете порадовать Ваших близких и друзей, подарив им «Подарочный сертификат» на приобретение товаров, которые принесут пользу здоровью!</p>
                    <p>Вы можете выбрать конкретный вид товара – и мы на него оформим «Подарочный сертификат», либо укажите сумму, на которую Вы хотите оформить «Подарочный сертификат».</p>
                </div>}
            </div>
        </div>
    </div>
}