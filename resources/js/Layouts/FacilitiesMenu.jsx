import { Link } from "@inertiajs/react";
import { useState } from "react";

export default (props) => {

    const { facilitiesMenuRef } = props

    const { facilities } = window.appdata;

    const [facility, setFacility] = useState(null)

    return <div className="container-outer" ref={facilitiesMenuRef}>
        <div className="catalogue-dropdown max-w-lg">
            <div className="flex flex-col lg:flex-row items-start justify-start gap-9">
                <div className="">
                    <div className=" my-4">
                        <ul className="hidden lg:flex flex-col gap-4">
                            {facilities.map((item, index) => <li key={index}>
                                <Link
                                    className={`catalogue-category-name text-left`}
                                    aria-selected={facility && item.id == facility.id}
                                    type="button"
                                    onClick={e => {
                                        if ((!facility || item.id !== facility.id) && item.children.length) {
                                            e.preventDefault()
                                            setFacility(item)
                                        }
                                    }}
                                    href={route('facility', {
                                        facility: item.slug
                                    })}
                                >
                                    {item.title}
                                </Link>
                            </li>)}
                        </ul>
                        <div className="lg:hidden">
                            {facilities.map((item, index) => <div key={index} className="block mb-4">
                                <h2>
                                    <Link
                                        className={`fw-600-22-27 flex items-center text-left black justify-between w-full bg-transparent`}
                                        aria-selected={facility && item.id == facility.id}
                                        type="button"
                                        onClick={e => {
                                            if ((!facility || item.id !== facility.id) && item.children.length) {
                                                e.preventDefault()
                                                setFacility(item)
                                            }
                                        }}
                                        href={route('facility', {
                                            facility: item.slug
                                        })}
                                    >
                                        {item.title}
                                    </Link>
                                </h2>
                                <div className={facility && item.id == facility.id ? `` : `hidden`}>
                                    <div className="p-3">
                                        <ul className="flex flex-col gap-4">
                                            {item.children.map((child, cdx) => <li key={cdx} className="">
                                                <Link href={route('facility', {
                                                    facility: item.slug,
                                                    subfacility: child.slug
                                                })} className="catalogue-category-name hover:text-primary-500" >{child.title}</Link>
                                            </li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
                {/* <div className="lg:w-2/3 hidden lg:block">
                    {facility ? <div className="my-4">
                        <ul className="flex flex-col gap-4">
                            {facility.children.map((child, cdx) => <li key={cdx} className="">
                                <Link href={route('facility', {
                                    facility: facility.slug,
                                    subfacility: child.slug
                                })} className="catalogue-category-name hover:text-primary-500" >{child.title}</Link>
                            </li>)}
                        </ul>
                    </div> : ``}
                </div> */}
            </div>
        </div>
    </div>
}
