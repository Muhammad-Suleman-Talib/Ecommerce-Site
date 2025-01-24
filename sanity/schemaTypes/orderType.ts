import { BasketIcon } from "@sanity/icons";
import { defineArrayMember, defineField } from "sanity";

const orderType = {
  name: "orderType",
  title: "Order Type",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "nameNumber",
      title: "Order Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stripeCheckoutSeccionId",
      title: "Stripe Checkout Session ID",
      type: "string",
    }),
    defineField({
      name: "stripeCustomerId",
      title: "Stripe Customer ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clerkUserId",
      title: "Clerk User ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerEmail",
      title: "Customer Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "stripePaymentIntentId",
      title: "Stripe Payment Intent ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "products",
      title: "Products Bought",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "product",
              title: "Product Bought",
              type: "reference",
              to: [{ type: "productType" }],
            }),
            defineField({
              name: "quantity",
              title: "Quantity Bought",
              type: "number",
            }),
          ],
          preview: {
            select: {
              title: "product.name",
              quantity: "quantity",
              image: "product.image",
              price: "product.price",
              currency: "product.currency",
            },
            prepare: ({ title, quantity, image, price, currency }) => ({
              title: `${title} × ${quantity}`,
              media: image,
              subtitle: `${price * quantity} ${currency}`,
            }),
          },
        }),
      ],
    }),
    defineField({
      name: "total",
      title: "Total Amount",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "amountDiscounted",
      title: "Amount Discounted",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
    }),
    defineField({
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      name: "customerName",
      email: "customerEmail",
      amount: "total",
      currency: "currency",
      orderId: "nameNumber",
    },
    prepare: ({ name, email, amount, currency, orderId }:any) => {
      const orderSnippet = `${orderId.slice(0, 5)}...${orderId.slice(-5)}`;
      return {
        title: `${name} (${orderSnippet})`,
        subtitle: `${amount} ${currency} - ${email}`,
        media: BasketIcon,
      };
    },
  },
};

export default orderType;
