import Link from "next/link";
import { Search } from "./search";
export function Intro() {
  return (
    <section>
      <div className="flex overflow-hidden relative z-1 flex-col items-center flex-wrap justify-center content-start items-start rounded-[0px_0px_30px_0px] text-base leading-8 text-black shadow-2xl">
        <img
          loading="lazy"
          srcSet="/tire-bg.jpg"
          className="object-cover md:absolute inset-1 size-full"
        />
        <div className="flex flex-wrap items-start z-10 bg-white max-w-full w-[580px] ">
          <Search />
        </div>
      </div>
    </section>
  );
}
