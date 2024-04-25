import { client } from "../../../sanity/lib/client";
import { Blogs } from "./blogs";
import { HeroPost } from "./hero-post";
import { Intro } from "./intro";
import { Brands } from "./brands";
import { Accessories, Rims, Tires } from "./affiliate";
import { SearchBox } from "./search";



export async function HomePage() {
    return (
        <main className="flex flex-col hide-scrollbar">
            <Intro />
            <HeroPost />
            <SearchBox />
            <Tires />
            <Rims />
            <Accessories />
            <Blogs />
            <Brands />
        </main>
    );
}
