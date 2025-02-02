import { BasketIcon } from "@sanity/icons";
import { defineArrayMember, defineField } from "sanity";

const orderType = {
  name: "orderType",
  title: "Order Type",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "nameNumber", // Order name
      title: "Order Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stripeCheckoutSeccionId", // Stripe Checkout Session ID
      title: "Stripe Checkout Session ID",
      type: "string",
    }),
    defineField({
      name: "stripeCustomerId", // Stripe Customer ID
      title: "Stripe Customer ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clerkUserId", // Clerk User ID
      title: "Clerk User ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerName", // Customer Name
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerEmail", // Customer Email
      title: "Customer Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "products", // Array of products
      title: "Products",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "image", // Product Image
              title: "Product Image",
              type: "reference",
              to: [{ type: "productType" }], // Linking to the productType document
            }),
            defineField({
              name: "quantity", // Quantity bought
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
      name: "total", // Total amount
      title: "Total Amount",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "currency", // Currency
      title: "Currency",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "amountDiscounted", // Amount discounted
      title: "Amount Discounted",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "status", // Order status
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
      name: "orderDate", // Order date
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
    prepare: ({ name, email, amount, currency, orderId }) => {
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
