import Image from "next/image";
import Link from "next/link";
import { BiLocationPlus } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="flex flex-col bg-sky-900">
        <div className="flex justify-center items-center px-10 py-7 w-full text-sm font-bold leading-5 text-center text-white uppercase bg-violet-900 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-w-full justify-center items-center max-md:flex-wrap">
            {[
              { href: "/", text: "Home" },
              { href: "/used-tires", text: "Used Tires" },
              { href: "/used-rims", text: "Used Rims" },
              { href: "/single-tires", text: "Single Tires" },
              { href: "/contact-us", text: "Contact Us" },
              { href: "/blog-list", text: "Blogs" }
            ].map(({ href, text }) => (
              <div key={href} className="flex-auto">
                <Link href={href}>{text}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center px-2 py-6 w-full bg-stone-950">
          <div className="w-full md:w-1/3 flex flex-col items-center pr-10 mb-4 md:mb-0">
            <ContactInfo />
          </div>
          <div className="w-full md:w-1/3 flex items-center justify-center mb-4 md:mb-0">
            <Link href="https://maps.app.goo.gl/vT1nLMd8dNB8pHvY7" className="w-full h-full">
              <Image

                width={800}
                height={200}
                alt="Tire Empire"
                src="/smallMap.png"
                className="bg-cover w-full h-auto"
              />
            </Link>
          </div>

          <div className="w-full md:w-1/3 flex md:flex-col flex-col-reverse mr-5 justify-start ">
            <Link href="/" className="flex flex-col items-center pt-5">

              <div className="flex flex-row ">
                <Image
                  loading="lazy"
                  width={55} // Provide specific width and height for next/image
                  height={55}
                  alt="Tire Empire"
                  src="/tire.svg"
                  className="aspect-square"
                />
                <span className="text-4xl text-[#05fd00] uppercase leading-[111%] font-semibold mt-2">Empire Tire</span>
              </div>
            </Link>
            <div className="flex flex-row md:pt-10 pt-5 ml-2 lg:ml-20 items-left md:justify-center ">
              <SlLocationPin size={25} color="white" />
              <div className="flex flex-col text-lg space-y-2 font-semibold ml-2 leading-5 text-white " >
                <div >63 Courtland Ave E, Kitchener, Unit C,</div>
                <div>N2G 2T6, ON Canada</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

const ContactInfo = () => (
  <div className="flex flex-col md:text-lg text-base justify-center space-y-4 font-semibold leading-5 text-white">
    <ContactDetail iconSrc="/phone.svg" detail="1-519-827-7854" />
    <ContactDetail iconSrc="/mail.svg" detail="Tireempirekitchener@gmail.com" />
    <ContactDetail iconSrc="/cal.svg" detail="Hours: Mon-Fri 11:00 AM - 5:00 PM," />
    <div className="pl-4">Sat 11:00 AM - 3:00 PM EST</div>
  </div>
);

interface ContactDetailProps {
  iconSrc: string;
  detail: string;
}

const ContactDetail = ({ iconSrc, detail }: ContactDetailProps) => (
  <div className="flex gap-1 mt-4">
    <img loading="lazy" src={iconSrc} className="shrink-0 md:w-[25px] sm:w-[11px] aspect-[0.79]" />
    <div className="flex-auto my-auto">{detail}</div>
  </div>
);

export default Footer;