'use client'
import * as React from "react";
import { Image } from "sanity";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { UsedProducts } from "./homePage";
import Link from "next/link";
import { StarRating } from "./star-rating";
import { FaFilter } from "react-icons/fa";


export function UsedRims({ data }: { data: UsedProducts[] }) {
    const [filter, setFilter] = React.useState("Filter");

    const filteredData = filter === "Filter" ? data : data.filter(item => item.rimType === filter);

    return (
        <div>
            {data.length > 0 ? (
                <section>
                    <div className="bg-gray-900 py-16">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-row justify-between">
                                <h2 className="text-3xl font-bold text-white mb-8">Used Rims in Stock</h2>
                                <div className="relative">
                                    <select
                                        className="text-lg md:text-xl font-bold rounded text-center border-2 border-purple-700 text-gray-600 h-12 w-25 pr-10 pl-2 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                    >
                                        <option value={"Filter"}>Filter</option>
                                        <option value={"Steel"}>Steel</option>
                                        <option value={"Alloy"}>Alloy</option>
                                    </select>
                                    <FaFilter className="absolute top-4 right-3 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center md:justify-normal justify-center gap-6">
                                {filteredData.map((item, index) => (
                                    <div key={index} className="bg-slate-100 w-[300px] rounded-lg shadow-lg p-8">
                                        <div className="relative overflow-hidden">
                                            <img className="object-contain w-[250px] h-[250px]" src={item.URL} alt="Product" />
                                        </div>
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
