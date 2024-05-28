import Image from "next/image";

export async function HeroPost(): Promise<JSX.Element> {

  return (
    <section>
      <div className="flex overflow-hidden relative flex-col justify-center min-h-[500px]">
        <img
          loading="lazy"
          srcSet="/Sectionbg.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative justify-center items-center px-5 py-5 w-full max-md:px-5">
          <div className="flex flex-col max-w-full w-[1260px] ">
            <div className="flex  items-center self-center text-4xl font-semibold leading-10 text-center text-white uppercase max-md:flex-wrap">

              <h3 className="self-stretch ">
                Our Services Include
              </h3>

            </div>
            <div className="justify-center pt-2.5 pl-2.5 mt-8 max-w-[1260px]  ">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center self-stretch text-center text-white ">
                    <img
                      loading="lazy"
                      src="/flat.svg"
                      className="max-w-full aspect-square w-[143px]"
                    />
                    <h2 className="mt-6 text-3xl font-semibold tracking-wider">
                      Flat Tire Service
                    </h2>
                    <h1 className="self-stretch mt-4 text-base leading-8">
                      We specialize in performing the most reliable patch inside your tire in the Kitchener-Waterloo-Cambridge area.
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch text-center text-white max-md:mt-8">
                    <img
                      loading="lazy"
                      src="/recycle.svg"
                      className="self-center max-w-full aspect-square w-[150px]"
                    />
                    <h2 className="mt-6 text-3xl font-semibold tracking-wider leading-9">
                      Tire Installation & Balancing
                    </h2>
                    <h1 className="mt-4 text-base leading-8">
                      We offer fast and professional tire installation & balancing by using the best tire changer on the market in Kitchener-Waterloo-Cambridge.
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center self-stretch text-center text-white max-md:mt-8">
                    <img
                      loading="lazy"
                      src="/recycle2.png"
                      className="max-w-full aspect-square w-[150px]"
                    />
                    <h2 className="mt-6 text-3xl font-semibold tracking-wider">
                      Tire Recycling
                    </h2>
                    <h1 className="self-stretch mt-4 text-base leading-8">
                      We offer free tire recycling for everyone at our location in Kitchener-Waterloo-Cambridge.
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center self-stretch text-center text-white max-md:mt-8">
                    <Image
                      loading="lazy"
                      width={512}
                      height={512}
                      alt="sell your used tires"
                      src="/wheel.png"
                      className="max-w-full aspect-square w-[160px]"
                    />
                    <div className="mt-6 text-3xl font-semibold tracking-wider">
                      Sell your used Tires
                    </div>
                    <div className="self-stretch mt-4 text-base leading-8">
                      We offer top dollers for used tires in Kitchener - Waterloo - Cambridge area
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}