import Link from "next/link";
import * as React from "react";

export function SearchBox() {
    return (
        <div className="flex overflow-hidden relative flex-col items-center px-16 pt-14 min-h-[996px] max-md:px-5">

            <div className="flex relative flex-col items-center p-2.5 max-w-full w-[874px]">
                <div className="text-5xl font-bold leading-10 text-center text-red-950">
                    OUR PRODUCTS
                </div>
                <div className="mt-5 text-base leading-8 text-center text-black max-md:max-w-full">
                    When your tires are in need of repair or replacement,
                    Tire Empire always has on duty trained
                    <br />
                    personnel for tire repairs. Our knowledgeable and fully trained tire
                    specialists team is available to help you
                    <br />
                    six days a week. and we are always happy to speak with you about new
                    or used tires and our service range.
                </div>
                <div className="flex flex-col self-stretch mt-5 bg-white max-md:max-w-full">
                    <div className="flex flex-col px-4 pt-5 pb-9 border border-solid border-neutral-300 max-md:max-w-full">

                        <div className="flex gap-4 px-20 py-4 border border-red-600 border-solid bg-zinc-100 max-md:flex-wrap max-md:px-5">
                            <div className="my-auto text-2xl font-bold leading-7 text-red-600 uppercase">
                                Looking for something specific?
                            </div>

                        </div>
                        <div className="flex z-10 flex-col p-6 bg-white border border-solid shadow-lg border-neutral-200 max-md:px-5 max-md:max-w-full">
                            <div className="justify-center max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow self-stretch gap-3 pb-10 max-md:mt-8">

                                            <div className="flex  mt-5 gap-10 ">
                                                <div className="flex gap-0 my-auto font-bold">
                                                    <div className="text-lg leading-5 text-zinc-800">
                                                        Width
                                                    </div>
                                                    <div className="text-2xl leading-6 text-red-600">
                                                        *
                                                    </div>
                                                </div>
                                                <div className="flex flex-1 justify-between ">
                                                    <input
                                                        type="text"
                                                        className="block w-full px-3 py-2.5 text-base leading-5 bg-white rounded-md border border-solid shadow-sm border-neutral-400 text-zinc-800 focus:outline-none focus:border-blue-300"
                                                        placeholder="- Enter Width -"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex gap-10 mt-3">
                                                <div className="flex gap-0 my-auto font-bold">
                                                    <div className="text-lg leading-5 text-zinc-800">
                                                        Profile
                                                    </div>
                                                    <div className="text-2xl leading-6 text-red-600">
                                                        *
                                                    </div>
                                                </div>
                                                <div className="flex flex-1 justify-between ">
                                                    <input
                                                        type="text"
                                                        className="block w-full px-3 py-2.5 text-base leading-5 bg-white rounded-md border border-solid shadow-sm border-neutral-400 text-zinc-800 focus:outline-none focus:border-blue-300"
                                                        placeholder="- Enter Profile -"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex gap-0 mt-3">
                                                <div className="flex gap-0 my-auto font-bold">
                                                    <div className="text-lg leading-5 text-zinc-800">
                                                        Wheel Size
                                                    </div>
                                                    <div className="text-2xl leading-6 text-red-600">
                                                        *
                                                    </div>
                                                </div>
                                                <div className="flex flex-1 justify-between ">
                                                    <input
                                                        type="text"
                                                        className="block w-full px-3 py-2.5 text-base leading-5 bg-white rounded-md border border-solid shadow-sm border-neutral-400 text-zinc-800 focus:outline-none focus:border-blue-300"
                                                        placeholder="- Enter Size -"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex gap-8 mt-3">
                                                <div className="flex gap-0 my-auto font-bold">
                                                    <div className="text-lg leading-5 text-zinc-800">
                                                        Season
                                                    </div>
                                                    <div className="text-2xl leading-6 text-red-600">
                                                        *
                                                    </div>
                                                </div>
                                                <div className="flex flex-1 justify-between ">
                                                    <select
                                                        className="flex flex-1 justify-between py-2.5 px-1.5  rounded-md border border-solid shadow-sm border-neutral-400 text-zinc-800"
                                                        defaultValue="- Select -"
                                                    >
                                                        <option disabled value="- Select -">- Select -</option>
                                                        <option value="1">All Season</option>
                                                        <option value="2">Winter</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <img
                                            loading="lazy"
                                            srcSet="/info.png"
                                            className="w-full aspect-[1] max-w-[400.8px] max-md:mt-8"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center self-center px-16 py-5 mt-3 max-w-full text-center text-white border border-solid shadow-sm bg-neutral-500 border-neutral-500 w-[520px] max-md:px-5">
                                <div className="flex gap-3">
                                    <img
                                        loading="lazy"
                                        srcSet="/search.svg"
                                        className=" aspect-[1]"
                                    />
                                    <Link href={`/products`}>
                                        <button className="md:text-xl font-bold leading-6 uppercase tracking-[2px]">
                                            Find your tires now
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

