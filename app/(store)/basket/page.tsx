// 'use client'

// import React, { useState, useEffect } from 'react';
// import { SignInButton, useAuth, useUser } from '@clerk/nextjs';
// import { useRouter } from 'next/navigation';
// import AddtoBasketButton from '@/components/AddtoBasketButton';
// import { v4 as uuidv4 } from 'uuid';
// import Image from 'next/image';
// import { imageUrl } from '@/lib/imageUrl';
// import { createCheckoutSession, Metadata } from '@/action/createCheckoutSession';
// import useBasketStore from '../store';
// import Loader from '@/components/loader';

// export default function BasketPage() {
//   const [groupedItems, setGroupedItems] = useState<any[]>([]);
//   const { isSignedIn } = useAuth();
//   const { user } = useUser();
//   const router = useRouter();
//   const [isClient, setIsClient] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const unsubscribe = useBasketStore.subscribe((state) =>
//       setGroupedItems(state.getGroupedItems())
//     );
//     setGroupedItems(useBasketStore.getState().getGroupedItems());
//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return <Loader />;
//   }

//   if (!groupedItems.length) {
//     return (
//       <div className="container mx-auto p-8 max-w-7xl text-center bg-gradient-to-r from-blue-800 via-indigo-900 to-black text-white">
//         <h1 className="text-3xl font-extrabold mb-8 text-yellow-400">Your Basket is Empty</h1>
//         <p className="text-base text-gray-400 mb-4">
//           It looks like you haven’t added any items to your basket yet.
//         </p>
//         <button
//           onClick={() => router.push('/')}
//           className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 hover:scale-105"
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   const handleCheckout = async () => {
//     if (!isSignedIn) return;
//     setIsLoading(true);
//     try {
//       const metadata: Metadata = {
//         orderNumber: Math.floor(Math.random() * 10000).toString(),
//         customerName: user?.fullName ?? 'unknown',
//         customerEmail: user?.emailAddresses[0]?.emailAddress ?? 'unknown',
//         orderDate: new Date().toISOString(),
//         ClerkUserId: user!.id,
//       };

//       const checkoutUrl = await createCheckoutSession(groupedItems, metadata);
//       if (checkoutUrl) {
//         window.location.href = checkoutUrl;
//       } else {
//         alert('Something went wrong');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Calculate total cost and item count
//   const totalCost = groupedItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
//   const totalItems = groupedItems.reduce((acc, item) => acc + item.quantity, 0);

//   return (
//     <div className="container mx-auto p-8 max-w-7xl bg-gradient-to-r from-blue-800 via-indigo-900 to-black text-white">
//       <h1 className="text-3xl font-extrabold mb-8 text-yellow-400">Your Basket</h1>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left: Item List */}
//         <div className="lg:col-span-2 space-y-4">
//           {groupedItems
//             .filter((item) => item.quantity > 0)
//             .map((item) => (
//               <div
//                 key={item?.product?._id || uuidv4()}
//                 className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 shadow-md rounded-lg p-4 flex items-center justify-between transition duration-300 hover:scale-105"
//               >
//                 <div
//                   className="flex items-center space-x-4 cursor-pointer"
//                   onClick={() => router.push(`/product/${item.product.slug?.current}`)}
//                 >
//                   <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-500 rounded-lg overflow-hidden shadow-md">
//                     {item.product.image && (
//                       <Image
//                         src={imageUrl(item.product.image)}
//                         alt={item.product.name || 'Product'}
//                         width={80}
//                         height={80}
//                         className="w-full h-full object-cover object-center"
//                         sizes="(max-width: 640px) 100px, (max-width: 1024px) 150px, 200px"
//                       />
//                     )}
//                   </div>
//                   <div>
//                     <h2 className="text-base font-semibold text-white">
//                       {item.product.name}
//                     </h2>
//                     <p className="text-gray-400 text-sm">
//                       Quantity: {item.quantity} | Price: ${item.product.price}
//                     </p>
//                   </div>
//                 </div>
//                 <AddtoBasketButton product={item.product} />
//               </div>

//             ))}
//         </div>

//         {/* Right: Summary */}
//         <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg text-white">
//           <h2 className="text-xl font-bold text-yellow-400 mb-4">Order Summary</h2>
//           <div className="text-gray-400 mb-4">
//             <p>Total Items: <span className="font-semibold text-white">{totalItems}</span></p>
//             <p>Total Price: <span className="font-semibold text-white">${totalCost.toFixed(2)}</span></p>
//           </div>
//           {isSignedIn ? (
//             <button
//               onClick={handleCheckout}
//               disabled={isLoading}
//               className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Checkout
//             </button>
//           ) : (
//             <SignInButton mode="modal">
//               <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 hover:scale-105">
//                 Sign in to checkout
//               </button>
//             </SignInButton>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



'use client'

import React, { useState, useEffect } from 'react';
import { SignInButton, useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import AddtoBasketButton from '@/components/AddtoBasketButton';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import { imageUrl } from '@/lib/imageUrl';
import { createCheckoutSession, Metadata } from '@/action/createCheckoutSession';
import useBasketStore from '../store';
import Loader from '@/components/loader';

export default function BasketPage() {
  const [groupedItems, setGroupedItems] = useState<any[]>([]);
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = useBasketStore.subscribe((state) =>
      setGroupedItems(state.getGroupedItems())
    );
    setGroupedItems(useBasketStore.getState().getGroupedItems());
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loader />;
  }

  if (!groupedItems.length) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white">
        <h1 className="text-3xl font-extrabold mb-8 text-yellow-400">Your Basket is Empty</h1>
        <p className="text-base text-gray-200 mb-4 text-center">
          It looks like you haven’t added any items to your basket yet.
        </p>
        <button
          onClick={() => router.push('/')}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 hover:scale-105"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const handleCheckout = async () => {
    if (!isSignedIn) return;
    setIsLoading(true);
    try {
      const metadata: Metadata = {
        orderNumber: Math.floor(Math.random() * 10000).toString(),
        customerName: user?.fullName ?? 'unknown',
        customerEmail: user?.emailAddresses[0]?.emailAddress ?? 'unknown',
        orderDate: new Date().toISOString(),
        ClerkUserId: user!.id,
      };

      const checkoutUrl = await createCheckoutSession(groupedItems, metadata);
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        alert('Something went wrong');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const totalCost = groupedItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItems = groupedItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="w-full min-h-screen bg-blue-500 text-white">
      <div className="container mx-auto p-8 max-w-7xl">
        <h1 className="text-3xl font-extrabold mb-8 text-yellow-400">Your Basket</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {groupedItems
              .filter((item) => item.quantity > 0)
              .map((item) => (
                <div
                  key={item?.product?._id || uuidv4()}
                  className="bg-white text-black shadow-md rounded-lg p-4 flex items-center justify-between transition duration-300 hover:scale-105"
                >
                  <div
                    className="flex items-center space-x-4 cursor-pointer"
                    onClick={() => router.push(`/product/${item.product.slug?.current}`)}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-500 rounded-lg overflow-hidden shadow-md">
                      {item.product.image && (
                        <Image
                          src={imageUrl(item.product.image)}
                          alt={item.product.name || 'Product'}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover object-center"
                          sizes="(max-width: 640px) 100px, (max-width: 1024px) 150px, 200px"
                        />
                      )}
                    </div>
                    <div>
                      <h2 className="text-base font-semibold">{item.product.name}</h2>
                      <p className="text-gray-700 text-sm">
                        Quantity: {item.quantity} | Price: ${item.product.price}
                      </p>
                    </div>
                  </div>
                  <AddtoBasketButton product={item.product} />
                </div>
              ))}
          </div>
          <div className="p-6 bg-white text-black rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-yellow-400 mb-4">Order Summary</h2>
            <div className="text-gray-700 mb-4">
              <p>Total Items: <span className="font-semibold">{totalItems}</span></p>
              <p>Total Price: <span className="font-semibold">${totalCost.toFixed(2)}</span></p>
            </div>
            {isSignedIn ? (
              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Checkout
              </button>
            ) : (
              <SignInButton mode="modal">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 hover:scale-105">
                  Sign in to checkout
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
