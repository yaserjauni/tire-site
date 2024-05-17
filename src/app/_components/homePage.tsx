
import { Blogs } from "./blogs";
import { HeroPost } from "./hero-post";
import { Intro } from "./intro";
import { Brands } from "./brands";
import { Accessories, Rims, Tires } from "./affiliate";
import { Search } from "./search";
import { client } from "../../../sanity/lib/client";

import SlideCard from "./slide-card";
import { urlForImage } from "../../../sanity/lib/image";
import { Image } from "sanity";
import Link from "next/link";


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
export interface UsedProducts {
    name: string;
    rating: string;
    price: string;
    type: string;
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
export interface ImageSlideData {
    display: {
        _type: string;
        asset: {
            _ref: string;
            _type: 'reference';
        };
    }[];
}
export interface TopProducts {
    topProducts: Products[];
}
export interface Post {
    title: string;
    name: string;
    publishedAt: string;
    mainImage: {
        asset: {
            _ref: string;
            _type: "reference";
        };
    };
    URL: string;
    desc: string;
    currentSlug: string;
}

export async function getPostData(): Promise<Post[]> {
    const query = `*[_type == 'post'] | order(_createdAt desc) {
    title,  
    "name": author->name,
    publishedAt,
    mainImage,
    desc,
    "currentSlug": slug.current,
    body,
    "authorPic": author->image  
    }`
    const data = await client.fetch<Post[]>(query, {}, { cache: 'no-store' });
    data.forEach(post => {
        post.URL = urlForImage(post.mainImage);
    });
    return data;
}
export async function getData(category: string): Promise<Products[]> {

    const query = `*[_type == 'products'  && category == '${category}']{
        
        name,
        spec,
        link,
        rating,
        category,
        rimType,
        tireType,
        productImage,
    }`
    const data = await client.fetch<Products[]>(query, {}, { cache: 'no-store' });
    return data;
}
export async function getTopData(category: string): Promise<TopProducts[]> {

    const query = `*[_type == 'topPicks'  && title == '${category}']{
        
        topProducts[]->,
    }`
    const data = await client.fetch<TopProducts[]>(query, {}, { cache: 'no-store' });
    return data;
}
export async function getAllData(): Promise<UsedProducts[]> {

    const query = `*[_type == 'used-products']{
        name,
        type,
        rimType,
        tireType,
        productImage,
    }`
    const data = await client.fetch<UsedProducts[]>(query, {}, { cache: 'no-store' });
    return data;
}
export async function getDisplay(): Promise<string[]> {
    const query = `*[_type == 'imageSlide']{
        display,
    }`
    const data = await client.fetch<ImageSlideData[]>(query, {}, { cache: 'no-store' });
    // Extract image URLs from data and return as an array of strings
    const imageUrls = data[0].display.map((image: Image) => urlForImage(image));
    return imageUrls;
}

export async function HomePage() {
    const data = await getAllData();
    const tiredata = await getTopData('New Tires | Top Picks');
    const rimData = await getTopData('New Rims | Top Picks');
    const accData = await getTopData('New Accessories');
    const whiteLetterData = await getTopData('White Letter Tires');
    const blogs = await getPostData();

    // console.log(top[0]);

    return (
        <main className=" hide-scrollbar relative pb-5">
            <Intro />
            <HeroPost />
            <header className="flex flex-row justify-between border-t bg-violet-950 z-5 mb-5">
                <div className="items-start self-start pt-4 pr-4 pb-4 pl-4 md:pl-16  md:text-2xl text-xl font-semibold text-white ">
                    New Tires | Top Picks
                </div>
                <Link className="flex justify-center" href={'/product/Tire'}>
                    <div className="items-start self-end pt-4 pr-4 pb-4  md:pr-16 md:text-2xl text-xl font-semibold underline text-white ">
                        Show All
                    </div>
                </Link>
            </header>
            <Tires data={tiredata} />
            <Rims data={rimData} />
            <Accessories data={accData} />
            <header className="flex flex-row justify-between border-t bg-violet-950 z-5 mb-5">
                <div className="items-start self-start pt-4 pr-4 pb-4 pl-4 md:pl-16  md:text-2xl text-xl font-semibold text-white ">
                    White Letter Tires | Top Picks
                </div>
                <Link className="flex justify-center" href={'/product/Tire'}>
                    <div className="items-start self-end pt-4 pr-4 pb-4  md:pr-16 md:text-2xl text-xl font-semibold underline text-white ">
                        Show All
                    </div>
                </Link>
            </header>
            <Tires data={whiteLetterData} />
            <Blogs data={blogs} />
        </main>
    );
}
