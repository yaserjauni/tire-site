
import * as React from "react";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
import { getData } from "./homePage";
export interface Products {
    manufacturer: string;
    name: string;
    spec: string;
    link: string;
    rating: string;
    cat: string[];

    productImage: {
        asset: {
            _ref: string;
            _type: "reference";
        };
    };
}


export async function Tires({ data }: { data: Products[] }) {

    return (
        <div>
            <header className="flex flex-row justify-between">
                <div className="items-start self-start pt-8 pr-4 pb-4 pl-4 md:pl-16  md:text-3xl text-2xl font-semibold text-red-600 ">
                    New Tires | Top Picks
                </div>
                <Link className="flex justify-center" href={'/product/Tire'}>
                    <div className="items-start self-end pt-4 pr-4 pb-4 pr-4 md:pr-16 md:text-3xl text-2xl font-semibold underline text-red-600 ">
                        Show All
                    </div>
                </Link>
            </header>
            <div className="flex gap-5 justify-center pb-9 pl-5 mt-11 max-w-full flex-wrap max-md:mt-10">
                {data.map((product: Products, index: number) => (
                    <div key={index} className="flex flex-col py-6 pr-6 pl-6 bg-white rounded-md border-2 border-solid border-zinc-200 hover:shadow-xl shadow-md max-md:px-5">
                        <div className="flex justify-center items-center px-9 pb-3  max-md:px-5">
                            <img
                                loading="lazy"
                                srcSet={urlForImage(product.productImage)}
                                className="aspect-[0.80] w-[200px] max-h-[250px]"
                            />
                        </div>
                        <div className="flex flex-col items-center pb-6 mt-5 w-[300px] text-sm font-semibold leading-6 text-sky-900 bg-white">
                            <div className="font-semibold tracking-wide text-center">{product.manufacturer}</div>
                            <div className="mt-4 text-lg tracking-wide text-center">
                                {product.name} -<br />
                                {product.spec}
                            </div>
                            <div className="flex gap-2.5 self-stretch mt-1.5 text-neutral-600">
                                <div className="justify-center px-3.5 py-2 bg-white rounded-md border border-gray-100 border-solid">
                                    {product.cat.includes('Winter') ? 'Winter' : 'All Season' || "-"}
                                </div>
                                <div className="justify-center px-3.5 py-2 whitespace-nowrap bg-white rounded-md border border-gray-100 border-solid">
                                    {product.rating}
                                </div>
                            </div>
                            <div className="justify-center items-center self-stretch px-16 py-5 mt-5 text-2xl tracking-wide text-center text-white capitalize whitespace-nowrap bg-red-600 rounded-none max-md:px-5">
                                <Link className="flex justify-center" href={product.link || ''}>
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function Rims({ data }: { data: Products[] }) {
    return (
        <div>
            <header className="flex flex-row justify-between">
                <div className="items-start self-start pt-4 pr-4 pb-4 pl-4 md:pl-16  md:text-3xl text-2xl font-semibold  text-red-600 ">
                    New Rims | Top Picks
                </div>
                <Link className="flex justify-center" href={'/product/Tire'}>
                    <div className="items-start self-end pt-4 pr-4 pb-4 pr-4 md:pr-16 md:text-3xl text-2xl  font-semibold underline text-red-600 ">
                        Show All
                    </div>
                </Link>
            </header>
            <div className="flex gap-5 justify-center pb-9 pl-5 mt-11 max-w-full flex-wrap max-md:mt-10">
                {data.map((product: Products, index: number) => (
                    <div key={index} className="flex flex-col py-6 pr-6 pl-6 bg-white rounded-md border-2 border-solid border-zinc-200 hover:shadow-xl shadow-md max-md:px-5">
                        <div className="flex justify-center items-center px-9 pb-3 max-md:px-5">
                            <img
                                loading="lazy"
                                srcSet={urlForImage(product.productImage)}
                                className="aspect-[0.75] w-[210px]"
                            />
                        </div>
                        <div className="flex flex-col items-center pb-6 mt-5 w-[] text-sm font-semibold leading-6 text-sky-900 bg-white">
                            <div className="font-semibold tracking-wide text-center">{product.manufacturer}</div>
                            <div className="mt-4 text-lg tracking-wide text-center">
                                {product.name} -<br />
                                {product.spec}
                            </div>
                            <div className="flex gap-2.5 self-stretch mt-1.5 text-neutral-600">
                                <div className="justify-center px-3.5 py-2 bg-white rounded-md border border-gray-100 border-solid">
                                    {product.cat || "_"}
                                </div>
                                <div className="justify-center px-3.5 py-2 whitespace-nowrap bg-white rounded-md border border-gray-100 border-solid">
                                    {product.rating}
                                </div>
                            </div>
                            <div className="justify-center items-center self-stretch px-16 py-5 mt-5 text-2xl tracking-wide text-center text-white capitalize whitespace-nowrap bg-red-600 rounded-none max-md:px-5">
                                <Link className="flex justify-center" href={product.link || ''}>
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function Accessories({ data }: { data: Products[] }) {

    return (
        <div>
            <header className="flex flex-row justify-between">
                <div className="items-start self-start pt-4 pr-4 pb-4 pl-4 md:pl-16 md:text-3xl text-2xl font-semibold  text-red-600 ">
                    New Accessories | Top Picks
                </div>
                <Link className="flex justify-center" href={'/product/Tire'}>
                    <div className="items-start self-end pt-4 pr-4 pb-4 pr-4 md:pr-16 md:text-3xl text-2xl  font-semibold underline text-red-600 ">
                        Show All
                    </div>
                </Link>
            </header>
            <div className="flex gap-5 justify-center pb-9 pl-5 mt-11 max-w-full flex-wrap max-md:mt-10">
                {data.map((product: Products, index: number) => (
                    <div key={index} className="flex flex-col py-6 pr-6 pl-6 bg-white rounded-md border-2 border-solid border-zinc-200 hover:shadow-xl shadow-md max-md:px-5">
                        <div className="flex justify-center items-center px-9 pb-3 max-md:px-5">
                            <img
                                loading="lazy"
                                srcSet={urlForImage(product.productImage)}
                                className="aspect-[0.75] w-[210px]"
                            />
                        </div>
                        <div className="flex flex-col items-center pb-6 mt-5 w-[] text-sm font-semibold leading-6 text-sky-900 bg-white">
                            <div className="font-semibold tracking-wide text-center">{product.manufacturer}</div>
                            <div className="mt-4 text-lg tracking-wide text-center">
                                {product.name} -<br />
                                {product.spec}
                            </div>
                            <div className="flex gap-2.5 self-stretch mt-1.5 text-neutral-600">
                                <div className="justify-center px-3.5 py-2 bg-white rounded-md border border-gray-100 border-solid">
                                    {product.cat || "_"}
                                </div>
                                <div className="justify-center px-3.5 py-2 whitespace-nowrap bg-white rounded-md border border-gray-100 border-solid">
                                    {product.rating}
                                </div>
                            </div>
                            <div className="justify-center items-center self-stretch px-16 py-5 mt-5 text-2xl tracking-wide text-center text-white capitalize whitespace-nowrap bg-red-600 rounded-none max-md:px-5">
                                <Link className="flex justify-center" href={product.link || ''}>
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

