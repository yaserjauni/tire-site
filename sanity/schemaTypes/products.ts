import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        defineField({
            name: 'manufacturer',
            title: 'Manufacturer',
            type: 'string',
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'spec',
            title: 'Specification',
            type: 'string',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'string',
        }),
        defineField({
            name: 'productImage',
            title: 'Product image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'string',
        }),
    ],

    preview: {
        select: {
            title: 'name',
            rating: 'rating',
            media: 'productImage',
        },
    },
})
