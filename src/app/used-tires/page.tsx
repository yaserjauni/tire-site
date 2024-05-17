import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { Blogs } from "../_components/blogs";
import Footer from "../_components/footer";
import Header from "../_components/header";
import { UsedProducts } from "../_components/homePage";
import { UsedTires } from "../_components/usedtires";

async function getusedData(): Promise<UsedProducts[]> {
    const query = `*[_type == 'used-products' && type == 'used-tire']{
        name,
        rating,
        price,
        type,
        rimType,
        tireType,
        productImage,
    }`;
    const data = await client.fetch<UsedProducts[]>(query, {}, { cache: 'no-store' });
    data.forEach(product => {
        product.URL = urlForImage(product.productImage);
    });
    return data;
}

export default async function ShopTires() {

    const data = await getusedData();
    return (
        <main className="flex flex-col overflow-hidden hide-scrollbar">
            <Header />
            <UsedTires data={data} />

            <Footer />
        </main>
    );
}