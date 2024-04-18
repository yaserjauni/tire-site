export function Brands() {
    return (
        <div className="flex overflow-hidden relative flex-col justify-center items-center py-5 text-white min-h-[492px] max-md:px-5">
            <img
                loading="lazy"
                srcSet="/brand-bg.png"
                className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col justify-center p-8 max-w-full w-[1260px] max-md:px-5">
                <div className="self-start ml-2.5 text-5xl font-bold leading-[55.02px]">
                    Our Brands Include:
                </div>
                <div className="flex gap-3 justify-center pl-1.5 max-md:flex-wrap">
                    <div className="flex flex-wrap flex-1 justify-center content-center items-center p-2.5 bg-white rounded-2xl">
                        <img
                            loading="lazy"
                            srcSet="/b1.png"
                            className="aspect-[2.38] max-w-[148px] w-[148px]"
                        />
                    </div>
                    <div className="flex flex-wrap flex-1 justify-center content-center items-center p-2.5 bg-white rounded-2xl">
                        <img
                            loading="lazy"
                            srcSet="/b2.png"
                            className="aspect-[2.38] max-w-[148px] w-[148px]"
                        />
                    </div>
                    <div className="flex flex-wrap flex-1 justify-center content-center items-center p-2.5 bg-white rounded-2xl">
                        <img
                            loading="lazy"
                            srcSet="/b3.png"
                            className="aspect-[2.38] max-w-[148px] w-[148px]"
                        />
                    </div>
                    <div className="flex flex-wrap flex-1 justify-center content-center items-center p-2.5 bg-white rounded-2xl">
                        <img
                            loading="lazy"
                            srcSet="/b4.png"
                            className="aspect-[2.38] max-w-[148px] w-[148px]"
                        />
                    </div>
                    <div className="flex flex-wrap flex-1 justify-center content-center items-center p-2.5 bg-white rounded-2xl">
                        <img
                            loading="lazy"
                            srcSet="/b5.png"
                            className="aspect-[2.38] max-w-[148px] w-[148px]"
                        />
                    </div>
                    <div className="flex flex-wrap flex-1 justify-center content-center items-center p-2.5 bg-white rounded-2xl">
                        <img
                            loading="lazy"
                            srcSet="/b6.png"
                            className="aspect-[2.38] max-w-[148px] w-[148px]"
                        />
                    </div>
                </div>

                <div className="flex justify-center items-center py-6 text-center max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="self-center text-3xl font-bold tracking-wider">
                            …and other major brands.
                        </div>
                        <div className="mt-4 text-base leading-8 max-md:max-w-full">
                            view our products for a more detailed outline of some tire brands
                            we offer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}