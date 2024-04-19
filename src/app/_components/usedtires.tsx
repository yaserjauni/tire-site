import * as React from "react";

export function UsedTires() {
    return (
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-10 py-10 text-4xl font-bold leading-10 text-black max-md:px-5">
            <img
                loading="lazy"
                srcSet="/bg-used.png"
                className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col mt-2 gap-5 leading-7 w-full ">
                <div className="self-center text-center uppercase">All Season </div>
                <div className="flex gap-5 justify-between px-1 mt-5 w-full text-xl max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col ">
                        <div className="flex-col  ">
                            <span className="underline">
                                list of tires in sets of 4 in stock 15 inch
                            </span>
                            <ul className="list-disc">
                                <li> 195/65/15 Michline Defender-80% tread</li>
                                <li>185/60/15 Kumho-80% tread</li>
                                <li>195/60/15 Bravo-90% tread</li>
                                <li>205/70/15 Michline Defender-90% tread</li>
                            </ul>

                            <span className="underline pt-10">
                                List of tires in sets of 4 in stock 16 inch
                            </span>
                            <ul className="list-disc">
                                <li>205/55/16 -Michelin-Bfgoodrich-Goodyear</li>
                                <li>205/60/16- Hankook</li>
                                <li>205/65/16 -Michelin Priemier</li>
                                <li>215/55/16- Toyo- Continental-</li>
                                <li>215/60/16- Continental- Hankook</li>
                                <li>215/65/16- Firestone</li>
                                <li>235/65/16 -Motomaster </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-5 justify-between px-1 mt-24 w-full text-xl leading-7 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col my-auto">
                            <div className="flex-col  ">
                                <span className="underline">
                                    List of tires in sets of 4 in stock 17 inch
                                </span>
                                <ul className="list-disc">
                                    <li>205/40/17 -Nexen-90%</li>
                                    <li>205/50/17 Yokohama-80%</li>
                                    <li>205/55/17 Bridgestone-80%</li>
                                    <li>215/55/17-Michelin-70%</li>
                                    <li>215/65/17-Goodyear 80%</li>
                                    <li>225/45/17 Michelin-Continental</li>
                                    <li>225/60/17 Firestone- Michelin defender</li>
                                    <li>225/65/17 Continetal-Firestone- Michelin</li>
                                    <li>235/65/17 -Firestone-Contintal</li>
                                    <li>245/65/17 -Firestone</li>
                                    <li>245/70/17 Firestone</li>
                                    <li>245/75/17 Goodyear-Firestone</li>
                                    <li>
                                        265/70/17 Goodyear- Hercules-Cooper- Goodyear Duratrac
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-3 max-md:mt-10 max-md:max-w-full">
                                <span className="underline">
                                    List of tires in sets of 4 in stock 18 inch
                                </span>
                                <ul className="list-disc">
                                    <li>225/40/18-Michline</li>
                                    <li>225/45/18-Bridgestone</li>
                                    <li>235/40/18-Goodyear</li>
                                    <li>235/45/18 Bridgestone-Michelin</li>
                                    <li>245/45/18 </li>
                                    <li>215/55/18-Conitental</li>
                                    <li>225/50/18 Bridgestone- Goodyear</li>
                                    <li>235/60/18 Bridgestone</li>
                                    <li>245/60/18 Kumho</li>
                                    <li>275/65/18 Goodyear</li>
                                    <li>225/60/18 Goodyear All weather</li>
                                    <li>255/60/18 Goodyear All weather</li>
                                    <li>275/70/18 Cooper</li>
                                    <li>265/65/18 Michelin LTX</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col my-auto">
                        <div>
                            <span className="underline">
                                List of tires in sets of 4 in stock 19 inch
                            </span>
                            <ul className="list-disc">
                                <li> 225/45/19 Bridgestone</li>
                                <li>235/40/19 Michelin</li>
                                <li>235/45/19 Kumho</li>
                                <li>245/40/19 Yokohama</li>
                                <li>255/45/19 Conitental</li>
                                <li>235/55/19 Michelin</li>
                                <li>245/55/19 Toyo</li>
                                <li>235/50/19 Hankook</li>
                            </ul>
                        </div>
                        <div className="mt-6 max-md:mt-10">
                            <span className="underline">
                                List of Tires in sets of 4 in stock 20 inch
                            </span>
                            <ul className="list-disc">
                                <li>265/45/20 Continental</li>
                                <li>275/45/20 Continental </li>
                                <li>255/40/20 Goodyear</li>
                                <li>245/50/20 Michelin</li>
                                <li>235/45/20 Pirelli</li>
                                <li>255/50/20 Continental</li>
                                <li>255/55/20 Michelin</li>
                                <li>275/60/20 Bridgestone</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="self-center  text-center uppercase">
                    Winter tires
                </div>
                <div className="flex gap-5 justify-between px-1 mt-10 w-full text-xl leading-7 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col my-auto">
                        <div className="flex-col  ">
                            <span className="underline">
                                list of tires in sets of 4 in stock 15 inch
                            </span>
                            <ul className="list-disc">
                                <li> 195/65/15 Michline Defender-80% tread</li>
                                <li>185/60/15 Kumho-80% tread</li>
                                <li>195/60/15 Bravo-90% tread</li>
                                <li>205/70/15 Michline Defender-90% tread</li>
                            </ul>
                        </div>
                        <div className="mt-8 max-md:mt-10">
                            <span className="underline">
                                List of tires in sets of 4 in stock 16 inch
                            </span>
                            <ul className="list-disc">
                                <li>205/55/16 -Michelin-Bfgoodrich-Goodyear</li>
                                <li>205/60/16- Hankook</li>
                                <li>205/65/16 -Michelin Priemier</li>
                                <li>215/55/16- Toyo- Continental-</li>
                                <li>215/60/16- Continental- Hankook</li>
                                <li>215/65/16- Firestone</li>
                                <li>235/65/16 -Motomaster </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-5 justify-between px-1 mt-24 w-full text-xl leading-7 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col my-auto">
                            <div className="flex-col  ">
                                <span className="underline">
                                    List of tires in sets of 4 in stock 17 inch
                                </span>
                                <ul className="list-disc">
                                    <li>205/40/17 -Nexen-90%</li>
                                    <li>205/50/17 Yokohama-80%</li>
                                    <li>205/55/17 Bridgestone-80%</li>
                                    <li>215/55/17-Michelin-70%</li>
                                    <li>215/65/17-Goodyear 80%</li>
                                    <li>225/45/17 Michelin-Continental</li>
                                    <li>225/60/17 Firestone- Michelin defender</li>
                                    <li>225/65/17 Continetal-Firestone- Michelin</li>
                                    <li>235/65/17 -Firestone-Contintal</li>
                                    <li>245/65/17 -Firestone</li>
                                    <li>245/70/17 Firestone</li>
                                    <li>245/75/17 Goodyear-Firestone</li>
                                    <li>
                                        265/70/17 Goodyear- Hercules-Cooper- Goodyear Duratrac
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-3 max-md:mt-10 max-md:max-w-full">
                                <span className="underline">
                                    List of tires in sets of 4 in stock 18 inch
                                </span>
                                <ul className="list-disc">
                                    <li>225/40/18-Michline</li>
                                    <li>225/45/18-Bridgestone</li>
                                    <li>235/40/18-Goodyear</li>
                                    <li>235/45/18 Bridgestone-Michelin</li>
                                    <li>245/45/18 </li>
                                    <li>215/55/18-Conitental</li>
                                    <li>225/50/18 Bridgestone- Goodyear</li>
                                    <li>235/60/18 Bridgestone</li>
                                    <li>245/60/18 Kumho</li>
                                    <li>275/65/18 Goodyear</li>
                                    <li>225/60/18 Goodyear All weather</li>
                                    <li>255/60/18 Goodyear All weather</li>
                                    <li>275/70/18 Cooper</li>
                                    <li>265/65/18 Michelin LTX</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-auto">
                        <div>
                            <span className="underline">
                                List of tires in sets of 4 in stock 19 inch
                            </span>
                            <ul className="list-disc">
                                <li> 225/45/19 Bridgestone</li>
                                <li>235/40/19 Michelin</li>
                                <li>235/45/19 Kumho</li>
                                <li>245/40/19 Yokohama</li>
                                <li>255/45/19 Conitental</li>
                                <li>235/55/19 Michelin</li>
                                <li>245/55/19 Toyo</li>
                                <li>235/50/19 Hankook</li>
                            </ul>
                        </div>
                        <div className="mt-6 max-md:mt-10">
                            <span className="underline">
                                List of Tires in sets of 4 in stock 20 inch
                            </span>
                            <ul className="list-disc">
                                <li>265/45/20 Continental</li>
                                <li>275/45/20 Continental </li>
                                <li>255/40/20 Goodyear</li>
                                <li>245/50/20 Michelin</li>
                                <li>235/45/20 Pirelli</li>
                                <li>255/50/20 Continental</li>
                                <li>255/55/20 Michelin</li>
                                <li>275/60/20 Bridgestone</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

