import Link from "next/link";
export function Intro() {
  return (
    <section>
      <div className="flex overflow-hidden relative z-1 flex-col flex-wrap justify-center content-start items-start rounded-[0px_0px_30px_0px] text-base leading-8 text-black shadow-2xl">
        <img
          loading="lazy"
          srcSet="/tire-bg.jpg"
          className="object-cover md:absolute inset-1 size-full"
        />
        <div className="flex flex-col items-start p-5 z-10 bg-white max-w-full w-[535px] md:px-10">
          <img
            loading="lazy"
            srcSet="/pressure.svg"
            className="max-w-full aspect-square w-[105px]"
          />
          <div className="justify-center px-6 py-1.5 mt-4 text-xs font-semibold leading-6 text-white rounded-2xl bg-neutral-900 tracking-[2px] max-md:px-5">
            WELCOME TO
          </div>
          <div className="mt-6 text-5xl font-bold leading-10 uppercase text-neutral-900">
            Your Kitchener
            <br />
            Region Tire Shop
          </div>
          <div className="mt-5">
            Our team of trained professionals here to give you the
          </div>
          <div>best advice or assistance in the selection of top tire</div>
          <div>options. We also offer an</div>
          <div>extensive list of additional services</div>
          <div>from buying bulk tires to installation of </div>
          <div>tires, for more information</div>
          <div className="flex flex-col justify-center px-8 py-4 mt-5 max-w-full text-sm leading-4 text-center text-white bg-neutral-900 rounded-[30px_30px_0px_30px] w-[350px] max-md:px-5">

            <Link href={"/contact-us"} className="block hover:bg-gray-300 hover:text-black whitespace-nowrap">
              <div className="flex justify-between items-center pl-12 max-md:px-5">
                <div className="font-semibold">
                  Contact Us
                </div>

                <div className="font-black"><img
                  loading="lazy"
                  src="/mobile.svg"
                  className="shrink-0 w-5"
                /></div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
