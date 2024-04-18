import { Blogs } from "../_components/blogs";
import Footer from "../_components/footer";
import Header from "../_components/header";

export default function Resources() {
    return (
        <main className="flex flex-col overflow-hidden hide-scrollbar">
            <Header />
            <h1>Single Tires</h1>
            <Blogs />
            <Footer />
        </main>
    );
}