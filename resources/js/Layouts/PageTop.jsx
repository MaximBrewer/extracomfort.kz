import { Link } from "@inertiajs/react";
import { Fragment } from "react"

export default (props) => {

    const { breadcrumbs } = props;

    return <div className="catalogue-categories">
        <div className="container-outer">
            <div className="catalogue-categories__outer">
                <div className="catalogue-categories__inner">
                    <div className="catalogue-categories-title-section">
                        <div className="catalogue-categories-title-item fw-600-14-17">
                            <p>Стельки</p>
                        </div>
                        <div className="catalogue-categories-title-item fw-600-14-17">
                            <p>Корсеты</p>
                        </div>
                        <div className="catalogue-categories-title-item fw-600-14-17">
                            <p>Обувь</p>
                        </div>
                    </div>
                    <div className="catalogue-breadcrumb-wrapper fw-400-18-22">
                        {breadcrumbs.map((crumb, cdx) => <Fragment key={cdx}>
                            <div className={`catalogue-breadcrumb-item${cdx < breadcrumbs.length - 1 ? `` : ` active`}`}>
                                {crumb.href ? <Link href={crumb.href}><p>{crumb.title}</p></Link> : <span><p>{crumb.title}</p></span>}
                            </div>
                            {cdx < breadcrumbs.length - 1 ? <div className="catalogue-breadcrumb-dot-wrapper center">
                                <div className="catalogue-breadcrumb-dot"></div>
                            </div> : ``}
                        </Fragment>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
}