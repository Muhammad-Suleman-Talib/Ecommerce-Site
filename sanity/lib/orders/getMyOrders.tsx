import { defineQuery } from 'next-sanity';
import React from 'react'
import { sanityFetch } from '../live';

export default async function getMyOrders({userId}:{userId:string}) {
    if(!userId){
         throw new Error('User is not signed in');
    }

    const MY_ORDERS_QUERY = defineQuery(`*[_type == "orderType" && clerkUserId == $userId]
        | order(orderDate desc)
        {
          ...,
          products[]{
            ...,
            product->
          }
        }

        
        `);

    try {
        const orders = await sanityFetch({
            query: MY_ORDERS_QUERY,
            params: {
                userId
            }
        })
        return orders.data || [];
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw new Error('Failed to fetch orders');
    }      
  
}
