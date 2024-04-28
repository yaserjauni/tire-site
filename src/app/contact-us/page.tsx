import { Blogs } from "../_components/blogs";
import Footer from "../_components/footer";
import Header from "../_components/header";

export default function Contact() {
    return (
        <main className="flex flex-col overflow-hidden hide-scrollbar">
            <Header />
            <section>
                <div className="flex overflow-hidden relative flex-col items-center pt-12 pb-16 text-center text-white shadow-sm min-h-[548px]">
                    <img
                        loading="lazy"
                        srcSet="/Sectionbg.png"
                        className="object-cover absolute inset-0 size-full"
                    />
                    <div className="relative justify-center px-6 py-1.5 text-xs font-semibold leading-6 rounded-2xl bg-neutral-900 tracking-[2px] max-md:px-5">
                        LOOKING FOR A TIRE FOR YOUR VEHICLE?
                    </div>
                    <div className="flex relative justify-center items-center self-stretch px-16 mt-9 w-full max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 justify-between max-md:flex-wrap">
                            <div className="my-auto text-4xl font-black "><img
                                loading="lazy"
                                src="/mobile.svg"
                                className="shrink-0 w-10 aspect-square"
                            /></div>
                            <div className="text-6xl font-extrabold leading-[54.9px] max-md:max-w-full max-md:text-4xl">
                                (519) 827-7854
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-5 text-base leading-8">
                        Servicing the Kitchener & surrounding regions.
                    </div>
                    <div className="relative justify-center px-6 py-1.5 mt-5 text-xs font-semibold leading-6 rounded-2xl bg-neutral-900 tracking-[2px] max-md:px-5">
                        OUR SERVICE AREAS
                    </div>
                    <div className="flex relative flex-wrap justify-center content-start items-center self-stretch px-16 mt-12 w-full text-2xl font-extrabold leading-7 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col max-w-full w-[588px]">
                            <div className="flex gap-2 flex-wrap md:px-10">
                                <div className="flex gap-2 justify-center whitespace-nowrap">
                                    <div>Waterloo</div>
                                    <div className="shrink-0 w-px border-l border-white border-solid h-[30px]" />
                                </div>
                                <div className="flex gap-2 justify-center whitespace-nowrap">
                                    <div>Cambridge</div>
                                    <div className="shrink-0 w-px border-l border-white border-solid h-[30px]" />
                                </div>
                                <div className="flex gap-2 justify-center whitespace-nowrap">
                                    <div>Guelph</div>
                                    <div className="shrink-0 w-px border-l border-white border-solid h-[30px]" />
                                </div>
                                <div className="flex gap-2 justify-center whitespace-nowrap">
                                    <div>Stratford</div>
                                    <div className="shrink-0 w-px border-l border-white border-solid h-[30px]" />
                                </div>
                                <div>Woodstock</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex overflow-hidden relative flex-col justify-between items-start py-3 min-h-[650px] ">
                    <a href="https://maps.app.goo.gl/vT1nLMd8dNB8pHvY7">
                        <img
                            loading="lazy"
                            srcSet="/map.png"
                            className="object-cover absolute inset-0 size-full"
                        />
                        <div className="flex relative flex-wrap justify-start pl-2 bg-white rounded-sm shadow-sm ">
                            <div className="flex gap-5 px-3 pt-2.5">
                                <div className="flex flex-col pb-14 text-base text-zinc-600">
                                    <div className="text-xl font-medium text-black">
                                        63 Courtland Ave E
                                    </div>
                                    <div className="mt-1.5">63 Courtland Ave E, Kitchener, ON N2G</div>
                                    <div> 2T6, Canada</div>
                                </div>
                                <div className="flex flex-col flex-1 self-start px-2.5 text-xs text-center text-blue-600 whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        srcSet="..."
                                        className="self-center aspect-square w-[22px]"
                                    />
                                    <div className="mt-1.5">Directions</div>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
            </section>
            <Blogs />
            <Footer />
        </main>
    );
}