
import { Blogs } from "./blogs";
import { HeroPost } from "./hero-post";
import { Intro } from "./intro";
import { Brands } from "./brands";
import { Tires } from "./affiliate";
import { Search } from "./search";
import { client } from "../../../sanity/lib/client";

import SlideCard from "./slide-card";
import { urlForImage } from "../../../sanity/lib/image";
import { Image } from "sanity";
import Link from "next/link";


export interface Products {
    name: string;
    spec: string;
    buttons: { btnlink: string; btnText: string; }[];
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
    title: string;
    topProducts: Products[];
    category: string;
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
    const data = await client.fetch<Post[]>(query, {}, { cache: 'no-cache' });
    data.forEach(post => {
        post.URL = urlForImage(post.mainImage);
    });
    return data;
}
export async function getData(category: string): Promise<Products[]> {

    const query = `*[_type == 'products'  && category == '${category}']{
        name,
        spec,
        buttons,
        rating,
        category,
        rimType,
        tireType,
        productImage,
    }`
    const data = await client.fetch<Products[]>(query, {}, { cache: 'no-cache' });
    data.forEach(product => {
        product.URL = urlForImage(product.productImage);
    });
    return data;
}
export async function getTopData(): Promise<TopProducts[]> {

    const query = `*[_type == 'topPicks']{
        title,
        topProducts[]->,
        category
    }`
    const data = await client.fetch<TopProducts[]>(query, {}, { cache: 'no-cache' });

    data.forEach(category => {
        category.topProducts.forEach(product => {
            product.URL = urlForImage(product.productImage);
        });
    });

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
    const data = await client.fetch<UsedProducts[]>(query, {}, { cache: 'no-cache' });
    return data;
}
export async function getDisplay(): Promise<string[]> {
    const query = `*[_type == 'imageSlide']{
        display,
    }`
    const data = await client.fetch<ImageSlideData[]>(query, {}, { cache: 'no-cache' });
    // Extract image URLs from data and return as an array of strings
    const imageUrls = data[0].display.map((image: Image) => urlForImage(image));
    return imageUrls;
}

export async function HomePage() {
    const data = await getAllData();
    const tiredata = await getTopData();

    const blogs = await getPostData();

    // console.log(top[0]);

    return (
        <main className=" hide-scrollbar relative pb-5">
            <Intro />
            <HeroPost />

            <Tires data={tiredata} />
            {/*<Rims data={rimData} />
            <Accessories data={accData} />s
            <Tires data={whiteLetterData} /> */}
            <Blogs data={blogs} />
        </main>
    );
}
