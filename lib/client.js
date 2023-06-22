import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'iy64qlzx',
  dataset: 'production',
  apiVersion: '2023-04-07',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN 
});

// Use the client object to interact with the Sanity API

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)