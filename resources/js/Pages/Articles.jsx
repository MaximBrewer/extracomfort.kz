import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';
import Paginate from '@/Components/Paginate';
import Breadcrumbs from '@/Components/Breadcrumbs';

export default (props) => {

    const { pagetitle = ``, posts, categories, category = null } = props

    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="container-outer pb-24">
                <div className="catalogue-categories m-0 pt-20 pb-10">
                    <div className="catalogue-categories__outer">
                        <div className="catalogue-categories__inner">
                            <Breadcrumbs {...props} />
                        </div>
                    </div>
                </div>
                <div className="catalogue-section__title refund__title center fw-700-45-55 mb-8">Статьи</div>
                <ul className="flex items-center justify-center gap-8 flex-wrap mb-6">
                    {categories.data.map((cat, cdx) => <li key={cdx} >
                        <Link
                            className={`py-2 px-4 border border-purple-900 rounded-full ${category && category.data.id === cat.id ? `bg-purple-900 text-white` : `text-purple-900`}`}
                            href={route('articles', {
                                cid: cat.id
                            })}
                        >{cat.title}</Link></li>)}
                </ul>
                <div className="articles-outer pb-12">
                    <div className="articles-inner grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 mb-12">
                        {posts.data.map((post, pdx) => <Link href={route(`post`, {
                            post: post.id
                        })} key={pdx}
                            className={`min-h-[20rem] relative rounded px-8 py-6 flex flex-col justify-end bg-zinc-900`}>
                            <div
                                className="absolute opacity-30 top-0 left-0 bottom-0 right-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${post.image})` }}
                            />
                            <div className="relative text-white text-2xl">
                                <div className="">{post.title}</div>
                            </div>
                        </Link>)}
                    </div>
                    <Paginate {...posts.meta} />
                </div>
            </div>
        </Layout>
    );
}
