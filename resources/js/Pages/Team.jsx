import Breadcrumbs from '@/Components/Breadcrumbs';
import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';
import { Fragment, useState } from 'react';
import FormAppDoctor from '@/Components/FormAppDoctor';
import { useLayout } from '@/Contexts/LayoutContext';
import Employee from '@/Modals/Employee';

export default (props) => {

    const { pagetitle, employees } = props

    const [type, setType] = useState(-1)

    const { setModal } = useLayout();

    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="bg-white">
                <div className="container-outer">
                    <div className="catalogue-categories m-0 pt-20 pb-10">
                        <div className="catalogue-categories__outer">
                            <div className="catalogue-categories__inner">
                                <Breadcrumbs {...props} />
                            </div>
                        </div>
                    </div>
                    <div className="team-page">
                        <div className="container-outer">
                            <div className="catalogue-section__title refund__title center fw-700-45-55 mb-11">
                                <p>Наша команда</p>
                            </div>
                            <div className="team-page-content">
                                <div className="team-composition">
                                    <div className="team-composition-nav">
                                        <ul>
                                            <li><a href="#" onClick={e => {
                                                e.preventDefault()
                                                setType(-1)
                                            }} className={type === -1 ? "-active" : ""}>Все</a></li>
                                            <li><a href="#" onClick={e => {
                                                e.preventDefault()
                                                setType(0)
                                            }} className={type === 0 ? "-active" : ""}>Врачи</a></li>
                                            <li><a href="#" onClick={e => {
                                                e.preventDefault()
                                                setType(1)
                                            }} className={type === 1 ? "-active" : ""}>Массажисты</a></li>
                                        </ul>
                                    </div>
                                    <div className="team-composition-content">
                                        {employees.data.map((item, index) => <Fragment key={index}>
                                            {type === -1 || type == item.type ? <div className="p-4 shadow-lg bg-white rounded-xl flex-col justify-start items-center gap-4 flex text-center">
                                                <div className="bg-contain bg-no-repeat bg-center pt-[68.23%] w-full rounded-[20px]" style={{ backgroundImage: `url('${item.avatar}')` }} />
                                                <div className="text-black text-[22px] font-semibold">{item.name}</div>
                                                {item.post ? <div className="text-neutral-500">{item.post}</div> : ``}
                                                {item.degree ? <div className="text-neutral-500">{item.degree}</div> : ``}
                                                {item.experience ? <div className="text-neutral-500">{item.experience}</div> : ``}
                                                <a href="#" onClick={e => {
                                                    e.preventDefault()
                                                    setModal(<Employee employee={item} />)
                                                }} className="block py-3 px-8 text-white uppercase bg-primary-500 rounded-full">Посмотреть регалии</a>
                                            </div> : ``}
                                        </Fragment>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="container-outer">
                    <div className="team-form-app pt-48 pb-16 ">
                        <FormAppDoctor />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
