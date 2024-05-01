"use client"
import Link from "next/link";
import React, { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="flex flex-col  text-lg font-bold text-white bg-white">
      {isDesktop && (
        <section>
          <div className="flex justify-center items-center px-16 py-3.5 w-full text-sm font-semibold leading-5 text-white text-center bg-black max-md:px-5 max-md:max-w-full">
            <div className="flex gap-3 justify-start max-md:flex-wrap">
              <div className="flex gap-1.5 self-start whitespace-nowrap">
                <img
                  loading="lazy"
                  src="/phone.svg"
                  className="shrink-0 w-3.5 aspect-square"
                />
                <div className="my-auto text-white">1-519-827-7845</div>
              </div>
              <div className="flex gap-1.5 self-start whitespace-nowrap">
                <img
                  loading="lazy"
                  src="/mail.svg"
                  className="shrink-0 w-3.5 aspect-square"
                />
                <div className="flex-auto">Tireempirekitchner@gmail.com</div>
              </div>
              <div className="flex gap-2">
                <img
                  loading="lazy"
                  src="/cal.svg"
                  className="shrink-0 w-3.5 aspect-square"
                />
                <div className="flex-auto">
                  Hours: Mon - Fri 11:00 AM - 5:00 PM, Sat 11:00 AM - 3:00 PM EST
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex gap-5 justify-between self-center px-5 mt-4 w-full text-black uppercase leading-5 flex-wrap ">
            <Link href="/">
              <img
                loading="lazy"
                srcSet="/logo.jpg"
                className="shrink-0 aspect-[1] w-[150px]"
              />
            </Link>

            <div className="flex gap-3 px-5 align-end">

              <div className="flex-auto"><Link href={"/contact-us"} className="block p-4 hover:bg-gray-300 hover:text-black whitespace-nowrap">
                Contact Us
              </Link>
              </div>
              <img
                loading="lazy"
                src="/loc.svg"
                className="shrink-0 self-start aspect-[0.38]"
              />
            </div>
          </div> */}
          <div className="flex justify-center py-4  w-full uppercase bg-violet-950 leading-[111%] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-row gap-10 whitespace-nowrap px-2">
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
              <div><Link href="/blog-list" className="flex-auto">
                Blogs
              </Link></div>
              <div className="flex-auto"><Link href={"/contact-us"} >
                Contact Us
              </Link></div>
            </div>
          </div>
        </section>
      )}
      {isMobile && (
        <div className="flex justify-center items-center px-16 z-1 py-4  w-full uppercase border-t border-r border-b-2 border-l border-black border-solid bg-violet-950 leading-[111%] max-md:px-5 max-md:max-w-full">
          <div className="flex-grow max-md:max-w-full text-xl md:text-3xl text-center font-aclonica">
            <Link href={"/"}>
              Tire Empire
            </Link>
          </div>
          <button onClick={toggleDrawer}>
            <img
              loading="lazy"
              src="/List-Menu.svg"
              className="shrink-0 self-end w-10 aspect-square"
            />
          </button>
          {isDrawerOpen && (
            <div className="bg-black h-screen z-20 overflow-y-hidden w-full fixed text-sm top-0 right-0 shadow-md flex justify-center items-left py-1 w-full text-sm font-semibold leading-5 text-white text-left ">
              <ul>
                <li >
                  <div className="flex flex-row self-end gap-2 p-2 ">
                    <div className=" p-2 gap-3 justify-start max-md:flex-wrap">
                      <div className="flex gap-1.5 self-start">
                        <img
                          loading="lazy"
                          src="/phone.svg"
                          className="shrink-0 aspect-[0.79] w-[11px]"
                        />
                        <div className="my-auto text-white">1-519-827-7845</div>
                      </div>
                      <div className="flex gap-1.5 self-start whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="/mail.svg"
                          className="shrink-0 self-start w-3.5 aspect-square"
                        />
                        <div className="flex-auto">Tireempirekitchner@gmail.com</div>
                      </div>
                      <div className="flex gap-2">
                        <img
                          loading="lazy"
                          src="/cal.svg"
                          className="shrink-0 self-start aspect-[0.93] w-[13px]"
                        />
                        <div className="flex-auto">
                          Hours: Mon - Fri 11:00 AM - 5:00 PM, Sat 11:00 AM - 3:00 PM EST
                        </div>
                      </div>
                    </div>
                    <button onClick={toggleDrawer}>
                      <img
                        loading="lazy"
                        src="/cross.svg"
                        className="shrink-1 self-end min-w-5 max-w-10 bg-white aspect-[1]"
                      />
                    </button>
                  </div>
                </li>
                <li >
                  <Link href={"/"} className="block p-4 hover:bg-gray-300 hover:text-black whitespace-nowrap">
                    Home
                  </Link>
                </li>
                <li >
                  <Link href={"/used-tires"} className="block p-4 hover:bg-gray-300 hover:text-black whitespace-nowrap">
                    Used Tires
                  </Link>
                </li>
                <li>
                  <Link href={"/used-rims"} className="block p-4 hover:bg-gray-300 hover:text-black whitespace-nowrap">
                    Used Rims
                  </Link>
                </li>
                <li>
                  <Link href={"/single-tires"} className="block p-4 hover:bg-gray-300 hover:text-black whitespace-nowrap">
                    Single Tires
                  </Link>
                </li>
                <li>
                  <Link href={"/contact-us"} className="block p-4 hover:bg-gray-300 hover:text-black whitespace-nowrap">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;