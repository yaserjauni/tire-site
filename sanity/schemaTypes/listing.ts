import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'listing',
    title: 'Listing',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
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
            name: 'rating',
            title: 'Rating',
            type: 'string',
        }),
        defineField({
            name: 'link',
            title: 'Link Button',
            type: 'url',
        }),
    ],
})
