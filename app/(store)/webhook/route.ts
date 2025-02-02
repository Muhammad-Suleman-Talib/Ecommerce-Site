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
  console.log("Session Data:", session); // Log the session data

  const {
    id,
    amount_total,
    metadata,
    payment_intent,
    customer,
    total_details,
  } = session;

  // Log metadata to ensure it's being populated
  console.log("Metadata:", metadata);

  const {
    orderNumber,
    customerName,
    customerEmail,
    ClerkUserId,
    orderDate
  } = metadata as Metadata;

  // Proceed with creating order in Sanity
  const LineItemWithProduct = await Stripe.Checkout.session.listLineItems(id, {
    expand: ["data.price.product"],
  });

  console.log("Line Items:", LineItemWithProduct.data); // Log line items

  const sanityProduct = LineItemWithProduct.data.map((item: any) => ({
    key: crypto.randomUUID(),
    product: {
      _type: 'reference',
      _ref: (item.price?.product as Stripe.Product)?.metadata?.id,
    },
    quantity: item.quantity || 0,
  }));

  // Ensure sanityProduct is populated correctly
  console.log("Sanity Product Data:", sanityProduct);

  try {
    const order = await backendClient.create({
      _type: "orderType",
      nameNumber: orderNumber,
      stripeCheckoutSeccionId: id,
      stripePaymentIntentId: payment_intent,
      stripeCustomerId: customer,
      clerkUserId: ClerkUserId,
      customerName,
      customerEmail,
      products: sanityProduct,
      total: amount_total ? amount_total / 100 : 0,
      currency: session.currency,
      amountDiscounted: total_details?.amount_discount ? total_details.amount_discount / 100 : 0,
      status: "paid",
      orderDate: new Date(orderDate || Date.now()).toISOString(),
    });

    console.log("Order Created:", order);
    return order;
  } catch (error) {
    console.error("Error Creating Order in Sanity:", error);
    throw new Error("Failed to create order in Sanity");
  }
}
