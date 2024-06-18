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
  _type: string; // Assuming this is a required property
  alt?: string; // Optional alt text for the image
  url: string; // URL of the image
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
const SampleListingComponent = ({ value }: { value: any }) => {
  const { title, description, productImage, rating, link } = value;

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md border-slate-950 border-2 flex flex-col md:flex-row-reverse m-5 md:p-1 md:mr-20 hover:shadow-lg">
      <img
        src={productImage ? urlForImage(productImage) : '/logo.png'}
        alt={title}
        className="h-40 w-full md:w-32 object-contain"
      />
      <div className="p-2 flex flex-col flex-1 justify-between md:px-10">
        <div>
          <h2 className="text-xl font-semibold">{title || ""}</h2>
          <p className="text-gray-600 md:line-clamp-2 line-clamp-3 pt-3 md:pl-3 text-xs md:text-base leading-snug">{description || ""}</p>
        </div>
        <div className="flex items-center justify-between mt-4 px-2 gap-5">
          <a href={link || ""} className="bg-red-500 hover:bg-red-400 text-white font-bold text-xs md:text-base py-1 px-2 border-b-4 border-red-700 hover:border-red-500 rounded">Check Price</a>
          {/* <p className="text-gray-700"><StarRating rating={rating || "0"} /></p> */}
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
