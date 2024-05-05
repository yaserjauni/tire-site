import Link from "next/link";
import { Search } from "./search";
import { getDisplay } from "./homePage";
import SlideCard from "./slide-card";

export async function Intro() {
  const imageUrls = await getDisplay();
  return (
    <section >
      <div className="pt-10 text-black w-full gap-20  flex-col justify-center  bg-[#040d12] items-center">
        <SlideCard imageUrls={imageUrls} />
        <Search />
      </div>

    </section >

  );
}
