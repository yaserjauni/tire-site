"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { urlForImage } from "../../../sanity/lib/image";

interface SlideCardProps {
    imageUrls: string[];
}

export const SlideCard: React.FC<SlideCardProps> = ({ imageUrls }) => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 700,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 700,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 700,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: false,
                }
            }
        ]
    };




    return (

        <Slider {...settings}>
            {imageUrls.map((imageUrl, index) => (
                <div key={index} >
                    <img
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        className={`w-[500px] aspect-square bg-white object-cover rounded-2xl`}
                    />
                </div>
            ))}
        </Slider>

    );
};

export default SlideCard;
