
import { Blogs } from "./blogs";
import { HeroPost } from "./hero-post";
import { Intro } from "./intro";
import { Brands } from "./brands";
import { Accessories, Products, Rims, Tires } from "./affiliate";
import { Search } from "./search";
import { client } from "../../../sanity/lib/client";
import { SearchResult } from "./product-list";

export async function getData(category: string): Promise<Products[]> {

    const query = `*[_type == 'products'  && '${category}' in categories[]->title]{
        manufacturer,
        name,
        spec,
        link,
        rating,
        "cat": categories[]->title,
        productImage,
    }`
    const data = await client.fetch<Products[]>(query, {}, { cache: 'no-cache' });
    return data;
}

export async function HomePage() {
    const data = await getData('Tire');
    const rimData = await getData('Rims');
    const accData = await getData('Accessories');
    // console.log(data);
    const search = ""; // Set your search constant here
    const season = ""; // Set your season constant here

    return (
        <main className="flex flex-col hide-scrollbar">
            <Intro />
            <HeroPost />
            <Search>
                <SearchResult search={search} season={season} />
            </Search>
            {!search ? (
                <>
                    <Tires data={data} />
                    <Rims data={rimData} />
                    <Accessories data={accData} />
                </>
            ) : null}

            <Blogs />
            <Brands />
        </main>
    );
}
