import { usePage } from "@inertiajs/react"
import parse from "html-react-parser"

export default () => {

    const { abouttext1, abouttext2 } = usePage().props;

    return <div className="pb-24 grid grid-cols-1 lg:grid-cols-2 gap-6 abouttext" >
        <div>{parse(abouttext1 ?? ``)}</div>
        <div>
            <div className="mb-4">{parse(abouttext2 ?? ``)}</div>
            <div className="flex gap-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                    <path d="M26.1002 25.2006V6.30059C26.1002 4.80929 24.8915 3.60059 23.4002 3.60059C21.9089 3.60059 20.7002 4.80929 20.7002 6.30059V24.3006" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M31.5001 26.1004V8.10039C31.5001 6.60909 30.2914 5.40039 28.8001 5.40039C27.3088 5.40039 26.1001 6.60909 26.1001 8.10039" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M30.6001 52.2004V50.4004C30.6001 46.8004 36.0001 44.1004 36.0001 36.9004V12.1504C36.0001 10.9075 34.993 9.90039 33.7501 9.90039C32.5072 9.90039 31.5001 10.9075 31.5001 12.1504" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M15.3001 52.2004V51.3004C15.3001 45.5908 10.126 44.3164 9.1558 37.4296C8.9164 35.7313 8.4205 34.0789 7.5736 32.5867L3.9817 26.2552C3.7315 25.8133 3.6001 25.294 3.6001 24.7504C3.6001 23.0107 5.0104 21.6004 6.7501 21.6004C7.7527 21.6004 8.6455 22.0684 9.2224 22.7983L13.6918 28.4557C13.8565 28.6654 14.113 28.8004 14.4001 28.8004C14.8969 28.8004 15.3001 28.3972 15.3001 27.9004V8.10039C15.3001 6.60909 16.5088 5.40039 18.0001 5.40039C19.4914 5.40039 20.7001 6.60909 20.7001 8.10039" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M5.54932 37.653C5.46022 37.0815 5.35582 36.6045 5.19922 36.123" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M11.6999 51.3005C11.6999 47.8175 7.48791 45.9347 5.94531 39.7607" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M36 13.8799L41.544 9.56798C42.0012 9.21248 42.5754 9.00098 43.2 9.00098C44.6913 9.00098 45.9 10.2097 45.9 11.701C45.9 12.5677 45.4914 13.3399 44.856 13.8331L36 20.7217" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M44.856 13.8333L46.9431 12.2682C47.2941 12.0063 47.9754 11.7012 48.6 11.7012C50.0913 11.7012 51.3 12.9099 51.3 14.4012C51.3 15.2679 50.8914 16.0401 50.256 16.5333L36 27.6222" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M46.6002 19.3765C46.9989 19.066 47.493 18.9004 48.0375 18.9004C49.3425 18.9004 50.4 19.9579 50.4 21.2629C50.4 22.0603 49.9833 22.7371 49.3992 23.1925L36 33.6442" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M45.0204 26.6082C45.4056 26.3076 45.8655 26.1006 46.392 26.1006C47.6115 26.1006 48.5997 27.0888 48.5997 28.3083C48.5997 29.0346 48.2316 29.6574 47.6997 30.0723L35.772 39.3765" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M11.6997 19.8006V8.10059" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M11.6997 6.30098V4.50098" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M44.1001 39.6006V43.2006" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M44.1001 46.8008V50.4008" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M49.4999 45.001H45.8999" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M42.2997 45.001H38.6997" stroke="#65BC54" strokeWidth="2.21143" strokeMiterlimit="10" strokeLinecap="round" />
                </svg>
                <div className="text-teal-500 font-bold">Пожелаем центру процветания и побольше оздоровленных людей. </div>
            </div>
        </div>
    </div>
}