// import { Result } from "../_components/affiliate";
import Footer from "../_components/footer";
import Header from "../_components/header";
import { getData } from "../_components/homePage";
import { Search } from "../_components/search";



export default function Products() {
    const data = getData('Tire');
    return (
        <main className="overflow-x-visible ">
            <Header />
            {/* <Search /> */}
            {/* <Result search={'22'} season={'All Season'} /> */}
            <Footer />
        </main>
    );
}
