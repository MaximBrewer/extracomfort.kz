
import InputError from "@/Components/InputError";
import { useLayout } from "@/Contexts/LayoutContext";
import { useForm } from "@inertiajs/react";

export default (props) => {

    const { product = null, offer = null } = props

    console.log(product, offer)

    const { setModal } = useLayout();

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        phone: '',
        email: '',
        message: '',
        offer: offer ? offer.id : null,
        product: product && product.data ? product.data.id : null
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('missing'), {
            preserveScroll: true,
            onSuccess: () => {
                setModal(null)
            }
        });
    };

    return <div className="max-w-[912px] relative bg-white rounded-2xl p-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-4 lg:w-8 h-4 lg:h-8 absolute right-4 top-4 lg:-right-12 lg:-top-12 text-black opacity-50 lg:text-white" onClick={e => setModal(null)} viewBox="0 0 30 30" fill="none">
            <path d="M18.3041 15L29.5207 3.78293C29.8293 3.47415 29.9995 3.0622 30 2.62293C30 2.18342 29.8298 1.77098 29.5207 1.46268L28.5378 0.480001C28.2288 0.170489 27.8168 0.000976562 27.3771 0.000976562C26.938 0.000976562 26.5261 0.170489 26.2171 0.480001L15.0005 11.6963L3.78341 0.480001C3.47488 0.170489 3.06268 0.000976562 2.62317 0.000976562C2.18415 0.000976562 1.77195 0.170489 1.46341 0.480001L0.48 1.46268C-0.16 2.10268 -0.16 3.14366 0.48 3.78293L11.6968 15L0.48 26.2166C0.17122 26.5259 0.00121951 26.9378 0.00121951 27.3771C0.00121951 27.8163 0.17122 28.2283 0.48 28.5373L1.46317 29.52C1.77171 29.8293 2.18415 29.999 2.62293 29.999C3.06244 29.999 3.47463 29.8293 3.78317 29.52L15.0002 18.3034L26.2168 29.52C26.5259 29.8293 26.9378 29.999 27.3768 29.999H27.3773C27.8166 29.999 28.2285 29.8293 28.5376 29.52L29.5205 28.5373C29.829 28.2285 29.9993 27.8163 29.9993 27.3771C29.9993 26.9378 29.829 26.5259 29.5205 26.2168L18.3041 15Z" fill="currentColor" />
        </svg>
        <form className="flex flex-col gap-4 items-center min-w-[16rem]" onSubmit={submit}>
            <div className=" w-full">
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={data.name} className="ordering__input w-full"
                    onChange={(e) => setData('name', e.target.value)}
                    placeholder={`Ваше имя`}
                />
                <InputError message={errors.name} />
            </div>
            <div className=" w-full">
                <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={data.phone} className="ordering__input"
                    onChange={(e) => setData('phone', e.target.value)}
                    placeholder={`Телефон`}
                />
                <InputError message={errors.phone} />
            </div>
            <div className=" w-full">
                <input
                    id="email"
                    type="text"
                    name="email"
                    value={data.email} className="ordering__input"
                    onChange={(e) => setData('email', e.target.value)}
                    placeholder={`E-mail`}
                />
                <InputError message={errors.email} />
            </div>
            <div className=" w-full">
                <textarea
                    id="message"
                    type="text"
                    name="message"
                    value={data.message} className="border-[#000000] border-opacity-20 bg-[#F1F5F8] rounded-3xl w-full"
                    onChange={(e) => setData('message', e.target.value)}
                    placeholder={`Сообщение`}
                />
                <InputError message={errors.message} />
            </div>
            <div className="ordering-btn-wrapper fw-700-16-20">
                <button className="btn-primary px-5 py-3">Отправить</button>
            </div>

            {product.data ? <div className="mb-4 text-sm leading-tight max-w-[20rem]">
                <div className="flex">
                    {product.data.images.length ? <div className="pr-4 shrink-0">
                        <img src={product.data.images[0].url} className="w-20 h-auto" alt="" />
                    </div> : <></>}
                    <div className="good-block-info">
                        <div className=" mb-4">
                            <div className="font-medium mb-2">{product.data.title}</div>
                            <div className="text-gray-400">{product.data.article}</div>
                        </div>
                    </div>
                </div>
            </div> : <></>}
        </form>
    </div>
}