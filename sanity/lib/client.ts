import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
  stega: {
    studioUrl: process.env.NODE_ENV === 'production'
      ? `https://iphone-store-online.vercel.app`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/studio`,
  }
  
})
