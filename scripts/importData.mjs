// import { createClient } from '@sanity/client';
// import axios from 'axios';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import path from 'path';

// // Load environment variables from .env.local
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Sanity project ID
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Sanity dataset name
//   useCdn: false, // Disable CDN for real-time updates
//   token: process.env.SANITY_API_TOKEN, // API token for write access
//   apiVersion: '2021-08-31', // API version
// });

// // Function to upload images to Sanity
// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
//     const buffer = Buffer.from(response.data);
//     const filename = imageUrl.split('/').pop();
//     const asset = await client.assets.upload('image', buffer, { filename });
//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id; // Return image reference
//   } catch (error) {
//     console.error('Failed to upload image:', error);
//     return null;
//   }
// }

// // Function to check if a product exists in Sanity
// async function productExists(slug) {
//   const query = `*[_type == "productType" && slug.current == $slug][0]`;
//   const params = { slug };
//   const existingProduct = await client.fetch(query, params);
//   return !!existingProduct; // Return true if product exists
// }

// // Function to import product data
// async function importData() {
//   try {
//     console.log('Fetching products from the Fakestore API...');
//     const response = await axios.get('https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce');
//     const products = response.data;
//     console.log(`Fetched ${products.length} products`);

//     for (const product of products) {
//       const slug = product.title.toLowerCase().replace(/\s+/g, '-');
//       console.log(`Processing product: ${product.title}`);

//       // Check if the product already exists
//       if (await productExists(slug)) {
//         console.log(`Product already exists: ${product.title}`);
//         continue; // Skip this product if it already exists
//       }

//       // Upload image to Sanity
//       let imageRef = null;
//       if (product.image) {
//         imageRef = await uploadImageToSanity(product.image);
//       }

//       // Create product object for Sanity
//       const sanityProduct = {
//         _type: 'productType',
//         name: product.title,
//         slug: {
//           _type: 'slug',
//           current: slug,
//         },
//         image: imageRef ? { _type: 'image', asset: { _ref: imageRef } } : null,
//         description: product.description,
//         price: product.price,
//         category: product.category || 'Uncategorized',
//         rating: product.rating?.rate || 0,
//         stock: product.stock || 0, // if stock is just a number in the response
//       };

//       // Insert product into Sanity
//       const result = await client.create(sanityProduct);
//       console.log(`Product uploaded successfully: ${result._id}`);
//     }

//     console.log('Data import completed successfully!');
//   } catch (error) {
//     console.error('Error importing data:', error);
//   }
// }

// // Run the import function every minute (60000 ms)
// setInterval(importData, 6000); 




// import { createClient } from '@sanity/client';
// import axios from 'axios';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import path from 'path';

// // Load environment variables from .env.local
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Sanity project ID
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Sanity dataset name
//   useCdn: false, // Disable CDN for real-time updates
//   token: process.env.SANITY_API_TOKEN, // API token for write access
//   apiVersion: '2021-08-31', // API version
// });

// // Function to upload images to Sanity
// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
//     const buffer = Buffer.from(response.data);
//     const filename = imageUrl.split('/').pop();
//     const asset = await client.assets.upload('image', buffer, { filename });
//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id; // Return image reference
//   } catch (error) {
//     console.error('Failed to upload image:', error);
//     return null;
//   }
// }

// // Function to check if a product exists in Sanity
// async function productExists(slug) {
//   const query = `*[_type == "productType" && slug.current == $slug][0]`;
//   const params = { slug };
//   const existingProduct = await client.fetch(query, params);
//   return !!existingProduct; // Return true if product exists
// }

// // Function to import product data
// async function importData() {
//   try {
//     console.log('Fetching products from the Fakestore API...');
//     const response = await axios.get('https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce');
//     const products = response.data;
//     console.log(`Fetched ${products.length} products`);

//     for (const product of products) {
//       const slug = product.title.toLowerCase().replace(/\s+/g, '-');
//       console.log(`Processing product: ${product.title}`);

//       // Check if the product already exists
//       if (await productExists(slug)) {
//         console.log(`Product already exists: ${product.title}`);
//         continue; // Skip this product if it already exists
//       }

//       // Upload image to Sanity
//       let imageRef = null;
//       if (product.image) {
//         imageRef = await uploadImageToSanity(product.image);
//       }

//       // Create product object for Sanity
//       const sanityProduct = {
//         _type: 'productType',
//         name: product.title,
//         slug: {
//           _type: 'slug',
//           current: slug,
//         },
//         image: imageRef ? { _type: 'image', asset: { _ref: imageRef } } : null,
//         description: product.description,
//         price: product.price,
//         category: product.category || 'Uncategorized',
//         rating: product.rating?.rate || 0,
//         stock: product.stock || 0, // if stock is just a number in the response
//       };

//       // Insert product into Sanity
//       const result = await client.create(sanityProduct);
//       console.log(`Product uploaded successfully: ${result._id}`);
//     }

//     console.log('Data import completed successfully!');
//   } catch (error) {
//     console.error('Error importing data:', error);
//   }
// }

// // Run the import function every minute (60000 ms)
// setInterval(importData, 60000); 


// import { createClient } from '@sanity/client';
// import axios from 'axios';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import path from 'path';

// // Load environment variables from .env.local
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Sanity project ID
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Sanity dataset name
//   useCdn: false, // Disable CDN for real-time updates
//   token: process.env.SANITY_API_TOKEN, // API token for write access
//   apiVersion: '2021-08-31', // API version
// });

// // Function to upload images to Sanity
// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
//     const buffer = Buffer.from(response.data);
//     const filename = imageUrl.split('/').pop();
//     const asset = await client.assets.upload('image', buffer, { filename });
//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id; // Return image reference
//   } catch (error) {
//     console.error('Failed to upload image:', error);
//     return null;
//   }
// }

// // Function to check if a product exists in Sanity
// async function productExists(slug) {
//   const query = `*[_type == "productType" && slug.current == $slug][0]`;
//   const params = { slug };
//   const existingProduct = await client.fetch(query, params);
//   return !!existingProduct; // Return true if product exists
// }

// // Function to import product data
// async function importData() {
//   try {
//     console.log('Fetching products from the Fakestore API...');
//     const response = await axios.get('https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce');
//     const products = response.data;
//     console.log(`Fetched ${products.length} products`);

//     for (const product of products) {
//       const slug = product.title.toLowerCase().replace(/\s+/g, '-');
//       console.log(`Processing product: ${product.title}`);

//       // Check if the product already exists
//       if (await productExists(slug)) {
//         console.log(`Product already exists: ${product.title}`);
//         continue; // Skip this product if it already exists
//       }

//       // Upload image to Sanity
//       let imageRef = null;
//       if (product.image) {
//         imageRef = await uploadImageToSanity(product.image);
//       }

//       // Create product object for Sanity
//       const sanityProduct = {
//         _type: 'productType',
//         name: product.title,
//         slug: {
//           _type: 'slug',
//           current: slug,
//         },
//         image: imageRef ? { _type: 'image', asset: { _ref: imageRef } } : null,
//         description: product.description,
//         price: product.price,
//         category: product.category || 'Uncategorized',
//         rating: product.rating?.rate || 0,
//         stock: product.stock || 0, // if stock is just a number in the response
//       };

//       // Insert product into Sanity
//       const result = await client.create(sanityProduct);
//       console.log(`Product uploaded successfully: ${result._id}`);
//     }

//     console.log('Data import completed successfully!');
//   } catch (error) {
//     console.error('Error importing data:', error);
//   }
// }

// // Run the import function
// importData();


import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Sanity dataset name
  useCdn: false, // Disable CDN for real-time updates
  token: process.env.SANITY_API_TOKEN, // API token for write access
  apiVersion: '2021-08-31', // API version
});

// Function to upload images to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const filename = imageUrl.split('/').pop();
    const asset = await client.assets.upload('image', buffer, { filename });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id; // Return image reference
  } catch (error) {
    console.error('Failed to upload image:', error);
    return null;
  }
}

// Function to check if a product exists in Sanity
async function productExists(slug, title, price) {
  const query = `*[_type == "productType" && slug.current == $slug && name == $title && price == $price][0]`;
  const params = { slug, title, price };
  console.log(`Checking if product with slug "${slug}" and title "${title}" exists...`);

  try {
    const existingProduct = await client.fetch(query, params);
    console.log('Existing product check result:', existingProduct);
    return !!existingProduct; // Return true if product exists
  } catch (error) {
    console.error('Error checking for existing product:', error);
    return false; // In case of error, assume the product doesn't exist
  }
}

// Function to import product data
async function importData() {
  try {
    console.log('Fetching products from the Fakestore API...');
    const response = await axios.get('https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce');
    const products = response.data;
    console.log(`Fetched ${products.length} products`);

    let importedCount = 0;

    for (const product of products) {
      const slug = product.title.toLowerCase().replace(/\s+/g, '-').trim();
      console.log(`Processing product: ${product.title} (slug: ${slug})`);

      // Check if the product already exists
      const productExistsResult = await productExists(slug, product.title, product.price);
      if (productExistsResult) {
        console.log(`Product already exists: ${product.title}`);
        continue; // Skip this product if it already exists
      }

      // Upload image to Sanity
      let imageRef = null;
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      // Create product object for Sanity
      const sanityProduct = {
        _type: 'productType',
        name: product.title,
        slug: {
          _type: 'slug',
          current: slug,
        },
        image: imageRef ? { _type: 'image', asset: { _ref: imageRef } } : null,
        description: product.description,
        price: product.price,
        category: product.category || 'Uncategorized',
        rating: product.rating?.rate || 0,
        stock: product.stock || 0, // if stock is just a number in the response
      };

      // Insert product into Sanity
      const result = await client.create(sanityProduct);
      console.log(`Product uploaded successfully: ${result._id}`);
      importedCount++;
    }

    if (importedCount > 0) {
      console.log(`${importedCount} new product(s) imported successfully!`);
    } else {
      console.log('No new products to import.');
    }
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

// Run the import function every minute (60000 ms)
setInterval(importData, 60000); // 60 seconds = 1 minute



// import { createClient } from '@sanity/client';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import path from 'path';

// // Load environment variables from .env.local
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Sanity project ID
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Sanity dataset name
//   useCdn: false, // Disable CDN for real-time updates
//   token: process.env.SANITY_API_TOKEN, // API token for write access
//   apiVersion: '2021-08-31', // API version
// });

// // Function to delete data
// async function deleteData() {
//   try {
//     console.log('Fetching documents to delete...');

//     // Query to fetch all documents of a specific type (e.g., 'productType')
//     const query = '*[_type == "productType"]';
//     const documents = await client.fetch(query);

//     console.log(`Found ${documents.length} documents to delete.`);

//     // Loop through the documents and delete them
//     for (const doc of documents) {
//       console.log(`Deleting document: ${doc._id}`);
//       await client.delete(doc._id); // Delete document by ID
//       console.log(`Deleted document: ${doc._id}`);
//     }

//     console.log('All documents deleted successfully!');
//   } catch (error) {
//     console.error('Error deleting documents:', error);
//   }
// }

// // Run the delete function
// deleteData();
