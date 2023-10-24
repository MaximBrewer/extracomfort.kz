import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import Paginate from '@/Components/Paginate';

export default (props) => {

    const { pagetitle = ``, posts } = props


    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="container-outer">
                <div className="articles-outer">
                    <div className="articles-inner">
                        {posts.data.map((post, pdx) => <div key={pdx} className={``}>
                            {post.title}
                        </div>)}
                    </div>
                    <Paginate {...posts} />
                </div>
            </div>
        </Layout>
    );
}
