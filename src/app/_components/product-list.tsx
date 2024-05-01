
import * as React from "react";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
import { Products } from "../product/[parameter]/page";


export async function SearchResult({ data }: { data: Products[] }) {

    return (
        <div>
            {data.length > 0 ? (
                <section>
                    <div className="items-start self-stretch pt-4 pr-4 pb-4 pl-16 text-4xl font-black  text-red-600 leading-[65px]">
                        Products:
                    </div>
                    <div className="flex gap-5 justify-center pb-9 pl-5 mt-11 max-w-full flex-wrap max-md:mt-10">
                        {data.map((product: Products, index: number) => (
                            <div key={index} className="flex flex-col py-6 pr-6 pl-6 bg-white rounded-md border-2 border-solid border-zinc-200 max-md:px-5">
                                <div className="flex justify-center items-center px-9 pb-3 max-md:px-5">
                                    <img
                                        loading="lazy"
                                        srcSet={urlForImage(product.productImage)}
                                        className="aspect-[0.75] w-[200px]"
                                    />
                                </div>
                                <div className="flex flex-col items-center pb-6 mt-5 w-[250px] text-sm font-semibold leading-6 text-sky-900 bg-white">
                                    <div className="font-black  text-center">{product.manufacturer}</div>
                                    <div className="mt-4 text-lg whitespace-wrap text-center">
                                        {product.name} -<br />
                                        {product.spec}
                                    </div>
                                    <div className="flex gap-2.5 self-stretch mt-1.5 text-neutral-600">
                                        <div className="justify-center px-3.5 py-2 bg-white rounded-md border border-gray-100 border-solid">
                                            {product.cat.includes('Winter') ? 'Winter' : 'All Season' || product.cat[0]}
                                        </div>
                                        <div className="justify-center px-3.5 py-2 whitespace-nowrap bg-white rounded-md border border-gray-100 border-solid">
                                            {product.rating}
                                        </div>
                                    </div>
                                    <div className="justify-center items-center self-stretch px-16 py-5 mt-5 text-xs tracking-wide text-center text-white capitalize whitespace-nowrap bg-red-600 rounded-none max-md:px-5">
                                        <Link className="flex justify-center" href={product.link || ''}>
                                            Buy Now
                                        </Link>
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