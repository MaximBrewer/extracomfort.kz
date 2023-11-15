import { router, usePage } from "@inertiajs/react"
import { Fragment, useEffect, useRef, useState } from "react"

const Item = ({ item, filter, setFilter }) => {

    const [opened, setOpened] = useState(filter[item.accounting_id] && filter[item.accounting_id].length)

    return <li className="filter-sidebar__item">
        <div className="filter-sidebar__item-title fw-600-16-19 cursor-pointer py-[9px] -mt-[9px] mb-0 px-[21px] -mx-[21px]" onClick={e => setOpened(prev => !prev)}>{item.title}</div>
        {opened ? <ul className="checkbox-grid max-h-[24rem] overflow-y-auto p-2">
            {item.values.map((value, vdx) => <li key={`${item.id}-${vdx}`}>
                <label htmlFor={`specification-${item.id}-${vdx}`} className="checkbox-grid__item">
                    <div className="checkbox-wrapper center">
                        <input
                            type="checkbox"
                            name={`specification-${item.id}`}
                            id={`specification-${item.id}-${vdx}`}
                            defaultChecked={filter[item.accounting_id] && filter[item.accounting_id].indexOf(value) > -1}
                            onChange={e => {
                                setFilter(prev => {
                                    const filter = { ...prev }
                                    filter[item.accounting_id] = filter[item.accounting_id] ? filter[item.accounting_id] : [];
                                    const valueIndex = filter[item.accounting_id].indexOf(value);
                                    if (valueIndex > -1) {
                                        filter[item.accounting_id].splice(valueIndex, 1)
                                    } else {
                                        filter[item.accounting_id].push(value)
                                    }
                                    if (!filter[item.accounting_id].length) delete (filter[item.accounting_id])
                                    return filter;
                                })
                            }}
                        />
                    </div>
                    <div className="checkbox-label-wrapper center">
                        <div className="checkbox-label">{value}</div>
                    </div>
                </label>
            </li>)}
        </ul> : ``}
    </li>
}

export default (props) => {

    const { specifications, options, ziggy, category = null } = usePage().props


    const [filter, setFilter] = useState(usePage().props.filter)

    const filterInizializedRef = useRef(false)

    const timeOutRef = useRef(0)

    useEffect(() => {
        if (filterInizializedRef.current) {
            clearTimeout(timeOutRef.current)
            let queryString = '?';
            for (let f in filter) queryString += '&' + f + '=' + filter[f].join(':::')
            timeOutRef.current = setTimeout(() => {
                router.visit(category.data.url + queryString, {
                    preserveScroll: true,
                    preserveState: true
                });
            }, 2000);
        }
        filterInizializedRef.current = true
    }, [filter])

    const clearTimeoutRef = (event) => {
        clearTimeout(timeOutRef.current)
    }

    const [show, setShow] = useState(false)

    useEffect(() => {
        specifications.data.map(item => {
            if (item.values.length) setShow(true)
        })
        document.addEventListener('inertia:start', clearTimeoutRef)
        return () => {
            clearTimeout(timeOutRef.current)
            document.removeEventListener('inertia:start', clearTimeoutRef)
        }
    }, [])

    return show ? <ul className="filter-sidebar catalogue__filter-sidebar fw-400-16-19">
        <li className="filter-sidebar__title center">Фильтр</li>
        <ul className="filter-sidebar__inner">
            {specifications.data.map((item) => <Fragment key={item.id}>
                {item.values.length ? <Item item={item} filter={filter} setFilter={setFilter} /> : ``}
            </Fragment>)}
            {options.data.map((item) => <Fragment key={item.id}>
                {item.values.length ? <Item item={item} filter={filter} setFilter={setFilter} /> : ``}
            </Fragment>)}
        </ul>
    </ul> : <></>
}