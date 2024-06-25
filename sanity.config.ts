/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    // Add and edit the content schema in the './sanity/schema' folder
    schema,
    plugins: [
        structureTool({
            structure: (S, context) =>
                S.list()
                    .title('Content')
                    .items([
                        // Minimum required configuration
                        orderableDocumentListDeskItem({ type: 'topPicks', S, context }),

                        S.documentTypeListItem('imageSlide'),
                        S.documentTypeListItem('post'),
                        S.documentTypeListItem('products'),
                        S.documentTypeListItem('single'),
                        S.documentTypeListItem('used-products'),
                    ])
        }),
        vercelDeployTool(),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
    ],
})
