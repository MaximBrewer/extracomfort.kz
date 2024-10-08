
import { useLayout } from "@/Contexts/LayoutContext";
import parse from "html-react-parser"
import { useState } from "react";

export default (props) => {

    const { sizes = {} } = props

    // const [size, setSize] = useState(sizes.length ? sizes[0] : null)

    const { setModal } = useLayout();

    return <div className="w-[20rem] lg:w-[24rem] xl:w-[40rem] relative bg-white rounded-2xl py-6 px-3 lg:px-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-4 lg:w-8 h-4 lg:h-8 absolute right-4 top-4 lg:-right-12 lg:-top-12 text-black opacity-50 lg:text-white" onClick={e => setModal(null)} viewBox="0 0 30 30" fill="none">
            <path d="M18.3041 15L29.5207 3.78293C29.8293 3.47415 29.9995 3.0622 30 2.62293C30 2.18342 29.8298 1.77098 29.5207 1.46268L28.5378 0.480001C28.2288 0.170489 27.8168 0.000976562 27.3771 0.000976562C26.938 0.000976562 26.5261 0.170489 26.2171 0.480001L15.0005 11.6963L3.78341 0.480001C3.47488 0.170489 3.06268 0.000976562 2.62317 0.000976562C2.18415 0.000976562 1.77195 0.170489 1.46341 0.480001L0.48 1.46268C-0.16 2.10268 -0.16 3.14366 0.48 3.78293L11.6968 15L0.48 26.2166C0.17122 26.5259 0.00121951 26.9378 0.00121951 27.3771C0.00121951 27.8163 0.17122 28.2283 0.48 28.5373L1.46317 29.52C1.77171 29.8293 2.18415 29.999 2.62293 29.999C3.06244 29.999 3.47463 29.8293 3.78317 29.52L15.0002 18.3034L26.2168 29.52C26.5259 29.8293 26.9378 29.999 27.3768 29.999H27.3773C27.8166 29.999 28.2285 29.8293 28.5376 29.52L29.5205 28.5373C29.829 28.2285 29.9993 27.8163 29.9993 27.3771C29.9993 26.9378 29.829 26.5259 29.5205 26.2168L18.3041 15Z" fill="currentColor" />
        </svg>
        {/* <div className="border-b py-3 font-bold">Таблица размеров</div> */}
        {/* <div className="my-4 border-b">
            <ul className="flex flex-wrap gap-y-2">
                {sizes.map((sz, sdx) => <li key={sdx}>
                    <a href="#" onClick={e => setSize(sz)} className={`py-1.5 px-2 block bg-white -mb-px text-xs`} style={size.code === sz.code ? {
                        borderBottom: `1px solid transparent`,
                        borderTop: `1px solid #77DAE9`,
                        borderLeft: `1px solid #E5E7EB`,
                        borderRight: `1px solid #E5E7EB`,
                    } : {
                        borderBottom: `1px solid #E5E7EB`,
                        borderTop: `1px solid transparent`,
                        borderLeft: `1px solid transparent`,
                        borderRight: `1px solid transparent`,
                    }}>{sz.title}</a>
                </li>)}
            </ul>
        </div> */}

        <div className="overflow-x-auto my-4 w-full">
            {sizes && sizes.html ? <div className="prose">{parse(sizes.html ?? ``)}</div> : ``}
        </div>
        <div className="overflow-x-auto my-4 w-full">
            {sizes && sizes.image ? <img src={sizes.image} alt="" className="w-full" /> : ``}
        </div>
    </div>
}