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
import Image from "next/image";


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
                                    <div key={index} className="bg-slate-100 min-w-[190px] max-w-[190px] h-auto  rounded-lg shadow-lg p-4 transition duration-200 hover:scale-105 ">
                                        <div className="relative overflow-hidden">
                                            <Image className="object-cover aspect-square scale-100 transition duration-200 hover:scale-150" width={1200} height={1200} src={item.URL} alt="Product" />
                                        </div>
                                        <h3 className="text-md font-semibold leading-6  mt-2 line-clamp-2 text-wrap text-gray-900 hover:text-red-600">{item.name || "Product Name"}</h3>
                                        <p className="text-gray-500 text-sm mt-1"><StarRating rating={item.rating || '0'} /></p>
                                        <div className="flex flex-row gap-2 items-center justify-between mt-2">
                                            <span className="text-gray-900 font-bold">${item.price || 0}</span>
                                            <Link href={"/contact-us"} className="bg-gradient-to-r from-red-500 to-[#ca0202] items-end text-center text-white py-1 px-2 text-xs rounded-full font-semibold">Contact now</Link>
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
