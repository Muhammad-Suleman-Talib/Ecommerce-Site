import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client'; // Your Sanity client
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Create the Image URL Builder
const builder = imageUrlBuilder(client);

// Function to generate image URL
export function imageUrl(source: SanityImageSource) {
  return builder.image(source).url(); // .url() returns the actual image URL
}
