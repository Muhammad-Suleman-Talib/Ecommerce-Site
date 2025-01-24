'use server'

import { imageUrl } from "@/lib/imageUrl";
import Stripe from "stripe";


export type Metadata = {
  orderNumber: string
  customerName: string
  customerEmail: string
  orderDate: string
  ClerkUserId: string
}

export type GroupedBasketItem = {
  product: BasketItem['product']
  metadata: Metadata
}


function extractPlainText(description: any): string {
    if (Array.isArray(description)) {
      return description
        .map((block: any) => block.children?.map((child: any) => child.text).join('') || '')
        .join(' ');
    }
    return typeof description === 'string' ? description : '';
  }
  
  export async function createCheckoutSession(items: GroupedBasketItem[], metadata: Metadata) {
    const stripe = new Stripe(process.env['STRIPE_SECRET-KEY']!, { apiVersion: '2024-12-18.acacia' });
  
    const customers = await stripe.customers.list({
      email: metadata.customerEmail,
      limit: 1
    });
  
    let customer_id: string | undefined;
    if (customers.data.length > 0) {
      customer_id = customers.data[0].id;
    }
  
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        customer: customer_id,
      customer_creation: customer_id ? undefined : 'always',
      customer_email: customer_id ? undefined : metadata.customerEmail,
      metadata,
      mode: "payment",
      allow_promotion_codes: true,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_Id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/basket`,
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          unit_amount: Math.round(item.product.price * 100),
          product_data: {
            name: item.product.name,
            description: extractPlainText(item.product.description), // Use plain text
            metadata: {
              id: item.product._id,
            },
            images: item.product.image ? [imageUrl(item.product.image)] : [],
          },
        },
        quantity: item.quantity
      }))
    });
  
    return session.url;
  }
  