
import * as React from "react";
import { client } from "../../../../sanity/lib/client";

import { SearchResult } from "@/app/_components/product-list";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

export interface Products {
    manufacturer: string;
    name: string;
    spec: string;
    link: string;
    rating: string;
    cat: string[];
    productImage: {
        asset: {
            _ref: string;
            _type: "reference";
        };
    };
}
interface ResultProps {
    search: string;
    season: string;
}
export async function getFilteredData({ search, season }: ResultProps): Promise<Products[]> {
    let query = ``;

    if (search && season) {
        query = `*[_type == 'products'  && '${season}' in categories[]->title && spec match '*${search}*']{
            manufacturer,
            name,
            spec,
            link,
            rating,
            "cat": categories[]->title,
            productImage,
        }`;
    } else if (season && search == "") {
        query = `*[_type == 'products'  && '${season}' in categories[]->title ]{
            manufacturer,
            name,
            spec,
            link,
            rating,
            "cat": categories[]->title,
            productImage,
        }`;
    } else if (search && !season) {
        query = `*[_type == 'products' && spec match '*${search}*']{
            manufacturer,
            name,
            spec,
            link,
            rating,
            "cat": categories[]->title,
            productImage,
        }`;
    } else {
        query = `*[_type == 'products' && 'Tire' in categories[]->title]{
            manufacturer,
            name,
            spec,
            link,
            rating,
            "cat": categories[]->title,
            productImage,
        }`;
    }

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

    const searchPara = `${width}/${profile}/${wheelSize}`;

    // Getting data based on extracted values
    let data = null;
    if (parameter.startsWith('Accessories')) {

        data = await getFilteredData({ search: "", season: "Accessories" });
    } else if (parameter.startsWith('Tire')) {
        data = await getFilteredData({ search: "", season: "Tire" });
    } else if (parameter.startsWith('Rims')) {
        data = await getFilteredData({ search: "", season: "Rims" });
    } else {
        data = await getFilteredData({ search: searchPara, season });
    }


    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <SearchResult data={data}></SearchResult>

            <Footer />
        </div>
    );
}
