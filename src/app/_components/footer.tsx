import Container from "@/app/_components/container";
import Link from "next/link";


export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="flex flex-col justify-center bg-sky-900">
        <div className="flex justify-center items-center px-10 py-7 w-full text-sm font-bold leading-5 text-center text-white uppercase bg-violet-900 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-w-full justify-center items-center max-md:flex-wrap">
            <div className="flex-auto"><Link href={"/"}>
              Home
            </Link></div>
            <div className="flex-auto"><Link href={"/used-tires"}>
              Used Tires
            </Link></div>
            <div className="flex-auto ">
              <Link href={"/used-rims"}>
                Used Rims
              </Link>
            </div>
            <div className="flex-auto"><Link href={"/single-tires"} >
              Single Tires
            </Link> </div>
            <div className="flex-auto"><Link href={"/contact-us"} >
              Contact Us
            </Link></div>
          </div>
        </div>
        <div className="flex justify-center items-center px-16 py-9 w-full bg-stone-950">
          <div className="max-w-full w-[1400px]">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[20%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-sm font-semibold leading-5 text-white ">
                  <div className="flex gap-1 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c6b279797ff653f0d92ef0624d9f25c01cb69f8150c0c6a82a44832d34e105b?"
                      className="shrink-0 aspect-[0.79] w-[11px]"
                    />
                    <div className="flex-auto my-auto">1-519-827-7845</div>
                  </div>
                  <div className="flex gap-1 mt-4 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb8210ca4f1848bfab6c8952d0e56b0db783ce8e8b166b0c9420ca9959e2960c?"
                      className="shrink-0 w-3.5 aspect-square"
                    />
                    <div className="flex-wrap">Tireempirekitchner@gmail.com</div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d9340d54eb8fbaee6d1fd34d7fe281f6e5f46f79e9810a8c17587675e52a7f8?"
                      className="shrink-0 self-start aspect-[0.93] w-[13px]"
                    />
                    <div className="flex-auto">Hours: Mon - Fri 11:00 AM - 5:00 PM,</div>
                  </div>
                  <div className="mt-1.5"> Sat 11:00 AM - 3:00 PM EST</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                <div className="mt-3.5 text-xl font-bold leading-5 text-white max-md:mt-10 max-md:max-w-full">
                  Tire Empire makes selling or trading your used tires a breeze!
                  Whether you're a dealership, wholesaler, or individual, they'll
                  buy your old tires in bulk, clearing up space in your garage or
                  storage hassle-free. You can also bring your used tires to swap
                  for ones that fit better. Say goodbye to dust-collecting tires
                  and hello to easy cash or a new set that suits your needs
                </div>
              </div>
              <div className="flex flex-col  w-[20%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="/logo.jpg"
                  className="shrink-0 w-[200px] max-w-full aspect-[1] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
