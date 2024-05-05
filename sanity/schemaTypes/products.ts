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
            name: 'rating',
            title: 'Rating',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Tire', value: 'Tire' },
                    { title: 'Accessories', value: 'Accessories' },
                    { title: 'Rims', value: 'Rims' },
                ],
                layout: 'radio', // This makes it a three-way selection
            },
        }),
        defineField({
            name: 'rimType',
            title: 'is Rim? Type:',
            type: 'string',
            options: {
                list: [
                    { title: 'Steel', value: 'Steel' },
                    { title: 'Alloy', value: 'Alloy' },
                ],
                layout: 'radio',
            },
        }),
        defineField({
            name: 'tireType',
            title: 'is Tire? Type:',
            type: 'string',
            options: {
                list: [
                    { title: 'All Season', value: 'All-Season' },
                    { title: 'Winter', value: 'Winter' },
                ],
                layout: 'radio',
            },
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
