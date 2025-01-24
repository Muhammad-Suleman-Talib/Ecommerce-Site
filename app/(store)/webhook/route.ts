import { Metadata } from "@/action/createCheckoutSession";
import { backendClient } from "@/sanity/lib/backendClient";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const headerList = await headers();
  const slg = headerList.get("stripe-signature");

  if (!slg) {
    return NextResponse.json({ error: 'no signature ' }, { status: 400 })
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {

    return NextResponse.json({ error: 'no secret ' }, { status: 400 })
  }

  let event: Stripe.Event;
  try {
    event = await Stripe.webhooks.constructEvent(
      body,
      slg,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    return NextResponse.json({ error: 'no event ' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    try {
      const order = await createOrderInSanity(session)
      console.log('Order created in Sanity:', order);
    } catch (error) {
      console.error('Error creating order in Sanity:', error);
      return NextResponse.json({ error: 'Error creating order in Sanity' }, { status: 500 })
    }
  }

  return NextResponse.json({ received: true })


}


async function createOrderInSanity(session: Stripe.Checkout.Session) {
  const {
    id,
    amount_total,
    metadata,
    payment_intent,
    customer,
    total_details,


  } = session;

  const {
    orderNumber,
    customerName,
    customerEmail,
    ClerkUserId,
    orderDate
    } = metadata as Metadata;

    const LineItemWithProduct = await Stripe.Checkout.session.listLineItems(id, {
      expand: ["data.price.product"],
  });
  
  

  const sanityProduct = LineItemWithProduct.data.map((item:any) => ({
    key:crypto.randomUUID(),
    product: {
      _type: 'reference',
      _ref: (item.price?.product as Stripe.Product)?.metadata?.id
    },
    quantity:item.quantity || 0
  }))

  const order = await backendClient.create({
    _type: "orderType",
    nameNumber: orderNumber,
    stripeCheckoutSeccionId: id,
    stripePaymentIntentId: payment_intent,
    stripeCustomerId: customer,
    clerkUserId: ClerkUserId,
    customerName,
    customerEmail,
    products: sanityProduct, // Ensure this matches the schema definition
    total: amount_total ?.toString() ? amount_total / 100 : 0, // Convert Stripe's amount  // Convert Stripe's amount (in cents) to the proper format
    currency: session.currency, // Ensure session.currency is passed correctly
    amountDiscounted: total_details?.amount_discount ? total_details.amount_discount / 100 : 0,
    status: "paid",
    orderDate: new Date(orderDate || Date.now()).toISOString(), // Use metadata's orderDate or current timestamp
});

  return order
 
}