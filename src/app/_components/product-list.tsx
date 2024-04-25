import * as React from "react";

export function SearchList() {
    return (
        <div>
            <div className="items-start self-stretch pt-4 pr-4 pb-4 pl-16 text-4xl font-black  text-red-600 leading-[65px]">
                New - Tires | Top Picks
            </div>
            <div className="flex gap-5 justify-center pb-9 pl-5 mt-11 max-w-full flex-wrap max-md:mt-10">
                <div className="flex flex-col py-6 pr-6 pl-6 bg-white rounded-md border-2 border-solid border-zinc-200 max-md:px-5">
                    <div className="flex justify-center items-center px-9 pb-3 max-md:px-5">
                        <img
                            loading="lazy"
                            srcSet="..."
                            className="aspect-[0.75] w-[169px]"
                        />
                    </div>
                    <div className="flex flex-col items-center pb-6 mt-5 w-full text-sm font-semibold leading-6 text-sky-900 bg-white">
                        <div className="font-black tracking-wide text-center">Uniroyal</div>
                        <div className="mt-4 text-lg tracking-wide text-center">
                            Tiger Paw AWP3 -<br />
                            225/60R16 98T
                        </div>
                        <div className="flex gap-2.5 self-stretch mt-1.5 text-neutral-600">
                            <div className="justify-center px-3.5 py-2 bg-white rounded-md border border-gray-100 border-solid">
                                All Season
                            </div>
                            <div className="justify-center px-3.5 py-2 whitespace-nowrap bg-white rounded-md border border-gray-100 border-solid">
                                8.9/10
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            srcSet="/amazon-logo.png"
                            className="mt-14 aspect-[3.45] w-[238px] max-md:mt-10"
                        />
                        <div className="justify-center items-center self-stretch px-16 py-5 mt-5 text-xs tracking-wide text-center text-white capitalize whitespace-nowrap bg-red-600 rounded-none max-md:px-5">
                            Button
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export function AllList() {
    return (
        <div>
            <div className="items-start self-stretch pt-4 pr-4 pb-4 pl-16 text-4xl font-black  text-red-600 leading-[65px]">
                New - Tires | Top Picks
            </div>
            <div className="flex gap-5 justify-center pb-9 pl-5 mt-11 max-w-full flex-wrap max-md:mt-10">
                <div className="flex flex-col py-6 pr-6 pl-6 bg-white rounded-md border-2 border-solid border-zinc-200 max-md:px-5">
                    <div className="flex justify-center items-center px-9 pb-3 max-md:px-5">
                        <img
                            loading="lazy"
                            srcSet="..."
                            className="aspect-[0.75] w-[169px]"
                        />
                    </div>
                    <div className="flex flex-col items-center pb-6 mt-5 w-full text-sm font-semibold leading-6 text-sky-900 bg-white">
                        <div className="font-black tracking-wide text-center">Uniroyal</div>
                        <div className="mt-4 text-lg tracking-wide text-center">
                            Tiger Paw AWP3 -<br />
                            225/60R16 98T
                        </div>
                        <div className="flex gap-2.5 self-stretch mt-1.5 text-neutral-600">
                            <div className="justify-center px-3.5 py-2 bg-white rounded-md border border-gray-100 border-solid">
                                All Season
                            </div>
                            <div className="justify-center px-3.5 py-2 whitespace-nowrap bg-white rounded-md border border-gray-100 border-solid">
                                8.9/10
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            srcSet="/amazon-logo.png"
                            className="mt-14 aspect-[3.45] w-[238px] max-md:mt-10"
                        />
                        <div className="justify-center items-center self-stretch px-16 py-5 mt-5 text-xs tracking-wide text-center text-white capitalize whitespace-nowrap bg-red-600 rounded-none max-md:px-5">
                            Button
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

