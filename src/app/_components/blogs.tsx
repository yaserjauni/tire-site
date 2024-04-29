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
    const query = `*[_type == 'post'] | order(publishedAt desc) [0...6] {
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
            <div className="flex flex-col md:px-10 md:m-10 mb-10 " id="blog-section">
                <div className="flex flex-row justify-between px-5 gap-10">
                    <div className="  md:text-4xl text-3xl font-semibold text-red-600">
                        Blogs
                    </div>
                    <Link className="flex " href={'/blogList'}>
                        <div className=" pr-4  md:pr-16  md:text-4xl text-3xl font-black underline text-red-600 leading-[65px]">
                            Show All
                        </div>
                    </Link>
                </div>

                <div className="grid sm-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {data.map((post: Post, index: number) => (
                        <div key={index} className=" w-full md:ml-0 items-center px-5 text-xs font-medium text-center text-black flex flex-col grow px-6 py-7 w-full bg-white rounded-lg shadow-md">

                            <div className="flex flex-col grow items-center px-5 text-xs font-medium text-center text-black max-md:mt-8 max-md:max-w-full">
                                <div>
                                    <Image className="min-h-[200px] self-stretch " src={urlForImage(post.mainImage)} width={800} height={500} alt="Image" />
                                </div>
                                <div className="mt-5 text-2xl leading-8">
                                    {post.title}
                                </div>
                                <div className="mt-5 text-sm leading-5 text-neutral-800">
                                    {post.desc}{" "}
                                    <Link className="text-red-500 hover:underline" href={`/blog/${post.currentSlug}`}>
                                        Read more...
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
