"use client"
import * as React from "react";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
import { getData, Products, TopProducts } from "./homePage";
import { StarRating } from "./star-rating";
import { Console } from "console";
import Slider from "react-slick";
import { RiDraggable } from "react-icons/ri";

var settings = {
    arrows: true,
    easing: 'easeOutQuad',
    draggable: true,
    centerMode: true,
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2400,
    pauseOnHover: false,

    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {

                slidesToShow: 5,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 1024,
            settings: {

                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 1,

            }
        },
        {
            breakpoint: 768,
            settings: {

                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 1,

            }
        },
        {
            breakpoint: 576,
            settings: {

                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,

            }
        },
        {
            breakpoint: 375,
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
        }
    ]
};

export function Tires({ data }: { data: TopProducts[] }) {
    return (
        <div>
            {data.map((productCategory, index) => (
                <div key={index}>
                    <header className="flex flex-row justify-between mt-1 border-t bg-violet-950 z-5 mb-5">
                        <div className="items-start self-start pt-4 pr-4 pb-4 pl-4 md:pl-16  md:text-2xl text-xl font-semibold  text-white ">
                            {productCategory.title || "No Title Found"}
                        </div>
                        <Link className="flex justify-center" href={`/product/${productCategory.category}` || "/product/Tires"}>
                            <div className="items-start self-end pt-4 pr-4 pb-4 md:pr-16 md:text-2xl text-xl  font-semibold underline text-white ">
                                Show All
                            </div>
                        </Link>
                    </header>
                    <div className=" pb-3 md:px-10 lg:mx-10">
                        <Slider {...settings}>
                            {productCategory.topProducts.map((item, index) => (
                                <div key={index} className="bg-slate-100  min-w-[155px]  max-w-[175px]  min-h-[500px] max-h-auto justify-center rounded-lg shadow-lg  md:py-4 py-4 px-3 ">
                                    <div className="flex relative overflow-hidden justify-center">
                                        <img className="object-contain w-[175px] h-[175px] sm:w-[130px] sm:h-[130px] rounded-lg" src={item.URL} alt="Product" />
                                    </div>
                                    <h3 className="text-md font-bold text-gray-900 mt-2 lg:line-clamp-3 line-clamp-2">{item.name || "Product Name"}</h3>
                                    <div className="flex items-center justify-between mt-2">
                                        <p className="text-gray-500 text-sm mt-1 lg:line-clamp-3 line-clamp-2 pr-4">{item.spec || ''} </p>
                                        <p className="text-gray-500 text-sm mt-1">{item.tireType || item.rimType || ''} </p>
                                    </div>
                                    <p className="text-gray-500 absolute top-72  text-sm "><StarRating rating={item.rating || '0'} /></p>
                                    <div className="flex flex-col items-center justify-center absolute top-72 mt-5 space-y-2">
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
                                </div>
                            ))}
                        </Slider >
                    </div>
                </div>
            ))}
        </div>

    );
}

// export function Rims({ data }: { data: TopProducts[] }) {
//     return (
//         <div>
//             <header className="flex flex-row justify-between mt-1 border-t bg-violet-950 z-5 mb-5">
//                 <div className="items-start self-start pt-4 pr-4 pb-4 pl-4 md:pl-16  md:text-2xl text-xl font-semibold  text-white ">
//                     New Rims | Top Picks
//                 </div>
//                 <Link className="flex justify-center" href={'/product/Rims'}>
//                     <div className="items-start self-end pt-4 pr-4 pb-4 md:pr-16 md:text-2xl text-xl  font-semibold underline text-white ">
//                         Show All
//                     </div>
//                 </Link>
//             </header>
//             <div className=" pb-3 md:px-10  lg:mx-10">
//                 <Slider {...settings}>
//                     {data[0].topProducts.map((item, index) => (
//                         <div key={index} className="bg-slate-100  min-w-[155px]  max-w-[175px]  min-h-[415px] max-h-[430px] justify-center rounded-lg shadow-lg  md:py-4 p-4 ">
//                             <div className="relative overflow-hidden">
//                                 <img className="object-contain w-[175px] h-[175px] sm:w-[130px] sm:h-[130px] rounded-lg" src={item.URL} alt="Product" />
//                             </div>
//                             <h3 className="text-md font-bold text-gray-900 mt-2 lg:line-clamp-3 line-clamp-2">{item.name || "Product Name"}</h3>
//                             <div className="flex items-center justify-between mt-2">
//                                 <p className="text-gray-500 text-sm mt-2 lg:line-clamp-3 line-clamp-2 pr-4">{item.spec || ''} </p>
//                                 <p className="text-gray-500 text-sm mt-2">{item.rimType || ''} </p>
//                             </div>
//                             <p className="text-gray-500 text-sm absolute bottom-14 mt-2"><StarRating rating={item.rating || '0'} /></p>
//                             <div className="flex items-center justify-between absolute bottom-3 mt-2">
//                                 <Link href={item.link || "/contact-us"} className="bg-gray-900 text-white py-2 px-5 rounded-full font-bold text-xs hover:bg-gray-800">{item.link ? (item.btn ? item.btn : "Buy Now") : "Contact Us"}</Link>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// }

// export function Accessories({ data }: { data: TopProducts[] }) {

//     return (
//         <div>
//             <header className="flex flex-row justify-between mt-1 border-t bg-violet-950 z-5 mb-5">
//                 <div className="items-start self-start pt-4 pr-4 pb-4 pl-4 md:pl-16 md:text-2xl text-xl font-semibold  text-white ">
//                     New Accessories | Top Picks
//                 </div>
//                 <Link className="flex justify-center" href={'/product/Accessories'}>
//                     <div className="items-start self-end pt-4 pr-4 pb-4 md:pr-16 md:text-2xl text-xl  font-semibold underline text-white ">
//                         Show All
//                     </div>
//                 </Link>
//             </header>
//             <div className=" pb-3 md:px-10  lg:mx-10">
//                 <Slider {...settings}>
//                     {data[0].topProducts.map((item, index) => (
//                         <div key={index} className="bg-slate-100  min-w-[155px]  max-w-[175px]  min-h-[415px] max-h-[430px] justify-center rounded-lg shadow-lg  md:py-4 p-4 ">
//                             <div className="relative overflow-hidden">
//                                 <img className="object-contain w-[175px] h-[175px] sm:w-[130px] sm:h-[130px] rounded-lg" src={item.URL} alt="Product" />
//                             </div>
//                             <h3 className="text-md font-bold text-gray-900 mt-2  lg:line-clamp-3 line-clamp-2">{item.name || "Product Name"}</h3>
//                             <div className="flex items-center justify-between mt-2">
//                                 <p className="text-gray-500 text-sm mt-2 lg:line-clamp-3 line-clamp-2">{item.spec || ''} </p>
//                             </div>
//                             <p className="text-gray-500 text-sm absolute bottom-14 mt-2"><StarRating rating={item.rating || '0'} /></p>
//                             <div className="flex items-center justify-between mt-2 absolute bottom-3">
//                                 <Link href={item.link || "/contact-us"} className="bg-gray-900 text-white py-2 px-5 rounded-full font-bold text-xs hover:bg-gray-800">{item.link ? (item.btn ? item.btn : "Buy Now") : "Contact Us"}</Link>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// }


