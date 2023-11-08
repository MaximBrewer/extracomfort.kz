import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';
import parse from "html-react-parser"


import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Breadcrumbs from '@/Components/Breadcrumbs';


const Item = ({ faq }) => {

    const [open, setOpen] = useState(false)

    return <div className="bg-white rounded-xl mb-8">
        <div
            className="text-lg font-bold flex items-center justify-between gap-12 py-6 px-6 cursor-pointer"
            onClick={e => { e.preventDefault(); setOpen(prev => !prev) }}
        >
            <div>{faq.question}</div>
            <a href="#"
                className="block p-3"
            >
                {open ? <ChevronDownIcon className="w-5 h-5 shrink-0" /> : <ChevronUpIcon className="w-5 h-5 shrink-0" />}
            </a>
        </div>
        <div className={`text-lg pb-6 px-6 ${open ? `` : `hidden`}`}>{parse(faq.answer)}</div>
    </div>
}

export default (props) => {

    const { faqs, pagetitle } = props;

    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="catalogue-categories mt-0 pt-8">
                <div className="container-outer">
                    <div className="catalogue-categories__outer">
                        <div className="catalogue-categories__inner">
                            {/* <TopCategories /> */}
                            <Breadcrumbs {...props} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-page pb-12">
                <div className="container-outer">
                    <div className="catalogue-section__title refund__title center fw-700-45-55 mb-11">Часто задаваемые вопросы</div>
                    {faqs.data.map((faq, fdx) => <Item faq={faq} key={fdx} />)}
                </div>
            </div>
        </Layout >
    );
}
