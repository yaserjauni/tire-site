import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'topPicks',
    title: 'Top Picks (Home Page)',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'topPicks' }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'topProducts',
            title: 'Select Top Pick',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'products' } }],
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
    ],

    preview: {
        select: {
            title: 'title',
        },
    },
})
