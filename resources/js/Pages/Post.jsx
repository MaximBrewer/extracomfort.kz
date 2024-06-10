import { useLayout } from '@/Contexts/LayoutContext';
import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';
import parse from "html-react-parser"

export default (props) => {

    const { pagetitle = ``, post, next, prev } = props
    const { moment } = useLayout()

    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="bg-white">
                <div className="container-outer">
                    <div className="video-show-page">
                        <div className="flex flex-col lg:flex-row items-start gap-7">
                            <div className="video-show-play">
                                <div className="video-show-frame mb-6">
                                    <img src={post.data.image} />
                                </div>
                                <h3 className="video-show-title">{post.data.title}</h3>
                                <p className="video-show-date">{moment(post.data.created_at).format("DD.MM.yyyy")}</p>
                                <div className="video-show-description">{parse(post.data.body ?? ``)}</div>
                            </div>
                            <div className="video-show-list">
                                <ol>
                                    {prev ? <li>
                                        <Link href={route('post', {
                                            post: prev.data.id
                                        })}>
                                            <div className="w-[130px] h-[80px] bg-center bg-cover" style={{ backgroundImage: `url('${prev.data.image}')` }} />
                                            <div className="video-show-text">
                                                <h3>{prev.data.title}</h3>
                                                <span>{moment(prev.data.created_at).format("DD.MM.yyyy")}</span>
                                            </div>
                                        </Link>
                                    </li> : <></>}
                                    {next ? <li>
                                        <Link href={route('post', {
                                            post: next.data.id
                                        })}>
                                            <div className="w-[130px] h-[80px] bg-center bg-cover" style={{ backgroundImage: `url('${next.data.image}')` }} />
                                            <div className="video-show-text">
                                                <h3>{next.data.title}</h3>
                                                <span>{moment(next.data.created_at).format("DD.MM.yyyy")}</span>
                                            </div>
                                        </Link>
                                    </li> : <></>}
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
