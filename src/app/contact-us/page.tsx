import { Blogs } from "../_components/blogs";
import Contact from "../_components/contact-mail";
import Footer from "../_components/footer";
import Header from "../_components/header";

export default function ContactUs() {
    return (
        <main className="flex flex-col overflow-hidden hide-scrollbar">
            <Header />
            <section>
                <div className="flex overflow-hidden relative flex-col items-center pt-12 pb-16 text-center text-white shadow-sm ">
                    <img
                        loading="lazy"
                        src="/Sectionbg.png"
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

                    <div className="relative justify-center px-6 py-1.5 mt-5 text-xs font-semibold leading-6 rounded-2xl bg-neutral-900 tracking-[2px] max-md:px-5">
                        Welcome to Tire Empire
                    </div>


                </div>
                <div className="flex overflow-hidden relative flex-col justify-between items-start py-3 min-h-[650px] ">
                    <a href="https://maps.app.goo.gl/vT1nLMd8dNB8pHvY7">
                        <img
                            loading="lazy"
                            src="/map.png"
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
                                        src="/dir.png"
                                        className="self-center aspect-square w-[22px]"
                                    />
                                    <div className="mt-1.5">Directions</div>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
                <Contact />
            </section>
            <Footer />
        </main>
    );
}