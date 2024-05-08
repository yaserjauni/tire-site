import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { Blogs } from "../_components/blogs";
import Footer from "../_components/footer";
import Header from "../_components/header";
import { UsedProducts } from "../_components/homePage";
import { UsedRims } from "../_components/usedrims";

async function getRimsData(): Promise<UsedProducts[]> {

    const query = `*[_type == 'used-products' && type == 'used-rims']{
        name,
        rating,
        price,
        type,
        rimType,
        tireType,
        productImage,
    }`;
    const data = await client.fetch<UsedProducts[]>(query, {}, { cache: 'no-cache' });
    data.forEach(product => {
        product.URL = urlForImage(product.productImage || "");
    });
    return data;
}

export default async function ShopRims() {

    const data = await getRimsData();
    return (
        <main className="flex flex-col overflow-hidden hide-scrollbar">
            <Header />
            <UsedRims data={data} />
            <Footer />
        </main>
    );
}