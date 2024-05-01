'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export function Search() {
    const router = useRouter();
    function showData() {
        let parameter = "";
        if (width !== undefined && width !== null && width !== "") {
            parameter += `width=${width}*`;
        } else {
            parameter += "width=*";
        }
        if (profile !== undefined && profile !== null && profile !== "") {
            parameter += `+profile=${profile}*`;
        } else {
            parameter += "+profile=*";
        }
        if (wheelSize !== undefined && wheelSize !== null && wheelSize !== "") {
            parameter += `+wheelSize=${wheelSize}*`;
        } else {
            parameter += "+wheelSize=*";
        }
        if (season !== undefined && season !== null && season !== "") {
            parameter += `+season=${season}*`;
        } else {
            parameter += "+season=*";
        }
        router.push(`/product/${parameter}`);
    }

    const [search, setSearch] = useState("");
    const [width, setWidth] = useState("");
    const [profile, setProfile] = useState("");
    const [wheelSize, setWheelSize] = useState("");
    const [season, setSeason] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        setIsButtonDisabled(!(width && profile && wheelSize));
    }, [width, profile, wheelSize]);

    const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWidth(event.target.value);
    };

    const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProfile(event.target.value);
    };

    const handleWheelSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWheelSize(event.target.value);
    };

    const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSeason(event.target.value);
    };
    return (
        <div className="flex overflow-hidden relative flex-col items-center  pt-5  max-md:px-5">

            <div className="flex relative flex-col items-center px-2.5 max-w-full">
                <div className="text-4xl font-bold leading-10 text-center text-red-950">
                    OUR PRODUCTS
                </div>

                <div className="flex flex-col self-stretch mt-5 bg-white max-md:max-w-full">
                    <div className="flex flex-col px-4 pt-5 pb-9  max-md:max-w-full">

                        <>
                            <div className="flex gap-4 px-20 py-4 border border-red-600 border-solid bg-zinc-100 max-md:flex-wrap max-md:px-5">
                                <div className="my-auto text-2xl font-bold leading-7 text-red-600 uppercase">
                                    Looking for something specific?
                                </div>

                            </div>
                            <div className="flex z-10 flex-col p-6 bg-white border border-solid shadow-lg border-neutral-200 max-md:px-5 max-md:max-w-full">
                                <div className="justify-center max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col self-stretch gap-3 pb-10 max-md:mt-8">
                                                <form >

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
                                                                onChange={handleWidthChange}
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
                                                                onChange={handleProfileChange}
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
                                                                placeholder="- Enter Size -" onChange={handleWheelSizeChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-8 mt-3">
                                                        <div className="flex gap-0 my-auto font-bold">
                                                            <div className="text-lg leading-5 text-zinc-800">
                                                                Season
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-1 justify-between ">
                                                            <select
                                                                className="flex flex-1 justify-between py-2.5 px-1.5 rounded-md border border-solid shadow-sm border-neutral-400 text-zinc-800"
                                                                value={season}
                                                                onChange={handleSeasonChange}
                                                            >
                                                                <option >-Select-</option>
                                                                <option value="AllSeason">All Season</option>
                                                                <option value="Winter">Winter</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </form>
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
                                <div className={`flex justify-center items-center self-center px-16 py-5 mt-3 max-w-full text-center text-white border border-solid shadow-sm  border-neutral-500 w-[520px] ${isButtonDisabled
                                    ? 'bg-zinc-500  cursor-not-allowed'
                                    : 'bg-red-500 text-red-600 hover:bg-blue-600'
                                    }`}>
                                    <div className="flex gap-3">
                                        <img
                                            loading="lazy"
                                            srcSet="/search.svg"
                                            className=" aspect-[1]"
                                        />
                                        <button onClick={showData} disabled={isButtonDisabled} className="text-sm md:text-xl font-bold leading-6 uppercase tracking-[2px] ">
                                            Find your tires now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
}

