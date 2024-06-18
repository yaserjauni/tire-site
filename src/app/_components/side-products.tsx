'use client';
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { StarRating } from "./star-rating";
import { Products } from "./homePage";

export function RelatedProducts({ data }: { data: Products[] }) {
    var settings = {
        arrows: false,
        easing: 'easeOutQuad',
        draggable: true,
        centerMode: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    vertical: true,
                    verticalSwiping: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false,
                    autoplaySpeed: 2000,
                }
            }
        ]
    };

    return (
        <section>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="bg-slate-100 my-4 rounded-lg shadow-lg p-4">
                        <div className="flex relative overflow-hidden justify-center">
                            <img className="object-contain w-[175px] h-[175px] sm:w-[130px] sm:h-[130px] rounded-lg transition duration-200 hover:scale-150" src={item.URL} alt="Product" />
                        </div>
                        <h3 className="text-base font-bold text-gray-900 hover:text-red-600 mt-2 lg:line-clamp-3 line-clamp-2">{item.name || "Product Name"}</h3>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-gray-500 text-sm">{item.spec || ''}</p>
                            <p className="text-gray-500 text-sm">{item.tireType || ''}</p>
                        </div>
                        <div className="mt-2">
                            {/* <StarRating rating={item.rating || '0'} /> */}
                        </div>
                        <div className="flex items-center justify-center mt-2">
                            <div className="flex flex-col items-center justify-between mt-2 space-y-2">
                                {item.buttons && item.buttons.length > 0 ? (
                                    item.buttons.map((button, btnIndex) => (
                                        <Link key={btnIndex} href={button.btnlink || "/contact-us"} className="z-10  bg-gradient-to-r from-amber-500 text-center text-nowrap to-[#ff6a00] text-white font-mono uppercase text-xs px-4 py-2 rounded-2xl transition duration-200 hover:scale-110 mr-1 mb-1">
                                            {button.btnText ? button.btnText : "Contact Us"}
                                        </Link>
                                    ))
                                ) : (
                                    <Link href="/contact-us" className=" bg-gradient-to-r from-amber-500  to-[#ff6a00] text-white font-mono uppercase text-xs px-4 py-2 rounded-2xl transition duration-200 hover:scale-110  mr-1 mb-1">
                                        Contact Us
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section >
    );
}