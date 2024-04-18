import { Blogs } from "../_components/blogs";
import Footer from "../_components/footer";
import Header from "../_components/header";

export default function DidYouKnow() {
    return (
        <main className="flex flex-col overflow-hidden hide-scrollbar">
            <Header />
            <h1> used tires in works</h1>
            <Blogs />
            <Footer />
        </main>
    );
}