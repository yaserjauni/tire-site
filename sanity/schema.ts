import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'

import post from './schemaTypes/post'
import author from './schemaTypes/author'
import products from './schemaTypes/products'
import singleTires from './schemaTypes/single-tires'
import usedProducts from './schemaTypes/used-products'
import imageSlide from './schemaTypes/image-slide'
import topPicks from './schemaTypes/top-picks'
import listing from './schemaTypes/listing'
import button from './schemaTypes/button'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, blockContent, topPicks, products, usedProducts, singleTires, imageSlide, listing],
}
