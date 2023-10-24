import { usePage } from "@inertiajs/react"
import Breadcrumbs from "../Breadcrumbs"

export default () => {

    const props = usePage().props

    return <div className="catalogue-categories">
        <div className="container-outer">
            <div className="catalogue-categories__outer">
                <div className="catalogue-categories__inner">
                    <Breadcrumbs {...props} />
                </div>
            </div>
        </div>
    </div>
}