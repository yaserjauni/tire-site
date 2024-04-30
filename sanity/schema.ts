import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import author from './schemaTypes/author'
import products from './schemaTypes/products'
import usedRims from './schemaTypes/used-rims'
import usedTires from './schemaTypes/used-tires'
import singleTires from './schemaTypes/single-tires'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, products, usedRims, usedTires, singleTires],
}
