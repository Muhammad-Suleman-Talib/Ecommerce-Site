// import { defineQuery } from "next-sanity";
// import { sanityFetch } from "../live";

// export const getProductByCategory = async (category: string) => {
//     const PRODUCT_BY_CATEGORY_QUERY = defineQuery(`
//         *[
//             _type == "productType" && references(*[_type == "category" && slug.current == $category]._id)
//         ] | order(name asc)

//     `);
//     try {
//         const products = await sanityFetch({
//             query: PRODUCT_BY_CATEGORY_QUERY,
//             params: {
//                 category,
//             },
//         });
//         return products.data || [];
//     } catch (error) {
//         console.error('Error Fethching all the products :', error);
//         return [];
//     }
// }


import { createClient, defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

/**
 * Fetches products belonging to a specific category.
 * @param category - The slug of the category to fetch products for.
 * @returns A list of products within the specified category.
 */

const sanityClient = createClient({
    projectId:"sqw0b6am" , // Replace with your Sanity project ID
    dataset: "production", // Replace with your dataset name
    apiVersion: "2023-01-01", // Use the latest Sanity API version
    useCdn: false, // Set to `true` for production, `false` for development
  });
  
export const getProductByCategory = async (category: string) => {
  const PRODUCT_BY_CATEGORY_QUERY = defineQuery(`
    *[
      _type == "productType" && 
      references(*[_type == "category" && slug.current == $category]._id)
    ] | order(name asc)
  `);

  try {
    const products = await sanityFetch({
      query: PRODUCT_BY_CATEGORY_QUERY,
      params: {
        category,
      },
    });

    return products || [];
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};
