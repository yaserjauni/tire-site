import { PortableText } from "next-sanity";
import * as React from "react";
import { client } from "../../../sanity/lib/client";
import { TypedObject } from "sanity";
import { PostBody } from "./post-body";

interface Single {
    name: string;
    list: TypedObject;
}

async function getData(): Promise<Single[]> {
    const query = `*[_type == 'single' ]{
        name,
        list,
    }`
    const data = await client.fetch<Single[]>(query, {}, { cache: 'no-cache' });
    return data;
}

export async function SingleTires() {
    const data = await getData();
    return (
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 text-white bg-zinc-900 min-h-[1434px] max-md:px-5">
            {data.map((item, index) => (
                <div key={index} className="flex relative flex-col mt-2 max-w-full">

                    <div className="self-center text-4xl font-extrabold leading-10 text-center uppercase ">
                        {item.name}
                    </div>
                    <div className=" gap-5 justify-center self-center md:columns-2 w-full mt-10  w-full text-xl tracking-wider leading-7 ">

                        <div className="justify-center self-center grid md:grid-cols-2 ">
                            <PostBody content={item.list} />
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}