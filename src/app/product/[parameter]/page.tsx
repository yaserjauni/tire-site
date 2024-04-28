
import * as React from "react";
import { client } from "../../../../sanity/lib/client";

import { getFilteredData, SearchResult } from "@/app/_components/product-list";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";



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

    let searchPara = ``
    if (
        !parameter.startsWith('accessories') &&
        !parameter.startsWith('tire') &&
        !parameter.startsWith('rims')
    ) {
        searchPara = `${width}/${profile}/${wheelSize}`;
    }

    // Getting data based on extracted values
    console.log(season);
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
