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
import { RelatedProducts } from "@/app/_components/side-products";

export interface Products {

    name: string;
    spec: string;
    link: string;
    btn: string;
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
    URL: string;
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
    data.forEach(post => {
        post.relatedProducts.forEach(product => {
            if (product.productImage?.asset?._ref) {
                product.URL = urlForImage(product.productImage);
            }
        });
    });
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
                <main className="md:flex flex-col w-full md:flex-row md:w-5/6 justify-between">
                    <PostBody
                        content={data[0].body}
                    />
                    {data[0].relatedProducts && (
                        <div className="md:w-1/5 md:justify-end ">
                            <div className="pt-7 md:text-2xl text-xl font-semibold text-Black ">
                                Related Products
                            </div>

                            <RelatedProducts data={data[0].relatedProducts} />
                        </div>

                    )}
                </main>

            </div>

            <Blogs data={blogs} />
            <Footer />
        </div>
    );
}
