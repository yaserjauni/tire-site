import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'topPicks',
    title: 'Top Picks (Home Page)',
    type: 'document',
    fields: [
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
    ],

    preview: {
        select: {
            title: 'title',
        },
    },
})
