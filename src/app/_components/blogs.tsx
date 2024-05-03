import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

export const revalidate = 0;
interface Post {
    title: string;
    name: string;
    categories: string[];
    publishedAt: string;
    mainImage: {
        asset: {
            _ref: string;
            _type: "reference";
        };
    };
    desc: string;
    currentSlug: string;
}

async function getData(): Promise<Post[]> {
    const query = `*[_type == 'post'] | order(_createdAt desc)[0...6] {
    title,  
    "name": author->name,
    publishedAt,
    mainImage,
    desc,
    "currentSlug": slug.current,
    body,
    "authorPic": author->image  
    }`
    const data = await client.fetch<Post[]>(query, {}, { cache: 'no-cache' });
    return data;
}


export async function Blogs() {
    const data = await getData();
    return (
        <section>
            <div className="flex flex-col  " id="blog-section">
                <header className="flex flex-row justify-between">
                    <div className="items-start self-start pt-4 pr-4 pb-4 pl-4 md:pl-16 md:text-3xl text-2xl font-semibold  text-red-800 ">
                        Blogs
                    </div>
                    <Link className="flex justify-center" href={'/product/Tire'}>
                        <div className="items-start self-end pt-4 pr-4 pb-4 md:pr-16 md:text-3xl text-2xl  font-semibold underline text-red-800 ">
                            Show All
                        </div>
                    </Link>
                </header>
                <div className="grid sm-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 md:m-10 gap-5">
                    {data.map((post: Post, index: number) => (
                        <div key={index} className=" w-full md:ml-0 items-center px-5 text-xs font-medium text-center text-black flex flex-col grow py-7  bg-white rounded-lg hover:shadow-xl shadow-md">
                            <Link className="text-zinc-500 hover:underline" href={`/blog/${post.currentSlug}`}>
                                <div className="flex flex-col grow items-center px-5 text-xs font-medium text-center text-black max-md:mt-8 max-md:max-w-full">
                                    <div>
                                        <Image className="min-h-[200px] self-stretch " src={urlForImage(post.mainImage)} width={800} height={500} alt="Image" />
                                    </div>
                                    <div className="mt-5 text-2xl leading-8">
                                        {post.title}
                                    </div>
                                    <div className="mt-5 text-sm leading-5 text-neutral-800">
                                        {post.desc}{" "}
                                        <div className=" text-red-500 text-sm leading-5">
                                            Read more...
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
