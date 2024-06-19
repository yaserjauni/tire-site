'use client'
import Image from "next/image";
import Link from "next/link";
import { Post } from "./homePage";
import Slider from "react-slick";

export function Blogs({ data }: { data: Post[] }) {
    var settings = {
        arrows: true,
        easing: 'easeOutQuad',
        draggable: true,
        centerMode: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 700,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 700,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: true,
                    speed: 700,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: false,
                }
            }
        ]
    };


    return (
        <section>
            <div className="flex flex-col mb-5" id="blog-section">
                <header className="flex flex-row justify-between  bg-violet-950 z-5 my-5">
                    <div className="items-start self-start pt-4 pr-4 pb-4 pl-4 md:pl-16 md:text-2xl text-xl font-semibold  text-white ">
                        Blogs
                    </div>
                    <Link className="flex justify-center" href={'/blog-list'}>
                        <div className="items-start self-end pt-4 pr-4 pb-4 md:pr-16 md:text-2xl text-xl font-semibold underline text-white ">
                            Show All
                        </div>
                    </Link>
                </header>
                <div className=" overflow-visible md:m-10 ">
                    <Slider {...settings}>
                        {data.map((post: Post, index: number) => (
                            <div key={index} className="items-center h-[500px] w-[300px] px-2 text-xs font-medium text-center text-black pt-2 bg-slate-100 rounded-lg  shadow-md transition duration-200 hover:scale-90">                                <Link className="text-zinc-500 " href={`/blog/${post.currentSlug}`} title={post.title}>
                                <div className="flex flex-col  px-2  font-medium text-center text-black">
                                    <div>
                                        <Image className="object-cover aspect-square rounded-md self-center" src={post.URL} width={400} height={400} alt="Image" />
                                    </div>
                                    <div className="mt-5 text-lg text-black md:text-base font-semibold  hover:text-red-500 line-clamp-3 leading-6">
                                        {post.title}
                                    </div>
                                    <div className="mt-5 text-sm leading-4 line-clamp-3 sm:line-clamp-2 text-neutral-800">
                                        {post.desc}{" "}
                                    </div>
                                    <div className=" text-red-500 text-center hover:underline mt-2 text-sm leading-5">
                                        Read more...
                                    </div>
                                </div>
                            </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
