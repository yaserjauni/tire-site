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
            name: 'width',
            title: 'Width',
            type: 'string',
        }),
        defineField({
            name: 'profile',
            title: 'Profile',
            type: 'string',
        }),
        defineField({
            name: 'size',
            title: 'Size',
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
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'productImage',
        },
    },
})
