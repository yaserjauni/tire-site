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
            name: 'buttons',
            type: 'array',
            title: 'Link Buttons',
            of: [{
                type: 'object',
                fields: [
                    { name: 'btnlink', type: 'string', title: 'Affiliate Link' },
                    { name: 'btnText', type: 'string', title: 'Button Label' },
                ],
            }],
        }),
        defineField({
            name: 'link',
            title: 'Link Button',
            type: 'url',
        }),
    ],
})
