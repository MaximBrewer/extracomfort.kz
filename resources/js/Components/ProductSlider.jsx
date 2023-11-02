
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

export default (props) => {

    const { pagetitle, product } = props
    const { images } = product.data

    console.log(images)

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    const settings = {
        asNavFor: nav2,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const thumbsettings = {
        asNavFor: nav1,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    return <div className="product-slider-wrapper">
        <div className="product-slider">
            <Slider {...settings} className="product-slider" ref={slider1}>
                {images.map((image, idx) => <div key={idx} className="slick-slide p-4">
                    <div className="w-full h-full bg-no-repeat bg-center bg-contain pt-[100%]" style={{ backgroundImage: `url('${image.url}')` }} />
                </div>)}
            </Slider>
            {images.length > 1 ? <Slider {...thumbsettings} className="product-slider__nav block" ref={slider2}>
                {images.map((image, idx) => <div key={idx} className="slick-slide">
                    <div className="product-slider__nav-item mx-auto">
                        <div className="w-full h-full bg-no-repeat bg-center bg-contain pt-[100%]" style={{ backgroundImage: `url('${image.url}')` }} />
                    </div>
                </div>)}
            </Slider> : ``}
        </div >
    </div>
}