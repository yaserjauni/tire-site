export async function HeroPost(): Promise<JSX.Element> {

  return (
    <section>
      <div className="flex overflow-hidden relative flex-col justify-center min-h-[600px]">
        <img
          loading="lazy"
          srcSet="/Sectionbg.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative justify-center items-center px-16 py-10 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col p-2.5  mb-1.5 max-w-full w-[1260px] max-md:mt-10">
            <div className="flex gap-2.5 items-center self-center text-3xl font-semibold leading-8 text-center text-white uppercase max-md:flex-wrap">
              <div className="flex-1 shrink-0 self-stretch my-auto h-px border-t border-white border-solid" />
              <div className="self-stretch max-md:max-w-full">
                Unbeatable Tire Services & Prices
              </div>
              <div className="flex-1 shrink-0 self-stretch my-auto h-px border-t border-white border-solid" />
            </div>
            <div className="justify-center pt-2.5 pl-2.5 mt-11 max-w-[1260px] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center self-stretch text-center text-white max-md:mt-8">
                    <img
                      loading="lazy"
                      src="/flat.svg"
                      className="max-w-full aspect-square w-[143px]"
                    />
                    <div className="mt-6 text-3xl font-semibold tracking-wider">
                      FLAT TIRE SERVICE
                    </div>
                    <div className="self-stretch mt-4 text-base leading-8">
                      we are specialize in preforming the most reliablbe patch
                      inside your tire.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch text-center text-white max-md:mt-8">
                    <img
                      loading="lazy"
                      src="/install.svg"
                      className="self-center max-w-full aspect-square w-[143px]"
                    />
                    <div className="mt-6 text-3xl font-semibold tracking-wider leading-9">
                      Tire installation & balancing
                    </div>
                    <div className="mt-4 text-base leading-8">
                      we offer fast and proffesional tire installtion & balancing
                      by using the best tire changer on the market
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center self-stretch text-center text-white max-md:mt-8">
                    <img
                      loading="lazy"
                      src="/recycle.svg"
                      className="max-w-full aspect-square w-[143px]"
                    />
                    <div className="mt-6 text-3xl font-semibold tracking-wider">
                      Tire Recycling
                    </div>
                    <div className="self-stretch mt-4 text-base leading-8">
                      we offer free tire recyling for everyone at our location.
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