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
        <div className="flex justify-center items-center px-6 py-9 w-full bg-stone-950">
          <div className="max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[20%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-sm font-semibold leading-5 text-white   ">
                  <div className="flex gap-1 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="/phone.svg"
                      className="shrink-0 aspect-[0.79] w-[11px]"
                    />
                    <div className="flex-auto my-auto">1-519-827-7845</div>
                  </div>
                  <div className="flex gap-1 mt-4 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="/mail.svg"
                      className="shrink-0 w-3.5 aspect-square"
                    />
                    <div className="flex-wrap whitespace-wrap">Tireempirekitchner@gmail.com</div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    <img
                      loading="lazy"
                      src="/cal.svg"
                      className="shrink-0 self-start aspect-[0.93] w-[13px]"
                    />
                    <div className="flex-auto">Hours: Mon - Fri 11:00 AM - 5:00 PM,</div>
                  </div>
                  <div className="mt-1.5 pr-1 "> Sat 11:00 AM - 3:00 PM EST</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                <div className="mt-3.5 mx-5 text-l font-semibold leading-5 text-white max-md:mt-10 max-md:max-w-full">
                  Tire Empire offers a range of services tailored to your needs, from tire sales to expert advice. Whether you're a dealership, wholesaler, or individual, they provide convenient options to meet your requirements. Contact Tire Empire for a hassle-free experience and to learn more about their services.
                </div>
              </div>
              <div className="flex flex-col justify-center item-center w-[20%] max-md:ml-0 max-md:w-full">
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
