
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default (props) => {

    const { pagetitle, product } = props
    const { images } = product.data

    // const [nav1, setNav1] = useState(null);
    // const [nav2, setNav2] = useState(null);
    // const slider1 = useRef(null);
    // const slider2 = useRef(null);

    // const settings = {
    //     asNavFor: nav2,
    //     dots: true,
    //     arrows: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     appendDots: dots => (
    //         <div
    //             style={{
    //                 position: `static`,
    //                 overflowX: `auto`
    //             }}
    //         >
    //             <ul style={{ margin: "0px 0 1rem 0", gap: `1rem`, display: `flex` }}> {dots} </ul>
    //         </div>
    //     ),
    //     customPaging: i => (
    //         <div
    //             style={{
    //                 width: "100px",
    //                 height: "100px",
    //                 overflow: `hidden`,
    //                 boxShadow: `0 0 8px #00000026`,
    //                 borderRadius: `20px`,
    //                 border: "transparent",
    //                 background: `#F1F5F8 url(${images[i].url}) no-repeat center/cover`
    //             }}
    //         />
    //     ),
    // };


    // useEffect(() => {
    //     setNav1(slider1.current);
    //     setNav2(slider2.current);
    // }, [slider1, slider2]);


    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return <div className="product-slider-wrapper">
        <div className="product-slider">
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]} className="product-slider"
            >
                {images.map((image, idx) => <SwiperSlide key={idx}>
                    <div className="p-4">
                        <div className="w-full h-full bg-no-repeat bg-center bg-contain pt-[100%]" style={{ backgroundImage: `url('${image.url}')` }} />
                    </div>
                </SwiperSlide>)}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-slider__nav block"
            >
                {images.map((image, idx) => <SwiperSlide key={idx}>
                    <div className="py-2">
                        <div className="w-full h-full rounded-xl bg-no-repeat bg-center bg-cover pt-[100%]" style={{ backgroundImage: `url('${image.url}')` }} />
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div >
    </div>
}