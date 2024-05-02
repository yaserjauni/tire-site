import * as React from "react";
import { Image } from "sanity";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";

interface Rims {
    name: string;
    RimImages: {
        _type: string;
        asset: {
            _ref: string;
            _type: 'reference';
        };
    }[];
};

async function getData(): Promise<Rims[]> {
    const query = `*[_type == 'usedRims' ]{
        name,
        RimImages,
    }`
    try {
        const data = await client.fetch<Rims[]>(query, {}, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export async function UsedRims() {
    const data = await getData();
    console.log(data);
    return (
        <div className="flex overflow-hidden relative flex-col justify-center text-white bg-zinc-900 items-center pt-3 py-5 min-h-screen">
            {data.map((rim, index) => (
                <div key={index} className="flex relative flex-col mt-3 w-full ">
                    <div className="self-center text-4xl font-extrabold leading-10 py-5 text-center uppercase">
                        {rim.name}
                    </div>
                    <div className="flex  justify-center items-center mt-10">
                        <div className="grid grid-cols-1 gap-5 md:gap-20 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 self-stretch my-auto">
                            {rim.RimImages.map((rimImage, index) => (
                                // Check if rimImage is properly formatted before rendering
                                rimImage && rimImage.asset && rimImage.asset._ref ? (
                                    <img
                                        key={index}
                                        loading="lazy"
                                        src={urlForImage((rimImage))}
                                        className="mt-3 w-full shadow-sm aspect-[1.16]"
                                    />
                                ) : null
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
