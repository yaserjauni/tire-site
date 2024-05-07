import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { getPostData, Post } from "../_components/homePage";



export default async function BlogList() {
    const data = await getPostData();
    return (
        <main>
            <Header />
            <section>

                <div className="block p-3 md:px-5 md:m-5 mb-10 " id="blog-section">
                    <div className="flex flex-row justify-start">
                        <div className="items-start self-start pt-4 pr-4 pb-4 pl-4 md:pl-16 md:text-3xl text-2xl font-semibold  text-white ">
                            All Blogs
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-5">

                        {data.map((post: Post, index: number) => (
                            <div key={index} className="items-center  h-[425px] w-[300px] px-2 text-xs font-medium text-center text-black py-1 bg-slate-100 rounded-lg hover:shadow-xl shadow-md">
                                <Link className="text-zinc-500 " href={`/blog/${post.currentSlug}`}>
                                    <div className="flex flex-col items-center px-2 text-xs font-medium text-center text-black">
                                        <div>
                                            <Image className="object-cover aspect-square rounded-md self-center " src={post.URL} width={200} height={200} alt="Image" />
                                        </div>
                                        <div className="mt-5 text-lg line-clamp-3 font-semibold hover:underline leading-6">
                                            {post.title}
                                        </div>
                                        <div className="mt-5 text-sm leading-4 line-clamp-2 text-neutral-800">
                                            {post.desc}{" "}
                                        </div>
                                        <div className=" text-red-500 hover:underline mt-2 text-sm leading-5">
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
