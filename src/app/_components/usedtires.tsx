import * as React from "react";
import { TypedObject } from "sanity";
import { client } from "../../../sanity/lib/client";
import { PostBody } from "./post-body";

interface Used {
    name: string;
    list: TypedObject;
}

async function getData(): Promise<Used[]> {
    const query = `*[_type == 'usedTire' ]{
        name,
        list,
    }`
    const data = await client.fetch<Used[]>(query, {}, { cache: 'no-cache' });
    return data;
}

export async function UsedTires() {
    const data = await getData();
    console.log(data[0].name);
    return (
        <div className="text-left justify-center py-10 px-10 font-semibold leading-10 text-white bg-zinc-900">
            {data.map((item, index) => (
                <div key={index} className="flex relative flex-col   ">
                    <div className="text-center pt-10 font-bold text-5xl uppercase">{item.name} </div>
                    <div className=" gap-5 mt-5 md:ml-15">
                        <div className="leading-10 text-xl font-bold">
                            <PostBody content={item.list} />
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}
