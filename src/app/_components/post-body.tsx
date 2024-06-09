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
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row-reverse p-2 m-2 hover:shadow-lg">
      <img
        src={productImage || '/logo.png'}
        alt={title}
        className="h-32 w-full md:w-32 object-contain"
      />
      <div className="p-4 flex flex-col flex-1 justify-between md:px-10">
        <div>
          <h2 className="text-xl font-semibold">{title || ""}</h2>
          <p className="text-gray-600 md:line-clamp-3 line-clamp-4 pt-3 md:pl-3 leading-snug">{description || ""}</p>
        </div>
        <div className="flex items-center justify-between mt-4 px-2">
          <a href={link || ""} className="text-blue-500 hover:underline">Show more</a>
          <p className="text-gray-700"><StarRating rating={rating || "0"} /></p>
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
