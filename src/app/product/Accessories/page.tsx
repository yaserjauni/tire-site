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


    const query = `*[(_type == 'products') && category == 'Accessories'] {
        name,
        spec,
        link,
        rating,
        category,
        rimType,
        tireType,
        productImage,
    }`;
    const data = await client.fetch<Products[]>(query, {}, { cache: 'no-store' });
    return data;
}


export default async function AccPage() {


    const data = await getParaData();
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <section>
                <div className="bg-gray-900 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-white mb-6">Matching Products:</h2>
                        <div className="flex flex-wrap pl-auto justify-center gap-6">
                            {data.map((item, index) => (
                                <div key={index} className="bg-slate-100 min-w-[190px] max-w-[190px] rounded-lg shadow-lg p-4">
                                    <div className="relative overflow-hidden">
                                        <img className="object-contain w-[150px] h-[150px]" src={urlForImage(item.productImage) || ""} alt="Product" />
                                    </div>
                                    <h3 className="text-md font-semibold leading-6 text-gray-900 mt-2 truncate">{item.name || "Product Name"}</h3>
                                    <div className="flex items-center justify-between mt-1">
                                        <p className="text-gray-500 text-sm mt-1 truncate">{item.spec || ''}</p>
                                        <p className="text-gray-500 text-sm mt-1">{item.tireType || ''} </p>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-2"><StarRating rating={item.rating || '0'} /></p>
                                    <div className="flex items-center justify-between mt-2">
                                        {/* <span className="text-gray-900 font-bold text-lg">${item.price || 0}</span> */}
                                        <Link href={item.link || ""} className="bg-gray-900 text-white py-2 px-6  rounded-full font-bold hover:bg-gray-800">Buy now</Link>
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

