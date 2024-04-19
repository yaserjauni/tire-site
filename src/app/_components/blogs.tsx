import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

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
    const query = `*[_type == 'post'] {
    title,
    "name": author->name,
    publishedAt,
    mainImage,
    desc,
    "currentSlug": slug.current,
    }`
    const data = await client.fetch<Post[]>(query);
    return data;
}

export async function Blogs() {
    const data = await getData();
    console.log(data);
    return (
        <section>
            <div className="flex flex-col md:px-20 md:m-10 mb-10 gap-5" id="blog-section">
                <div className="self-start md:text-5xl ms:text-xl font-semibold py-10 px-5 text-black max-md:max-w-full max-md:text-4xl">
                    Blogs
                </div>
                <div className="grid sm-grid-cols-1 md:grid-cols-2 gap-5">

                    {data.map((post: Post, index: number) => (
                        <div key={index} className=" w-full md:ml-0 items-center px-5 text-xs font-medium text-center text-black flex flex-col grow px-6 py-7 w-full bg-white rounded-lg shadow-md">

                            <div className="flex flex-col grow items-center px-5 text-xs font-medium text-center text-black max-md:mt-8 max-md:max-w-full">
                                <div>
                                    <Image className="shrink-0 self-stretch bg-rose-400 h-[333px] max-md:max-w-full" src={urlForImage(post.mainImage)} width={1000} height={500} alt="Image" />
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
                {/* <div className="justify-center self-center px-3.5 py-3.5 mt-14 text-xs tracking-widest leading-4 text-center text-black border border-red-600 border-solid max-md:mt-10">
                    LOAD PREVIOUS ARTICLES
                </div> */}
            </div>
        </section>
    );
}
