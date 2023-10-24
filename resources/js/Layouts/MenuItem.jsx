import ChevronDown from "@/Icons/ChevronDown"
import { Link } from "@inertiajs/react"
import { useEffect, useRef, useState } from "react"

export default ({ item, mobile = false }) => {

    const [open, setOpen] = useState(false)

    const parentRef = useRef(null)

    const checkClick = (e) => {
        parentRef.current && (parentRef.current.contains(e.target) || setOpen(false))
    }

    useEffect(() => {
        document.addEventListener('click', checkClick)
        return () => {
            document.removeEventListener('click', checkClick)
        }
    })

    return <li className={`navbar-list__item ${mobile ? `` : `center`}`} ref={parentRef}>
        {item.children.length ? <>
            <button className="text-white text-center inline-flex items-center" type="button" onClick={e => setOpen(prev => !prev)}>
                <span>О нас</span>
                <ChevronDown className="w-2.5 h-2.5 ml-2.5" />
            </button>
            {open ? <div className="about-dropdown block">
                <ul>
                    {item.children.map((child, index) => <li key={index} >
                        <Link href={child.link}>{child.title}</Link>
                    </li>)}
                </ul>
            </div> : ``}
        </> : <Link href={item.link}>{item.title}</Link>}
    </li>
}