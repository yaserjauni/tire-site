import { PortableText } from '@portabletext/react';
import { PortableTextComponentProps, PortableTextListComponent } from '@portabletext/react';

import { TypedObject } from 'sanity';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlForImage } from '../../../sanity/lib/image';
import React from 'react';
import Link from 'next/link';
import { StarRating } from './star-rating';

type Props = {
  content: TypedObject;
};

type ImageValue = {
  _type: 'image';
  alt?: string; // Optional alt text for the image
  url: string; // URL of the image
};

type ProductListingValue = {
  _type: 'productListing';
  title: string;
  description: string;
  productImage: ImageValue;
  buttons?: { btnlink: string; btnText: string }[];
};

interface PortableTextLink {
  _type: 'link';
  href: string;
}

const SampleImageComponent = ({ value }: { value: ImageValue }) => {
  const { width } = getImageDimensions(value);
  return (
    <img
      src={urlForImage(value) || ''}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        display: 'inline-block',
        aspectRatio: width / 500,
      }}
    />
  );
};

const SampleListingComponent = ({ value }: { value: ProductListingValue }) => {
  const { title, description, productImage, buttons } = value;

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md border-slate-950 border-2 flex flex-col md:flex-row-reverse m-5 md:p-1 md:mr-20 hover:shadow-lg">
      <img
        src={productImage ? urlForImage(productImage) : '/logo.png'}
        alt={title}
        className="h-40 w-full md:w-32 object-contain"
      />
      <div className="p-2 flex flex-col flex-1 justify-center items-c md:px-10">
        <div>
          <h2 className="text-xl font-semibold">{title || ""}</h2>
          <p className="text-gray-600 md:line-clamp-2 line-clamp-3 pt-3 md:pl-3 text-xs md:text-base leading-snug">{description || ""}</p>
        </div>
        <div className='flex flex-wrap gap-5 mt-4'>
          {buttons && buttons.length > 0 ? (
            buttons.map((button, btnIndex) => (
              <Link key={btnIndex} href={button.btnlink || "/contact-us"} className="z-10 bg-gradient-to-r  from-red-500 to-[#ca0202] text-center text-nowrap text-white font-mono uppercase text-xs px-4 py-2 rounded-2xl transition duration-200 hover:scale-110 mr-1 mb-1">
                {button.btnText ? button.btnText : "Contact Us"}
              </Link>
            ))
          ) : (
            <>
              <Link href="/contact-us" className="bg-gradient-to-r from-red-500 to-[#ca0202] text-white font-mono uppercase text-xs px-4 py-2 rounded-2xl transition duration-200 hover:scale-110 mr-1 mb-1">
                Contact Us
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};



type ListComponentProps = {
  children: React.ReactNode;
  type?: 'bullet' | 'number' | 'checkmarks'; // Specify the valid types for the list
  index?: number;
  isInline?: boolean;
  renderNode?: (props: any) => React.ReactNode;
};

const ListComponent: React.FC<ListComponentProps> = ({ children, type }) => {
  if (type === 'bullet') {
    return <ul className="mt-xl">{children}</ul>;
  } else if (type === 'number') {
    return <ol className="mt-lg">{children}</ol>;
  } else if (type === 'checkmarks') {
    return <ol className="m-auto text-lg">{children}</ol>;
  }
  return <>{children}</>;
};


const components = {
  types: {
    image: SampleImageComponent,
    productListing: SampleListingComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
  list: ListComponent as PortableTextListComponent,// Add the list component here
  marks: {
    link: ({ value, children }: any) => {
      const { blank, href } = value
      return blank ? (
        <Link className='underline text-blue-600' href={href} >
          {children}
        </Link>
      ) : (
        <Link className='underline text-blue-600' href={href}>{children}</Link>
      )
    },
  },
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-5xl md:w-3/4 w-full mx-auto md:mx-10 prose lg:prose-l font-semibold leading-8">
      <PortableText value={content} components={components} />
    </div>
  );
}
