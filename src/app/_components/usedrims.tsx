import * as React from "react";
import { Image } from "sanity";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { UsedProducts } from "./homePage";
import Link from "next/link";
import { StarRating } from "./star-rating";

export async function getRimsData(): Promise<UsedProducts[]> {

    const query = `*[_type == 'used-products' && type == 'used-rims']{
        name,
        manufacturer,
        rating,
        price,
        type,
        rimType,
        tireType,
        productImage,
    }`;
    const data = await client.fetch<UsedProducts[]>(query, {}, { cache: 'no-cache' });
    return data;
}

export async function UsedRims() {
    const data = await getRimsData();
    // console.log(data);

    return (
        <div>
            {data.length > 0 ? (
                <section>
                    <div className="bg-gray-900 py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-bold text-white mb-8">Used Tires in Stock</h2>
                            <div className="flex flex-wrap  gap-6">
                                {data.map((item, index) => (
                                    <div key={index} className="bg-slate-100 w-[300px] rounded-lg shadow-lg p-8">
                                        <div className="relative overflow-hidden">
                                            <img className="object-fill w-[250px] h-[250px]" src={urlForImage(item.productImage)} alt="Product" />
                                        </div>
                                        <p className="text-gray-500 text-sm mt-2 justify-center text-center">{item.manufacturer || 'Manufacturer'}</p>
                                        <h3 className="text-xl font-bold text-gray-900 mt-4 truncate">{item.name || "Product Name"}</h3>
                                        <p className="text-gray-500 text-sm mt-2"><StarRating rating={item.rating || '0'} /></p>
                                        <div className="flex items-center justify-between mt-4">
                                            <span className="text-gray-900 font-bold text-lg">${item.price || 0}</span>
                                            <Link href={"/contact-us"} className="bg-gray-900 text-white py-2 px-3 rounded-full font-bold hover:bg-gray-800">Contact now</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <div className="items-start self-stretch pt-4 pr-4 pb-4 pl-16 text-4xl font-black  min-h-screen text-red-600 leading-[65px]">
                    No matching Results found
                </div>
            )}
        </div>
    );
}
