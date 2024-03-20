import Layout from "@/Layouts/Layout";
import { Head, useForm } from "@inertiajs/react";
import parse from "html-react-parser"
import CallBack from "@/Modals/CallBack";
import { useLayout } from "@/Contexts/LayoutContext";
import FacilityTizer from "@/Components/FacilityTizer";
import InputError from "@/Components/InputError";
import moment from "moment";

export default (props) => {

    const { pagetitle, current, facility, facilities } = props;

    const { setModal } = useLayout()


    const { data, setData, post, processing, errors, reset } = useForm({
        facility_id: current.data.id,
        name: '',
        email: '',
        rate: 5,
        text: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('facilities.reviews.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset()
                setModal(null)
            }
        });
    };

    return <Layout
        {...props}
    >
        <Head title={pagetitle} />
        <div className="main-block">
            <div className="main-bg">
                <img src={current.data.image} alt={current.data.title} />
            </div>
            <div className="container-outer">
                <div className="main-content flex flex-col justify-center text-center ">
                    <div className="prose-xl mx-auto">{parse(current.data.subtitle ?? ``)}</div>
                    {/* <div className="prose text-white mx-auto">{parse(current.data.subtitle ?? ``)}</div> */}
                </div>
            </div>
        </div>

        <div className="container-outer flex flex-col justify-center h-full py-8">
            <a href="#" className="btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto" onClick={e => {
                e.preventDefault()
                setModal(<CallBack subject={'обратный звонок'} />)
            }}>Заказать звонок</a>
        </div>
        {facilities.data.length ? <div className="our-services">
            <div className="container-outer">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {facilities.data.map((item, index) => <FacilityTizer key={index} item={item} />)}
                </div>
            </div>
        </div> : <></>}

        <div className="massage-info bg-white py-20">
            <div className="container-outer facility-text">
                <div className="flex flex-col md:flex-row items-stretch gap-5 mb-5">
                    {current.data.text1 ? <div className="white-block -gray mb-0 md:w-1/2 facility-text1 prose max-w-none">
                        {parse(current.data.text1 ?? ``)}
                    </div> : ``}
                    <div className="flex flex-col gap-5 md:w-1/2">
                        {current.data.text2 ? <div className="white-block -gray mb-0  facility-text2 prose max-w-none">
                            {parse(current.data.text2 ?? ``)}
                        </div> : ``}
                        {current.data.text3 ? <div className="white-block -gray mb-0  facility-text3 prose max-w-none">
                            {parse(current.data.text3 ?? ``)}
                        </div> : ``}
                    </div>
                </div>
                {current.data.text4 ? <div className="white-block -gray mb-5 facility-text4 prose max-w-none">
                    {parse(current.data.text4 ?? ``)}
                </div> : ``}
                {current.data.text5 ? <div className="white-block -gray mb-5 facility-text5 prose max-w-none">
                    {parse(current.data.text5 ?? ``)}
                </div> : ``}
                <div className="massage-courses mt-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-10">
                        {current.data.text6 ? <div className="grow facility-text6 prose max-w-none">
                            {parse(current.data.text6 ?? ``)}
                        </div> : ``}
                        <div className="max-w-[21.875rem] shrink-0">
                            <img src={current.data.text6image} alt="" />
                        </div>
                    </div>
                    {current.data.sign1 ? <div className="warning-block">{current.data.sign1}</div> : ``}
                    {current.data.sign2 ? <div className="warning-block">{current.data.sign2}</div> : ``}
                </div>
            </div>
        </div>


        <div className="product-review-tab-wrapper py-20">
            <div className="container-outer">
                <h3 className="text-xl font-bold mb-8">Отзывы</h3>
                <ul className="comment-wrapper product-review-tab-wrapper__comment-wrapper">
                    {current.data.reviews.map((review, rdx) => <li key={rdx} className="comment-wrapper__comment comment">
                        <div className="comment__left">
                            <div className="comment__content ">
                                <div className="comment__fullname fw-500-16-22">{review.name}</div>
                                <div className="comment__txt fw-400-16-19">{review.text}</div>
                                <div className="comment__date fw-500-14-20">{moment(review.created_at).format('DD.MM.YYYY HH:mm')}</div>
                            </div>
                        </div>
                    </li>)}
                </ul>


                <form className="contact mb-20" onSubmit={submit}>
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={data.name} className="contact__input input"
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder={`Имя`}
                            />
                            <InputError message={errors.name} />
                        </div>
                        <div>
                            <input
                                id="email"
                                type="text"
                                name="email"
                                value={data.email} className="contact__input input"
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder={`E-mail`}
                            />
                            <InputError message={errors.email} />
                        </div>
                    </div>
                    <div className="contact__row fw-400-16-19">
                        <textarea
                            id="text"
                            name="text"
                            value={data.text} className="feedback-textarea"
                            onChange={(e) => setData('text', e.target.value)}
                            placeholder="Отзыв" />
                        <InputError message={errors.text} />
                    </div>
                    <div className="contact__row fw-400-16-19">
                        <button className="btn-primary fw-700-16-20" disabled={processing}>Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
}