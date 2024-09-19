import Breadcrumbs from "@/Components/Breadcrumbs";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import Clock from "../../images/clock.svg"
import Pin from "../../images/pin.svg"
import Cdek from "../../images/cdek.svg"
import Post from "../../images/kaz-post.svg"
import parse from "html-react-parser"

export default (props) => {

    const { pagetitle, rents } = props;

    return <Layout
        {...props}
    >
        <Head title={pagetitle} />
        <div className="bg-white">
            <div className="h-px"></div>
            <div className="catalogue-categories">
                <div className="container-outer">
                    <div className="catalogue-categories__outer">
                        <div className="catalogue-categories__inner">
                            {/* <TopCategories /> */}
                            <Breadcrumbs {...props} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="refund">
                <div className="container-outer">
                    <div className="refund__outer">
                        <div className="refund__inner">
                            <div className="catalogue-section__title refund__title center fw-700-45-55">
                                <p>{pagetitle}</p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                                {rents.map((rent, rdx) => <>
                                    <div className="bg-slate-50 rounded-[20px] py-9 px-8 max-w-[582px] mx-auto mb-12 rents">
                                        <div className="text-center text-2xl font-semibold mb-6">{rent.title}</div>
                                        <div className="p-6 bg-white rounded-[20px] justify-start items-center gap-4 flex mb-5">
                                            <svg className="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V11C11.25 10.5858 11.5858 10.25 12 10.25ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" fill="#22282F" />
                                            </svg>
                                            <div className="grow">
                                                <div className="">{parse(rent.info ?? ``)}</div>
                                            </div>
                                        </div>
                                        <div className="my-4 font-bold">{rent.subtitle}</div>
                                        {parse(rent.text ?? ``)}
                                        <div className="p-6 bg-white rounded-[20px] justify-start items-center gap-4 flex mb-12">
                                            <svg className="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V11C11.25 10.5858 11.5858 10.25 12 10.25ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" fill="#22282F" />
                                            </svg>
                                            <div className="grow">{parse(rent.info2 ?? ``)}</div>
                                        </div>
                                    </div>
                                </>)}
                            </div>
                            <div className="h-px"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout >
}