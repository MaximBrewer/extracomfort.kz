import { Link } from "@inertiajs/react";
import { useState } from "react";

export default (props) => {

    const { catalogMenuRef } = props

    const { categories } = window.appdata;

    const [category, setCategory] = useState(null)

    return <div className="container-outer" ref={catalogMenuRef}>
        <div className="catalogue-dropdown">
            <div className="flex flex-col lg:flex-row items-start justify-start gap-9">
                <div className="lg:w-1/3">
                    <h3 className="catalogue-title">Категории</h3>
                    <div className=" my-4">
                        <ul className="hidden lg:flex flex-col gap-4 border-r-2">
                            {categories.map((item, index) => <li key={index}>
                                <button
                                    className={`catalogue-category-name`}
                                    aria-selected={category && item.id == category.id}
                                    type="button"
                                    onClick={e => setCategory(item)}>{item.name}</button>
                            </li>)}
                        </ul>
                        <div className="lg:hidden">
                            {categories.map((item, index) => <div key={index} className="block mb-4">
                                <h2>
                                    <button
                                        type="button"
                                        className="fw-600-22-27 flex items-center text-left black justify-between w-full bg-transparent"
                                        onClick={e => setCategory(item)}>
                                        <span>{item.name}</span>
                                    </button>
                                </h2>
                                <div className={category && item.id == category.id ? `` : `hidden`}>
                                    <div className="p-3">
                                        <ul className="flex flex-col gap-4">
                                            {item.children.map((child, cdx) => <li key={cdx} className="">
                                                <Link href={child.url} className="catalogue-category-name hover:text-primary-500" >{child.name}</Link>
                                            </li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 hidden lg:block">
                    <h3 className="catalogue-subtitle">Подкатегории</h3>
                    {category ? <div className="my-4">
                        <ul className="flex flex-col gap-4">
                            {category.children.map((child, cdx) => <li key={cdx} className="">
                                <Link href={child.url} className="catalogue-category-name hover:text-primary-500" >{child.name}</Link>
                            </li>)}
                        </ul>
                    </div> : ``}
                </div>
            </div>
        </div>
    </div >
}
