import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'

import post from './schemaTypes/post'
import author from './schemaTypes/author'
import products from './schemaTypes/products'
import singleTires from './schemaTypes/single-tires'
import usedProducts from './schemaTypes/used-products'
import imageSlide from './schemaTypes/image-slide'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, blockContent, products, usedProducts, singleTires, imageSlide],
}
