import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'single',
    title: 'Single tires',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'list',
            title: 'List',
            type: 'blockContent',
        }),
    ],
})
