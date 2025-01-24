// import { defineQuery } from "next-sanity";
// import { sanityFetch } from "../live";
// import { CuponCode } from "./cuponCode";

import { defineQuery } from "next-sanity";
// import { CuponCode } from "./cuponCode";
import { sanityFetch } from "../live";
import { couponCode,  } from "./cuponCode";

// export const getActiveSaleByCuponCode = async (CouponCode: CuponCode) => {
//     // Define the query with proper ordering
//     const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
//         *[_type == "salesType" && couponCode == "BFRIDAY" && isActive == true]
//             | order(validFrom desc)[0]

//     `);
//     console.log('CouponCode:', CouponCode); // Log the passed CouponCode

//     try {
//         // Fetch the sale data with the query
//         const Saleisactive = await sanityFetch({
//             query: ACTIVE_SALE_BY_COUPON_QUERY,
//             params: {
//                 CouponCode, // Pass couponCode as a parameter
//             },
//         });

//         // Debugging: Log the response from sanityFetch
//         console.log('Sanity Fetch Response:', Saleisactive);

//         // Check if Saleisactive is null or undefined
//         if (!Saleisactive) {
//             console.error('Saleisactive is null or undefined');
//             return null;
//         }

//         // Check if data exists in Saleisactive
//         if (!Saleisactive.data) {
//             console.error('Saleisactive.data is null or undefined');
//             return null;
//         }

//         // Check if data has elements (first active sale)
//         if (Saleisactive.data.length === 0) {
//             console.log('No active sale found');
//             return null;
//         }

//         // Return the first active sale if found
//         return Saleisactive.data[0];

//     } catch (error) {
//         // Log the error if something goes wrong
//         console.error('Error fetching active sale:', error);
//         return null;
//     }
// };


// export const getActiveSaleByCuponCode = async (CouponCode: CuponCode) => {
//     console.log('Fetching active sale for coupon code:', CouponCode);

//     // Define the query with proper ordering
//     const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
//         *[_type == "salesType"
//          && couponCode == $couponCode
//          && isActive == true
//          && validFrom <= now()
//          && validUntil >= now()]
//          | order(validFrom desc)[0]
//       `);
      

//     try {
//         // Fetch the sale data with the query
//         const Saleisactive = await sanityFetch({
//             query: ACTIVE_SALE_BY_COUPON_QUERY,
//             params: {
//                 CouponCode, // Pass couponCode as a parameter
//             },
//         });

//         console.log('Sanity Fetch Response:', Saleisactive); // Log the response

//         // Check if there is any data and the first item is active
//         if (!Saleisactive?.data || !Saleisactive.data[0]?.isActive) {
//             console.log('No active sale found or sale is not active for coupon code:', CouponCode);
//             return null;
//         }

//         const sales = Saleisactive.data[0];

//         console.log('Sale object fetched:', sales); // Log the fetched sale object
//         return sales;

//     } catch (error) {
//         console.error('Error fetching active sale:', error);
//         return null;
//     }
// };

export const getActiveSaleByCouponCode = async (couponCode: couponCode) => {
    const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
        *[_type == "salesType"
        && couponCode == $couponCode
        && isActive == true
        && validFrom <= now()
        && validUntil >= now()]
        | order(validFrom desc)[0]
    `);

    try {
        const activeSale = await sanityFetch({
            query: ACTIVE_SALE_BY_COUPON_QUERY,
            params: { couponCode },
        });

        // Check if the sale object is returned
        if (activeSale && activeSale.data) {
            return activeSale.data; // Return the active sale data
        } else {
            console.log(`No active sale found for coupon code: ${couponCode}`);
            return null;
        }
    } catch (error) {
        console.error('Error fetching the active sale:', error);
        return null;
    }
};
