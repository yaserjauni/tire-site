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
import { getPostData } from "@/app/_components/homePage";
import { StarRating } from "@/app/_components/star-rating";

export interface Products {

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
async function getAllData(): Promise<Post[]> {

    const query = `*[_type == 'post'] | order(publishedAt asc){
    title,
    "name": author->name,
    publishedAt,
    mainImage,
    body,
    "authorPic": author->image,
    relatedProducts[]-> ,

    }`
    const data = await client.fetch<Post[]>(query, {}, { cache: 'no-cache' });
    return data;
}
async function getData(slug: string): Promise<Post[]> {

    const query = `*[_type == 'post' && slug.current == '${slug}'] | order(publishedAt asc){
    title,
    "name": author->name,
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
    const blogs = await getPostData();

    const authorPicUrl = urlForImage(data[0]?.authorPic);
    return (
        <div className="w-full overflow-hidden">
            <Header />
            <div className="flex flex-col justify-center items-center px-10 py-4 md:py-8 text-base bg-white text-zinc-800 max-md:px-5">
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
                <main className="md:flex flex-col w-full md:flex-row  justify-between">
                    <PostBody
                        content={data[0].body}
                    />
                    {data[0].relatedProducts && (
                        <div className="md:w-1/4 md:justify-end md:pl-20 ">
                            <div className="md:relative right-0 mb-3 md:text-2xl text-xl font-semibold text-Black ">
                                Related Products
                            </div>
                            <div className="md:absolute md:right-5 overflow-scroll md:overflow-x-hidden flex flex-row md:flex-col pb-3 md:pl-3 md:ml-10 mx-3 gap-10">
                                {data[0].relatedProducts.map((item, index) => (
                                    <div key={index} className="bg-slate-100 min-w-[190px] max-w-[190px] justify-evenly rounded-lg shadow-lg p-4">
                                        <div className="relative overflow-hidden">
                                            <img className="object-fill w-[150px] h-[150px] rounded-lg" src={urlForImage(item.productImage)} alt="Product" />
                                        </div>
                                        <h3 className="text-md font-bold text-gray-900 mt-2 line-clamp-1">{item.name || "Product Name"}</h3>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="text-gray-500 text-sm mt-2">{item.spec || ''} </p>
                                            <p className="text-gray-500 text-sm mt-2">{item.tireType || ''} </p>
                                        </div>
                                        <p className="text-gray-500 text-sm mt-2"><StarRating rating={item.rating || '0'} /></p>
                                        <div className="flex items-center justify-between mt-2">
                                            <Link href={item.link || ""} className="bg-gray-900 text-white py-2 px-4  rounded-full font-bold hover:bg-gray-800">Buy now</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    )}
                </main>

            </div>

            <Blogs data={blogs} />
            <Footer />
        </div>
    );
}
