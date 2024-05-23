"use client"
import * as React from "react";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
import { getData, Products, TopProducts } from "./homePage";
import { StarRating } from "./star-rating";
import { Console } from "console";
import Slider from "react-slick";

var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,

    responsive: [
        {
            breakpoint: 1400,
            settings: {
                dots: false,
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                initialSlide: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: false,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                dots: false,
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                initialSlide: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: false,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                dots: false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: false,
            }
        },
        {
            breakpoint: 992,
            settings: {
                dots: false,
                arrows: false,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                dots: false,
                arrows: false,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: false,
            }
        },
        {
            breakpoint: 375,
            settings: {
                dots: false,
                arrows: false,
                infinite: true,
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

export function Tires({ data }: { data: TopProducts[] }) {


    return (
        <div>
            <div className=" pb-3 md:px-10  lg:mx-20">
                <Slider {...settings}>
                    {data[0].topProducts.map((item, index) => (
                        <div key={index} className="bg-slate-100 min-w-[195px] sm:min-w-[180px] max-w-[195px] min-h-[400px]  justify-center rounded-lg shadow-lg p-4 px-6">
                            <div className="relative overflow-hidden">
                                <img className="object-contain w-[150px] h-[150px] rounded-lg" src={item.URL} alt="Product" />
                            </div>
                            <h3 className="text-md font-bold text-gray-900 mt-2 line-clamp-1">{item.name || "Product Name"}</h3>
                            <div className="flex items-center justify-between mt-2">
                                <p className="text-gray-500 text-sm mt-2 line-clamp-2 pr-4">{item.spec || ''} </p>
                                <p className="text-gray-500 text-sm mt-2">{item.tireType || ''} </p>
                            </div>
                            <p className="text-gray-500 text-sm mt-2"><StarRating rating={item.rating || '0'} /></p>
                            <div className="flex place-items-center justify-between absolute bottom-3  mt-2">
                                <Link href={item.link || ''} className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Buy now</Link>
                            </div>
                        </div>
                    ))}
                </Slider >
            </div>
        </div>
    );
}

export function Rims({ data }: { data: TopProducts[] }) {
    return (
        <div>
            <header className="flex flex-row justify-between mt-1 border-t bg-violet-950 z-5 mb-5">
                <div className="items-start self-start pt-4 pr-4 pb-4 pl-4 md:pl-16  md:text-2xl text-xl font-semibold  text-white ">
                    New Rims | Top Picks
                </div>
                <Link className="flex justify-center" href={'/product/Rims'}>
                    <div className="items-start self-end pt-4 pr-4 pb-4 md:pr-16 md:text-2xl text-xl  font-semibold underline text-white ">
                        Show All
                    </div>
                </Link>
            </header>
            <div className=" pb-3 md:px-10  lg:mx-20">
                <Slider {...settings}>
                    {data[0].topProducts.map((item, index) => (
                        <div key={index} className="bg-slate-100 min-w-[195px] sm:min-w-[180px] max-w-[195px] min-h-[400px]  justify-center rounded-lg shadow-lg p-4 px-6">
                            <div className="relative overflow-hidden">
                                <img className="object-contain w-[150px] h-[150px] rounded-lg" src={item.URL} alt="Product" />
                            </div>
                            <h3 className="text-md font-bold text-gray-900 mt-2 line-clamp-2">{item.name || "Product Name"}</h3>
                            <div className="flex items-center justify-between mt-2">
                                <p className="text-gray-500 text-sm mt-2 line-clamp-2 pr-4">{item.spec || ''} </p>
                                <p className="text-gray-500 text-sm mt-2">{item.rimType || ''} </p>
                            </div>
                            <p className="text-gray-500 text-sm mt-2"><StarRating rating={item.rating || '0'} /></p>
                            <div className="flex items-center justify-between absolute bottom-3 mt-2">
                                <Link href={item.link || ""} className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Buy now</Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export function Accessories({ data }: { data: TopProducts[] }) {

    return (
        <div>
            <header className="flex flex-row justify-between mt-1 border-t bg-violet-950 z-5 mb-5">
                <div className="items-start self-start pt-4 pr-4 pb-4 pl-4 md:pl-16 md:text-2xl text-xl font-semibold  text-white ">
                    New Accessories | Top Picks
                </div>
                <Link className="flex justify-center" href={'/product/Accessories'}>
                    <div className="items-start self-end pt-4 pr-4 pb-4 md:pr-16 md:text-2xl text-xl  font-semibold underline text-white ">
                        Show All
                    </div>
                </Link>
            </header>
            <div className=" pb-3 md:px-10  lg:mx-20">
                <Slider {...settings}>
                    {data[0].topProducts.map((item, index) => (
                        <div key={index} className="bg-slate-100 min-w-[195px] sm:min-w-[180px] max-w-[195px] min-h-[400px]  justify-center rounded-lg shadow-lg p-4 px-6">
                            <div className="relative overflow-hidden">
                                <img className="object-contain w-[150px] h-[150px] rounded-lg" src={item.URL} alt="Product" />
                            </div>
                            <h3 className="text-md font-bold text-gray-900 mt-2  line-clamp-2">{item.name || "Product Name"}</h3>
                            <div className="flex items-center justify-between mt-2">
                                <p className="text-gray-500 text-sm mt-2 line-clamp-2">{item.spec || ''} </p>
                            </div>
                            <p className="text-gray-500 text-sm mt-2"><StarRating rating={item.rating || '0'} /></p>
                            <div className="flex items-center justify-between mt-2 absolute bottom-3">
                                <Link href={item.link || ""} className="bg-gray-900 text-white py-2 px-4  rounded-full font-bold hover:bg-gray-800">Buy now</Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}


