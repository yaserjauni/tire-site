import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'usedRims',
    title: 'Used Rims',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'RimImages',
            title: 'Rim Images',
            type: 'array',
            of: [{ type: 'image' }],
        }),
    ],
})
