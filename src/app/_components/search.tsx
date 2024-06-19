'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";


export function Search() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
        (width: string | null, profile: string | null, wheelSize: string | null, season: string | null) => {
            const params = new URLSearchParams(searchParams.toString());
            if (width) params.set('width', width);
            if (profile) params.set('profile', profile);
            if (wheelSize) params.set('wheelSize', wheelSize);
            if (season) params.set('season', season);

            return params.toString();
        },
        [searchParams]
    );
    function showData() {
        router.push(`/product/search?${createQueryString(width, profile, wheelSize, season)}`);
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

    const handleWidthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setWidth(event.target.value);
    };

    const handleProfileChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setProfile(event.target.value);
    };

    const handleWheelSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setWheelSize(event.target.value);
    };

    const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSeason(event.target.value);
    };
    return (
        <div className="flex flex-col pt-3 w-full">

            {/* <div className="flex gap-4 relative w-fit md:left-20 py-4 border-2 shadow-sm text-center border-b-0 justify-start items-start border-red-500 border-solid bg-zinc-300">
                <div className="my-auto text-2xl mx-10 font-bold  leading-7 text-red-600 uppercase">
                    Search your Tire Size
                </div>
            </div> */}
            <div className="flex w-full flex-col p-6 bg-gray-800 border border-solid shadow-lg border-neutral-200">
                <div className="flex flex-wrap justify-center lg:justify-between gap-3 lg:flex-nowrap w-full">
                    <div className="w-full lg:w-auto">
                        <label className="block  mb-2 text-md font-medium text-gray-300 " htmlFor="width">Width<span style={{ color: 'red' }}>*</span></label>
                        <select id="width" name="width" value={width} onChange={handleWidthChange} className="form-select  bg-gray-700  border  block w-full p-2.5 min-w-[235px] border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500" required>
                            <option value="">Width</option>
                            {[115, 125, 135, 145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325, 335, 345, 355, 375, 385, 480, 570, 30, 31, 32, 33, 34, 35, 37, 38, 38.5, 39, 40, 42, 50, 4.8, 5.3, 5.7, 7.5, 8.75, 9.5, 10.5, 11, 12.5, 13, 13.5, 14, 15.5, 18.5, 20.5, 27, 28, 29].map(value => (
                                <option key={value} value={value}>{value}</option>
                            ))}
                        </select>
                    </div>
                    <div className="w-full lg:w-auto">
                        <label className="block mb-2 text-md font-medium text-gray-300 " htmlFor="profile">Profile<span style={{ color: 'red' }}>*</span></label>
                        <select id="profile" name="profile" value={profile} onChange={handleProfileChange} className="form-select  bg-gray-700  border  block w-full p-2.5 min-w-[235px] border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500" required>
                            <option value="">Profile</option>
                            {[2.45, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75].map(value => (
                                <option key={value} value={value}>{value}</option>
                            ))}
                        </select>
                    </div>
                    <div className="w-full lg:w-auto">
                        <label className="block mb-2 text-md font-medium text-gray-300 " htmlFor="diameter">Rim Size<span style={{ color: 'red' }}>*</span></label>
                        <select id="diameter" name="diameter" value={wheelSize} onChange={handleWheelSizeChange} className="form-select  bg-gray-700  border  block w-full p-2.5 min-w-[235px] border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500" required>
                            <option value="">Size</option>
                            {[14, 15, 16, 17, 18, 19].map(value => (
                                <option key={value} value={value}>R{value}</option>
                            ))}
                        </select>
                    </div>
                    <div className="w-full lg:w-auto">
                        <label className="block mb-2 text-md font-medium text-gray-300 " htmlFor="season">Season</label>
                        <select id="season" name="season" value={season} onChange={handleSeasonChange} className="form-select  bg-gray-700  border  block w-full p-2.5 min-w-[235px] border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500" required>
                            <option value="all">All tires</option>
                            <option value="Winter">Winter</option>
                            <option value="All-Season">All Season</option>

                        </select>
                    </div>
                    <div className={`flex justify-center items-center self-center px-16 py-5 mt-3 max-w-full text-center text-white border border-solid shadow-sm  border-neutral-500 ] ${isButtonDisabled
                        ? 'bg-zinc-500  cursor-not-allowed'
                        : 'bg-red-500  hover:bg-blue-300 hover:text-black'
                        }`}>
                        <div className="flex gap-3" onClick={showData}>
                            <img
                                loading="lazy"
                                srcSet="/search.svg"
                                className=" aspect-[1]"
                            />
                            <button disabled={isButtonDisabled} className="text-md md:text-xl font-bold leading-6 uppercase tracking-[2px] ">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

