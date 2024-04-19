import { Blogs } from "../_components/blogs";
import Footer from "../_components/footer";
import Header from "../_components/header";
import { SingleTires } from "../_components/singletires";

export default function Resources() {
    return (
        <main className="flex flex-col overflow-hidden hide-scrollbar">
            <Header />
            <SingleTires />
            <Blogs />
            <Footer />
        </main>
    );
}