import { Blogs } from "../_components/blogs";
import Footer from "../_components/footer";
import Header from "../_components/header";
import { SearchBox } from "../_components/search";
import { UsedRims } from "../_components/usedrims";

export default function Training() {
    return (
        <main className="flex flex-col overflow-hidden hide-scrollbar">
            <Header />
            <SearchBox />

            <Blogs />
            <Footer />
        </main>
    );
}