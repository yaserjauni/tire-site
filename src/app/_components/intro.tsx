import Link from "next/link";
import { Search } from "./search";

export function Intro() {
  return (
    <section >
      <div className="flex text-black w-full gap-3  flex-col justify-center  bg-[#040d12] items-center">
        <img
          loading="lazy"
          src="/logo.jpg"
          className="object-cover w-[300px] h-[300px]"
          alt="Logo"
        />
        <Search />
      </div>

    </section >

  );
}
