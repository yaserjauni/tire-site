import { Blogs } from "../_components/blogs";
import Footer from "../_components/footer";
import Header from "../_components/header";
import { UsedTires } from "../_components/usedtires";

export default function DidYouKnow() {
    return (
        <main className="flex flex-col overflow-hidden hide-scrollbar">
            <Header />
            <UsedTires />
            <Blogs />
            <Footer />
        </main>
    );
}