import * as React from "react";
import { client } from "../../../../sanity/lib/client";

import { SearchResult } from "@/app/_components/product-list";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import { Products } from "@/app/_components/homePage";

// interface ResultProps {
//     search: string;
//     season: string;
//     width: string;
//     profile: string;
//     wheelSize: string;
// }

async function getFilteredData({ search, season, width, profile, wheelSize }: { search: string, season: string, width: string, profile: string, wheelSize: string }): Promise<Products[]> {
    let categoryCondition = '';
    if (season === 'Accessories' || season === 'Tire' || season === 'Rims') {
        categoryCondition = `category == '${season}'`;
    } else {
        categoryCondition = `tireType == '${season}'`;
    }

    const query = `*[(_type == 'products' || _type == 'used-products') && ( ${categoryCondition} || spec match '*${search}*' || name match '*${search}*') && (name match '*${width}*' || spec match '*${width}*') && (name match '*${profile}*' || spec match '*${profile}*') && (name match '*${wheelSize}*' || spec match '*${wheelSize}*')] {
        name,
        spec,
        link,
        rating,
        category,
        rimType,
        tireType,
        productImage,
    }`;
    const data = await client.fetch<Products[]>(query, {}, { cache: 'no-cache' });
    return data;
}

export default async function ProductPage({
    params
}: {
    params: { parameter: string }
}) {
    const parameter = decodeURIComponent(params.parameter);

    // Extracting values from the parameter
    const widthMatch = parameter.match(/width=(.*?)\*/);
    const profileMatch = parameter.match(/\+profile=(.*?)\*/);
    const wheelSizeMatch = parameter.match(/\+wheelSize=(.*?)\*/);
    const seasonMatch = parameter.match(/\+season=(.*?)\*/);

    const width = widthMatch ? widthMatch[1] : '';
    const profile = profileMatch ? profileMatch[1] : '';
    const wheelSize = wheelSizeMatch ? wheelSizeMatch[1] : '';
    const season = seasonMatch ? seasonMatch[1] : '';

    // Getting data based on extracted values
    let data = null;
    if (season || width || profile || wheelSize) {
        data = await getFilteredData({ search: "", season, width, profile, wheelSize });
    } else {
        data = await getFilteredData({ search: "", season: "Tire", width, profile, wheelSize }); // Default to Tire if no season or search parameters
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <SearchResult data={data} />
            <Footer />
        </div>
    );
}

