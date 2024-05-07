import { Blogs } from "../_components/blogs";
import Footer from "../_components/footer";
import Header from "../_components/header";
import { UsedRims } from "../_components/usedrims";

export default function Training() {
    return (
        <main className="flex flex-col overflow-hidden hide-scrollbar">
            <Header />
            <UsedRims />

            <Footer />
        </main>
    );
}