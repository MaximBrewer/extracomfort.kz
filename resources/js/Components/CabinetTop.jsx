import Breadcrumbs from "./Breadcrumbs"

export default (props) => {
    return <div className="flex items-start gap-7">
        <div className="hidden md:block-1/4"></div>
        <div className="w-3/4">
            <div className="catalogue-categories mt-0 mb-4">
                <div className="catalogue-categories__outer">
                    <div className="catalogue-categories__inner">
                        <Breadcrumbs {...props} cabinet={true} />
                    </div>
                </div>
            </div>
            <div className="registration-section__title catalogue-section__title text-left fw-700-45-55">{props.pagetitle}</div>
        </div>
    </div>
}