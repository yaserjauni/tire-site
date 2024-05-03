import { PortableText } from "next-sanity";
import * as React from "react";
import { client } from "../../../sanity/lib/client";
import { TypedObject } from "sanity";
import { PostBody } from "./post-body";
import { UsedProducts } from "./homePage";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";


async function getData(): Promise<UsedProducts[]> {
    const query = `*[_type == 'used-products' && type == 'used-tire']{
        name,
        type,
        rimType,
        tireType,
        productImage,
    }`
    const data = await client.fetch<UsedProducts[]>(query, {}, { cache: 'no-cache' });
    return data;
}

export async function SingleTires() {
    const data = await getData();
    return (
        <div>
            {data.length > 0 ? (
                <section>
                    <div className="items-start self-stretch pt-4 pr-4 pb-4 pl-16 text-4xl font-black  text-red-600 leading-[65px]">
                        Products:
                    </div>
                    <div className="flex gap-5 justify-center pb-9 pl-5 mt-11 max-w-full flex-wrap max-md:mt-10">
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
                </section>
            ) : (
                <div className="items-start self-stretch pt-4 pr-4 pb-4 pl-16 text-4xl font-black  min-h-screen text-red-600 leading-[65px]">
                    No matching Results found
                </div>
            )}
        </div>

    );
}