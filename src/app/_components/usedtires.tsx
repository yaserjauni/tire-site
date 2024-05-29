'use client'
import * as React from "react";
import { TypedObject } from "sanity";
import { client } from "../../../sanity/lib/client";
import { PostBody } from "./post-body";
import { UsedProducts } from "./homePage";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
import { StarRating } from "./star-rating";
import { FaFilter } from "react-icons/fa";


export function UsedTires({ data }: { data: UsedProducts[] }) {

    // console.log(data);
    const [filter, setFilter] = React.useState("Filter");

    const filteredData = filter === "Filter" ? data : data.filter(item => item.tireType === filter);
    return (
        <div>
            {data.length > 0 ? (
                <section>
                    <div className="bg-gray-900 py-16">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-row justify-between">
                                <h1 className="md:text-3xl text-lg mx-3 font-bold text-white mb-8">High Quality Used Tires in Kitchener-Waterloo-Cambridge</h1>
                                <div className="relative">
                                    <select
                                        className="text-lg md:text-xl font-bold rounded text-center border-2 border-purple-700 text-gray-600 h-12 w-[110px] md:w-[150px] pr-10 pl-2 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                    >
                                        <option value={"Filter"}>Filter</option>
                                        <option value={"All-Season"}>All Season</option>
                                        <option value={"Winter"}>Winter</option>
                                    </select>
                                    <FaFilter className="absolute top-4 right-5 text-gray-400 pointer-events-none" />
                                </div>
                            </div>

                            <div className="flex flex-wrap pl-auto items-center justify-center gap-6">
                                {filteredData.map((item, index) => (
                                    <div key={index} className="bg-slate-100 min-w-[190px] max-w-[190px] rounded-lg shadow-lg p-4">
                                        <div className="relative overflow-hidden">
                                            <img className="object-cover w-[150px] h-[150px]" src={item.URL} alt="Product" />
                                        </div>
                                        <h3 className="text-md font-semibold leading-6 text-gray-900 mt-2 truncate">{item.name || "Product Name"}</h3>
                                        <p className="text-gray-500 text-sm mt-1"><StarRating rating={item.rating || '0'} /></p>
                                        <div className="flex flex-row gap-3 items-center justify-between mt-2">
                                            <span className="text-gray-900 font-bold">${item.price || 0}</span>
                                            <Link href={"/contact-us"} className="bg-gray-900 items-end text-center text-white py-1 px-3 text-xs rounded-full font-bold hover:bg-gray-800">Contact now</Link>
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
