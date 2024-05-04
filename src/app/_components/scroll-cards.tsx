import React from "react";

import { urlForImage } from "../../../sanity/lib/image";

import Link from "next/link";
import { UsedProducts } from "./homePage";





export async function ScrollCard({ data }: { data: UsedProducts[] }) {
    return (
        <div className="flex flex-col bg-white py-10 md:px-10 md:m-10 px-5 gap-5">
            <div className="mb-5 md:text-4xl text-3xl font-semibold text-red-600">
                Used Tires in Stock
            </div>
            <div className="flex overflow-y-hidden pb-10">
                {data.map((product: UsedProducts, index: number) => (
                    <div key={index}>
                        <div className="flex-none px-3">
                            <div className="max-w-xs scroll scroll-smooth  overfllow-x-scroll rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <div className="flex flex-col py-6 pr-6 pl-6 bg-white h-[550px] border-2 border-solid border-zinc-200 max-md:px-5">
                                    <div className="flex justify-center items-center px-9 pb-3 max-md:px-5">
                                        <img
                                            loading="lazy"
                                            srcSet={urlForImage(product.productImage)}
                                            className="aspect-[0.75] w-[200px]"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center  m-auto p-auto w-[250px] text-sm font-semibold leading-6 text-sky-900 bg-white relative">
                                        <div className="font-black  text-center">{product.type}</div>
                                        <div className="mt-4 text-lg whitespace-wrap text-center">
                                            {product.name}
                                        </div>
                                        <div className="flex gap-2.5 self-stretch mt-1.5 text-neutral-600">
                                            {product.type !== 'used-rims' && product.tireType && (
                                                <div className="justify-center px-3.5 py-2 bg-white rounded-md border border-gray-100 border-solid">
                                                    {product.tireType}
                                                </div>
                                            )}
                                            {product.type !== 'Tire' && product.rimType && (
                                                <div className="justify-center px-3.5 py-2 whitespace-nowrap bg-white rounded-md border border-gray-100 border-solid">
                                                    {product.rimType}
                                                </div>
                                            )}
                                        </div>
                                        <div className="mt-7 self-stretch py-5 text-2xl tracking-wide text-center text-white capitalize whitespace-nowrap bg-red-600 rounded-none max-md:px-5">
                                            <Link href={'/contact-us'} className="flex justify-center">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}
