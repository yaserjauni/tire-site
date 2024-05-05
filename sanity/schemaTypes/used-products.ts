import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'used-products',
    title: 'Used Products',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
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
            name: 'price',
            title: 'Price',
            type: 'string',
        }),
        defineField({
            name: 'type',
            title: 'Type of',
            type: 'string',
            options: {
                list: [
                    { title: 'Used Tire', value: 'used-tire' },
                    { title: 'Single Tire', value: 'single-tire' },
                    { title: 'Used Rims', value: 'used-rims' },
                ],
                layout: 'radio',
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
            media: 'productImage',
        },
    },
})
