
import { Blogs } from "./blogs";
import { HeroPost } from "./hero-post";
import { Intro } from "./intro";
import { Brands } from "./brands";
import { Accessories, Rims, Tires } from "./affiliate";
import { Search } from "./search";
import { client } from "../../../sanity/lib/client";
import { SearchResult } from "./product-list";

import SlideCard from "./slide-card";
import { urlForImage } from "../../../sanity/lib/image";
import { Image } from "sanity";


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
export interface UsedProducts {
    name: string;
    manufacturer: string;
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

export async function getData(category: string): Promise<Products[]> {

    const query = `*[_type == 'products'  && category == '${category}']{
        manufacturer,
        name,
        spec,
        link,
        rating,
        category,
        rimType,
        tireType,
        productImage,
    }`
    const data = await client.fetch<Products[]>(query, {}, { cache: 'no-cache' });
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
    const tiredata = await getData('Tire');
    const rimData = await getData('Rims');
    const accData = await getData('Accessories');


    return (
        <main className="flex flex-col hide-scrollbar pb-5">
            <Intro />
            <HeroPost />

            <Tires data={tiredata} />
            <Rims data={rimData} />
            <Accessories data={accData} />
            <Blogs />

        </main>
    );
}
