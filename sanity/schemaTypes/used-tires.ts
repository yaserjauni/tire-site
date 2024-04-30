import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'usedTire',
    title: 'Used tires',
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
