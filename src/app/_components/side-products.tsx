'use client';
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { StarRating } from "./star-rating";
import { Products } from "./homePage";

export function RelatedProducts({ data }: { data: Products[] }) {
    var settings = {
        dots: true,
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
                        <div className="relative overflow-hidden">
                            <img className="object-fill w-[150px] h-[150px] mx-auto rounded-lg" src={item.URL} alt="Product" />
                        </div>
                        <h3 className="text-md font-bold text-gray-900 mt-2 line-clamp-1">{item.name || "Product Name"}</h3>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-gray-500 text-sm">{item.spec || ''}</p>
                            <p className="text-gray-500 text-sm">{item.tireType || ''}</p>
                        </div>
                        <div className="mt-2">
                            <StarRating rating={item.rating || '0'} />
                        </div>
                        <div className="flex items-center justify-center mt-2">
                            <div className="flex flex-col items-center justify-between mt-2 space-y-2">
                                {item.buttons && item.buttons.length > 0 ? (

                                    item.buttons.map((button, btnIndex) => (
                                        <Link key={btnIndex} href={button.btnlink || "/contact-us"} className="bg-gray-900 text-white py-2 px-5 rounded-full justify-center items-center font-medium text-xs hover:bg-gray-800">
                                            {button.btnText ? button.btnText : "Contact Us"}
                                        </Link>
                                    ))
                                ) : (
                                    <Link href="/contact-us" className="bg-gray-900 text-white py-2 px-5 rounded-full font-medium text-xs hover:bg-gray-800">
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