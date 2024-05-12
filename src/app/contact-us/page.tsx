import { Blogs } from "../_components/blogs";
import Contact from "../_components/contact-mail";
import Footer from "../_components/footer";
import Header from "../_components/header";
import MapComponent from "../_components/map-comp";

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
                <div className="flex lg:flex-row flex-col justify-between">
                    <MapComponent />
                    <Contact />
                </div>

            </section>
            <Footer />
        </main>
    );
}