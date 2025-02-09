'use client'

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import useBasketStore from "../store";
import Link from "next/link";

function SuccessPage() {
    const searchParams = useSearchParams();
    const orderNumber = searchParams.get('orderNumber');
    const clerkBasket = useBasketStore.getState().basket;

    useEffect(() => {
        if (orderNumber) {
            useBasketStore.setState({ basket: [] });
        }
    }, [orderNumber]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4">
        <div className="mb-4">
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5 4v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m16-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Thank you for your order!
        </h1>
        <div className="text-center text-gray-600 mb-6">
          <p>Your order has been confirmed and will be shipped soon.</p>
          {orderNumber && (
            <p className="mt-2">
              Your order number is: {orderNumber}
              A confirmation email has been sent to your email address with your
            </p>
          )}
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <Link href={'/admin'}>view order</Link>
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          <Link href={'/'}>Continue Shopping</Link>

          </button>
        </div>
      </div>
      
        
    )
}

export default SuccessPage