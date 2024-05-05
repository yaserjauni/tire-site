import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'imageSlide',
    title: 'Image Slideshow',
    type: 'document',
    fields: [
        defineField({
            name: 'display',
            title: 'Display Images',
            type: 'array',
            of: [{ type: 'image' }],
        }),
    ],
})
