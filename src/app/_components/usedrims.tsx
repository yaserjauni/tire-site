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
    const data = await client.fetch<Rims[]>(query, {}, { cache: 'no-cache' });
    return data;
}


export async function UsedRims() {
    const data = await getData();
    console.log(data);
    return (
        <div className="flex overflow-hidden relative flex-col justify-center text-white bg-zinc-900 items-center  py-10 min-h-screen">
            {data.map((rim, index) => (
                <div key={index} className="flex relative flex-col mt-3 w-full ">
                    <div className="self-center text-4xl font-extrabold leading-10 py-10 text-center uppercase">
                        {rim.name}
                    </div>
                    <div className="flex  justify-center items-center mt-10">
                        <div className="grid grid-cols-1 gap-5 md:gap-20 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 self-stretch my-auto">
                            {rim.RimImages.map((rimImage, index) => (
                                <img
                                    key={index}
                                    loading="lazy"
                                    src={urlForImage(rimImage)} width={800} height={500} alt="Image"
                                    className="mt-3 w-full shadow-sm aspect-[1.16]"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


