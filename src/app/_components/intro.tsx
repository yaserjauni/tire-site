import Link from "next/link";
import { Search } from "./search";

export function Intro() {
  return (
    <section>
      <div className="flex overflow-hidden relative z-1 flex-col md:flex-row items-center flex-wrap justify-center content-end items-end text-base leading-8 bg-black text-black">
        <div className="flex w-full md:w-1/2 overflow-hidden">
          <img
            loading="lazy"
            srcSet="/logo.jpg"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 bg-white p-4">
          <Search />
        </div>
      </div>
    </section>
  );
}
