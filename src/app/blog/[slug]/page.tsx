import { PostHeader } from "@/app/_components/post-header";
import { client } from "../../../../sanity/lib/client";
import { Blogs } from "../../_components/blogs";
import Footer from "../../_components/footer";
import Header from "../../_components/header";
import { urlForImage } from "../../../../sanity/lib/image";
import { PostBody } from "@/app/_components/post-body";
import { TypedObject } from "sanity";

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
    authorPic: {
        asset: {
            _ref: string;
            _type: "reference";
        };
    };
    body: TypedObject;
}

async function getData(slug: string): Promise<Post[]> {
    const query = `*[_type == 'post' && slug.current == '${slug}'] | order(publishedAt asc){
    title,
    "name": author->name,
    "categories": categories->title,
    publishedAt,
    mainImage,
    body,
    "authorPic": author->image
    }`
    const data = await client.fetch<Post[]>(query);
    return data;
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);
    const authorPicUrl = urlForImage(data[0].authorPic);
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
            <Blogs />
            <Footer />
        </section>

    );
}
