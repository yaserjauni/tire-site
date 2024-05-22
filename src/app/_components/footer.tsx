import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="flex flex-col justify-center bg-sky-900">
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
        <div className="flex justify-center items-center px-4 py-9 w-full bg-stone-950">
          <div className="max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                <ContactInfo />
              </div>
              <div className="flex flex-col ml-5  justify-center item-center text-left w-[55%] max-md:ml-0 max-md:w-full">
                <div className="mt-3.5 mx-5 text-l font-semibold leading-5 text-white max-md:mt-10 max-md:max-w-full">
                  Tire Empire offers a range of services tailored to your needs, from tire sales to expert advice. Whether you're a dealership, wholesaler, or individual, they provide convenient options to meet your requirements. Contact Tire Empire for a hassle-free experience and to learn more about their services.
                </div>
              </div>
              <div className="flex justify-center md:justify-start item-center md:items-start w-[30%] max-md:ml-0 max-md:w-full">
                <Link href="/" className="flex items-start pt-10 space-x-2">
                  <Image
                    loading="lazy"
                    width={55} // Provide specific width and height for next/image
                    height={55}
                    alt="Tire Empire"
                    src="/tire.svg"
                    className="aspect-square"
                  />
                  <span className="text-4xl text-[#05fd00] uppercase leading-[111%] font-semibold mt-2">Empire Tire</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const ContactInfo = () => (
  <div className="flex flex-col text-sm font-semibold leading-5 text-white">
    <ContactDetail iconSrc="/phone.svg" detail="1-519-827-7854" />
    <ContactDetail iconSrc="/mail.svg" detail="Tireempirekitchener@gmail.com" />
    <ContactDetail iconSrc="/cal.svg" detail="Hours: Mon - Fri 11:00 AM - 5:00 PM, Sat 11:00 AM - 3:00 PM EST" />
  </div>
);

interface ContactDetailProps {
  iconSrc: string;
  detail: string;
}

const ContactDetail = ({ iconSrc, detail }: ContactDetailProps) => (
  <div className="flex gap-1 mt-4">
    <img loading="lazy" src={iconSrc} className="shrink-0 w-[11px] aspect-[0.79]" />
    <div className="flex-auto my-auto">{detail}</div>
  </div>
);

export default Footer;
