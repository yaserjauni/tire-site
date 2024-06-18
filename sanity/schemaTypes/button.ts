import { defineField, defineType } from "sanity";

export default defineType({
    name: 'button',
    type: 'document',
    title: 'Button',
    fields: [
        defineField({
            name: 'btnlink',
            type: 'string',
            title: 'Affiliate Link',
        }),
        defineField({
            name: 'btnText',
            type: 'string',
            title: 'Button Label',
        }),

    ],
    preview: {
        select: {
            btnText: 'btnText', // Assuming 'email' is a unique field in your 'users' type
        },

    }
})