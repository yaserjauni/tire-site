import * as React from "react";
import { SearchResult } from "@/app/_components/product-list";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import { client } from "../../../../sanity/lib/client";
import { Products } from "@/app/_components/homePage";
import { urlForImage } from "../../../../sanity/lib/image";




async function getParaData(parameter: string): Promise<Products[]> {


    const query = `*[ category == '${parameter}' || type == 'used-tire'] {
        name,
        spec,
        link,
        rating,
        category,
        rimType,
        tireType,
        productImage,
    }`;
    const data = await client.fetch<Products[]>(query, {}, { cache: 'no-store' });
    data.forEach(product => {
        product.URL = urlForImage(product.productImage);
    });
    return data;
}
export default async function SearchPage() {
    const data = await getParaData('Tire');

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <SearchResult data={data} />
            <Footer />
        </div>
    );
}

