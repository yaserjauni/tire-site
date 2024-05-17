import { PortableText } from '@portabletext/react';
import { PortableTextComponentProps, PortableTextListComponent } from '@portabletext/react';

import { TypedObject } from 'sanity';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlForImage } from '../../../sanity/lib/image';
import React from 'react';
import Link from 'next/link';

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
      src={urlForImage(value)}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        display: 'inline-block',
        aspectRatio: width / 500,
      }}
    />
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
    <div className="max-w-5xl md:w-3/4 w-full mx-auto md:mx-3 prose lg:prose-l font-semibold leading-8">
      <PortableText value={content} components={components} />
    </div>
  );
}
