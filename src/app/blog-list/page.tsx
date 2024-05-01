import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import Header from "../_components/header";
import Footer from "../_components/footer";

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
    const query = `*[_type == 'post'] {
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


export default async function BlogList() {
    const data = await getData();
    return (
        <main>
            <Header />
            <section>

                <div className="flex flex-col p-5 md:px-20 md:m-10 mb-10 gap-5" id="blog-section">
                    <div className="flex flex-row justify-between">
                        <div className="self-start md:text-5xl text-3xl font-semibold text-black">
                            All Blogs
                        </div>
                    </div>

                    <div className="grid sm-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {data.map((post: Post, index: number) => (
                            <div key={index} className=" w-full md:ml-0 items-center px-5 text-xs font-medium text-center hover:shadow-xl text-black flex flex-col grow px-6 py-7 w-full bg-white rounded-lg shadow-md">
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

                                            Read more...

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>

    );
}
