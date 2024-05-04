import { PostHeader } from "@/app/_components/post-header";
import { client } from "../../../../sanity/lib/client";
import { Blogs } from "../../_components/blogs";
import Footer from "../../_components/footer";
import Header from "../../_components/header";
import { urlForImage } from "../../../../sanity/lib/image";
import { PostBody } from "@/app/_components/post-body";
import { TypedObject } from "sanity";
import { Tires } from "@/app/_components/affiliate";
import Link from "next/link";

export interface Products {
    manufacturer: string;
    name: string;
    spec: string;
    link: string;
    rating: string;
    category: string;
    rimType: string;
    tireType: string;
    productImage: {
        asset: {
            _ref: string;
            _type: "reference";
        };
    };
}
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
    authorPic: {
        asset: {
            _ref: string;
            _type: "reference";
        };
    };
    body: TypedObject;
    relatedProducts: Products[];

}

async function getData(slug: string): Promise<Post[]> {
    console.log(slug);
    const query = `*[_type == 'post' && slug.current == '${slug}'] | order(publishedAt asc){
    title,
    "name": author->name,
    "categories": categories->title,
    publishedAt,
    mainImage,
    body,
    "authorPic": author->image,
    relatedProducts[]-> ,

    }`
    const data = await client.fetch<Post[]>(query, {}, { cache: 'no-cache' });
    return data;
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);
    console.log(data[0].relatedProducts)
    const authorPicUrl = urlForImage(data[0]?.authorPic);
    return (
        <section>
            <Header />
            <div className="flex flex-col justify-center items-center px-16 py-4 text-base bg-white text-zinc-800 max-md:px-5">
                {/* post-header */}
                <PostHeader
                    key={params.slug}
                    title={data[0].title}
                    coverImage={urlForImage(data[0].mainImage)}
                    date={data[0].publishedAt}
                    author={{
                        name: data[0].name,
                        picture: authorPicUrl, // You need to provide the author's picture here
                    }}
                />
                {/* post-body */}
                <PostBody
                    content={data[0].body}
                />

            </div>
            <div>
                <div className="flex overflow-y-hidden pb-10">
                    {data[0].relatedProducts?.map((product: Products, index: number) => (
                        <div key={index}>
                            <div className="flex-none px-3">
                                <div className="max-w-xs scroll scroll-smooth  overfllow-x-scroll rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <div className="flex flex-col justify-between py-6 pr-6 pl-6 bg-white md:h-[700px] h-[550px] border-2 border-solid border-zinc-200 max-md:px-5">
                                        <div className="flex justify-center items-center px-9 pb-3 max-md:px-5">
                                            <img
                                                loading="lazy"
                                                srcSet={urlForImage(product.productImage)}
                                                className="aspect-[0.75] w-[200px]"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-between pb-6 mt-5 text-sm font-semibold leading-6 text-sky-900 bg-white">
                                            <div className="font-semibold tracking-wide text-center">{product.manufacturer}</div>
                                            <div className="mt-4 text-lg tracking-wide text-center">
                                                {product.name} -<br />
                                                {product.spec}
                                            </div>
                                            <div className="flex gap-2.5 self-stretch mt-1.5 text-neutral-600">
                                                <div className="justify-center px-3.5 py-2 bg-white rounded-md border border-gray-100 border-solid">
                                                    {product.category}
                                                </div>
                                                <div className="justify-center px-3.5 py-2 whitespace-nowrap bg-white rounded-md border border-gray-100 border-solid">
                                                    {product.rating}
                                                </div>
                                            </div>
                                            <div className="flex gap-2.5 self-stretch mt-1.5 text-neutral-600">
                                                {product.category !== 'Rims' && product.tireType && (
                                                    <div className="justify-center px-3.5 py-2 bg-white rounded-md border border-gray-100 border-solid">
                                                        {product.tireType}
                                                    </div>
                                                )}
                                                {product.category == 'Rims' && product.rimType && (
                                                    <div className="justify-center px-3.5 py-2 whitespace-nowrap bg-white rounded-md border border-gray-100 border-solid">
                                                        {product.rimType}
                                                    </div>

                                                )}
                                            </div>

                                        </div>
                                        <div className="justify-center items-center self-stretch px-16 py-5 mt-5 text-2xl tracking-wide text-center text-white capitalize whitespace-nowrap bg-red-600 rounded-none max-md:px-5">
                                            <Link className="flex justify-center" href={product.link || ''}>
                                                Buy Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Blogs />
            <Footer />
        </section>

    );
}
