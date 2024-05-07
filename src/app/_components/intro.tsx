import Link from "next/link";
import { Search } from "./search";
import { getDisplay } from "./homePage";
import SlideCard from "./slide-card";

export async function Intro() {
  const imageUrls = await getDisplay();
  return (
    <main >
      <div className="block " >
        <div className="m-10">
          <SlideCard imageUrls={imageUrls} />
        </div>


      </div>
      <Search />

    </main >

  );
}
