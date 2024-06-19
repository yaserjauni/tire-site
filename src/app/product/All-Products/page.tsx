import * as React from "react";

import { SearchResult } from "@/app/_components/product-list";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import { Products } from "@/app/_components/homePage";
import { urlForImage } from "../../../../sanity/lib/image";
import { StarRating } from "@/app/_components/star-rating";
import Link from "next/link";
import { client } from "../../../../sanity/lib/client";



async function getParaData(): Promise<Products[]> {


    const query = `*[_type == 'products'] {
        name,
        spec,
        link,
        buttons,
        rating,
        category,
        rimType,
        tireType,
        productImage,
    }`;
    const data = await client.fetch<Products[]>(query, {}, { cache: 'no-cache' });
    return data;
}


export default async function TirePage() {


    const data = await getParaData();
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <section>
                <div className="bg-gray-900 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-white mb-6">All Products:</h2>
                        <div className="flex flex-wrap pl-auto justify-center gap-6">
                            {data.map((item, index) => (
                                <div key={index} className="bg-slate-100 min-w-[180px] max-w-[180px] rounded-lg shadow-lg p-4">
                                    <div className="relative overflow-hidden">
                                        <img className="object-contain w-[175px] h-[175px] sm:w-[130px] sm:h-[130px] rounded-lg transition duration-200 hover:scale-150" src={urlForImage(item.productImage) || ""} alt="Product" />
                                    </div>
                                    <h3 className="text-base font-semibold leading-6 text-gray-900 hover:text-red-600 mt-2 line-clamp-2">{item.name || "Product Name"}</h3>
                                    <div className="flex items-center justify-between mt-1">
                                        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{item.spec || ''}</p>
                                        <p className="text-gray-500 text-sm mt-1">{item.tireType || ''} </p>
                                    </div>
                                    {/* <p className="text-gray-500 text-sm mt-2"><StarRating rating={item.rating || '0'} /></p> */}
                                    <div className="flex flex-col items-center justify-between mt-2">
                                        {/* <span className="text-gray-900 font-bold text-lg">${item.price || 0}</span> */}
                                        {item.buttons && item.buttons.length > 0 ? (
                                            item.buttons.map((button, btnIndex) => (
                                                <Link key={btnIndex} href={button.btnlink || "/contact-us"} className="z-10  bg-gradient-to-r  from-red-500 to-[#ca0202] text-center text-nowrap  text-white font-mono uppercase text-xs px-4 py-2 rounded-2xl transition duration-200 hover:scale-110 mr-1 mb-1">
                                                    {button.btnText ? button.btnText : "Contact Us"}
                                                </Link>
                                            ))
                                        ) : (
                                            <Link href="/contact-us" className=" bg-gradient-to-r  from-red-500 to-[#ca0202] text-white font-mono uppercase text-xs px-4 py-2 rounded-2xl transition duration-200 hover:scale-110  mr-1 mb-1">
                                                Contact Us
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

