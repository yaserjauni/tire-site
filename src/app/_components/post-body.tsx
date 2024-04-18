import { PortableText } from '@portabletext/react'
import { TypedObject } from 'sanity';
type Props = {
  content: TypedObject;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto prose lg:prose-xl ">
      <PortableText value={content} />
    </div>
  );
}
