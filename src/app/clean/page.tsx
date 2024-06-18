// // clean.tsx
// 'use client'
// import { useEffect } from 'react';
// import sanityClient from '@sanity/client';
// import { client } from '../../../sanity/lib/client';


// const allowedFields = ['_id', '_type', '_createdAt', '_updatedAt', 'title', 'description'];
// async function cleanDocuments() {
//     const query = `*[_type == "products"]`;
//     const documents = await client.fetch(query);

//     for (const doc of documents) {
//         // Remove btn and link fields
//         const cleanedDoc = {
//             ...doc,
//             btn: undefined,
//             link: undefined,
//         };

//         // Update the document with removed fields
//         await client.patch(doc._id).set(cleanedDoc).commit();
//         console.log(`Cleaned document with ID: ${doc._id}`);
//     }
// }

// cleanDocuments().catch((err) => {
//     console.error('Error cleaning documents:', err);
// });

// export default function CleanPage() {
//     useEffect(() => {
//         cleanDocuments().catch((err) => {
//             console.error('Error cleaning documents:', err);
//         });
//     }, []);

//     return <div>Cleaning up documents...</div>;
// }
