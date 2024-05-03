
import { Blogs } from "./blogs";
import { HeroPost } from "./hero-post";
import { Intro } from "./intro";
import { Brands } from "./brands";
import { Accessories, Rims, Tires } from "./affiliate";
import { Search } from "./search";
import { client } from "../../../sanity/lib/client";
import { SearchResult } from "./product-list";
import { ScrollCard } from "./scroll-cards";
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

export async function HomePage() {
    const data = await getAllData();
    const tiredata = await getData('Tire');
    const rimData = await getData('Rims');
    const accData = await getData('Accessories');


    return (
        <main className="flex flex-col hide-scrollbar">
            <Intro />
            <HeroPost />

            <Tires data={tiredata} />
            <Rims data={rimData} />
            <Accessories data={accData} />
            <Blogs />
            <ScrollCard data={data} />
        </main>
    );
}
