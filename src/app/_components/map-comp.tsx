
export default function MapComponent() {


    return (
        <>
            <div className="flex md:flex-col w-full overflow-hidden relative flex-col justify-between items-start py-3 min-h-[450px] ">
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
                                    7 Stirling Ln, Kitchener,
                                </div>
                                <div className="mt-1.5">7 Stirling Ln, Kitchener, ON N2G</div>
                                <div> 2M4, Canada</div>
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
        </>
    );
}
