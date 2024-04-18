import { client } from "../../../sanity/lib/client";
import { Blogs } from "./blogs";
import { HeroPost } from "./hero-post";
import { Intro } from "./intro";
import { Brands } from "./brands";



export async function HomePage() {
    return (
        <main className="flex flex-col hide-scrollbar">
            <Intro />
            <HeroPost />
            <Blogs />
            <Brands />
        </main>
    );
}
