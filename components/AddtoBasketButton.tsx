// 'use client'
// import { ProductType } from '@/sanity.types'
// import React, { useEffect, useState } from 'react'
// import useBasketStore from '@/app/(store)/store';
// import productType from '@/sanity/schemaTypes/productType';
// interface AddtoBasketButtonProps {
//     product:ProductType
//     disabled?:boolean
// }
// export default function AddtoBasketButton({product,disabled}:AddtoBasketButtonProps) {
//     const {addItem,removeItem,getItemCount} = useBasketStore()
//     const itemCount = getItemCount(product._id);
//     const [isclient,setIsClient] = useState(false);
//     useEffect(() => {
//       setIsClient(true);
//     },[])

//     if(!isclient){
//         return null;
//     }
//   return (
   
//     <div className="flex items-center justify-between gap-4">
//   {/* Decrement Button */}
//   <button
//     onClick={() => removeItem(product._id)}
//     className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
//       itemCount === 0
//         ? 'bg-gray-400 cursor-not-allowed'
//         : 'bg-black hover:bg-gray-600 cursor-pointer'
//     }`}
//     disabled={itemCount === 0 || disabled}
//   >
//     <span
//       className={`text-2xl ${
//         itemCount === 0 ? 'text-gray-400' : 'text-white'
//       }`}
//     >
//       -
//     </span>
//   </button>

//   {/* Item Count */}
//   <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
//     {itemCount}
//   </span>

//   {/* Increment Button */}
//   <button
//     onClick={() => addItem(product)}
//     className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
//       disabled
//         ? 'bg-gray-400 cursor-not-allowed'
//         : 'bg-black hover:bg-gray-600 cursor-pointer'
//     }`}
//     disabled={disabled}
//   >
//     <span className="text-2xl font-bold">+</span>
//   </button>
// </div>

//   )
// }
 // <div className="flex items-center justify-between gap-4">
    //   <button onClick={() => removeItem(product._id)}
    //     className={`w-8 h-8 flex items-center justify-center rounded-full bg-black text-white ${
    //       itemCount === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-600 cursor-pointer'
    //     }`}
    //     disabled={itemCount === 0 || disabled}
    //     >
    //       <span className={`text-2xl ${itemCount === 0 ? 'text-gray-400' : 'text-white'}`}>
    //         -
    //       </span>
        

    //   </button>

    //   <span className='w-8 h-8 flex items-center justify-center rounded-full bg-black text-white'>{itemCount}</span>
    //   <button onClick={() => addItem(product)}
    //     className={`w-8 h-8 flex items-center justify-center rounded-full bg-black text-white ${
    //       disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-600 cursor-pointer'
    //     }`}
    //     disabled={disabled}
    //     >
    //       <span className='text-2xl text-white font-bold'>
    //         +
    //       </span>
        

    //   </button>

    // </div>



//     'use client';
// import { ProductType } from '@/sanity.types';
// import React, { useEffect, useState } from 'react';
// import useBasketStore from '@/app/(store)/store';

// interface AddtoBasketButtonProps {
//   product: ProductType;
//   disabled?: boolean;
// }

// export default function AddtoBasketButton({ product, disabled }: AddtoBasketButtonProps) {
//   const { addItem, removeItem, getItemCount } = useBasketStore();
//   const [itemCount, setItemCount] = useState(0);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//     setItemCount(getItemCount(product._id)); // Ensure this fetches the correct count
//   }, [getItemCount, product._id]);

//   if (!isClient) {
//     return null;
//   }

//   return (
//     <div className="flex items-center justify-between gap-4">
//       {/* Decrement Button */}
//       <button
//         onClick={() => {
//           removeItem(product._id);
//           setItemCount((prev) => Math.max(prev - 1, 0));
//         }}
//         className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
//           itemCount === 0
//             ? 'bg-gray-400 cursor-not-allowed'
//             : 'bg-black hover:bg-gray-600 cursor-pointer'
//         }`}
//         disabled={itemCount === 0 || disabled}
//       >
//         <span className={`text-2xl ${itemCount === 0 ? 'text-gray-400' : 'text-white'}`}>
//           -
//         </span>
//       </button>

//       {/* Item Count */}
//       <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
//         {itemCount}
//       </span>

//       {/* Increment Button */}
//       <button
//         onClick={() => {
//           addItem(product);
//           setItemCount((prev) => prev + 1);
//         }}
//         className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
//           disabled
//             ? 'bg-gray-400 cursor-not-allowed'
//             : 'bg-black hover:bg-gray-600 cursor-pointer'
//         }`}
//         disabled={disabled}
//       >
//         <span className="text-2xl font-bold">+</span>
//       </button>
//     </div>
//   );
// }


// 'use client';
// import { ProductType } from '@/sanity.types';
// import React, { useEffect, useState } from 'react';
// import useBasketStore from '@/app/(store)/store';

// interface AddtoBasketButtonProps {
//   product: ProductType;
//   disabled?: boolean;
// }

// export default function AddtoBasketButton({ product, disabled = false }: AddtoBasketButtonProps) {
//   const { addItem, removeItem, getItemCount } = useBasketStore();
//   const [itemCount, setItemCount] = useState(0);

//   useEffect(() => {
//     // Fetch current item count on component mount
//     setItemCount(getItemCount(product));
//   }, [getItemCount, product]);

//   const handleAddItem = () => {
//     if (disabled) return;
//     addItem(product, 1);
//     setItemCount((prev) => prev + 1);
//   };

//   const handleRemoveItem = () => {
//     if (itemCount > 0) {
//       removeItem(product, 1);
//       setItemCount((prev) => Math.max(prev - 1, 0));
//     }
//   };

//   return (
//     <div className="flex items-center justify-between gap-4">
//       {/* Decrement Button */}
//       <button
//         onClick={handleRemoveItem}
//         className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
//           itemCount === 0
//             ? 'bg-gray-400 cursor-not-allowed'
//             : 'bg-black hover:bg-gray-600 cursor-pointer'
//         }`}
//         disabled={itemCount === 0 || disabled}
//       >
//         <span className={`text-2xl ${itemCount === 0 ? 'text-gray-400' : 'text-white'}`}>
//           -
//         </span>
//       </button>

//       {/* Item Count */}
//       <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
//         {itemCount}
//       </span>

//       {/* Increment Button */}
//       <button
//         onClick={handleAddItem}
//         className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
//           disabled
//             ? 'bg-gray-400 cursor-not-allowed'
//             : 'bg-black hover:bg-gray-600 cursor-pointer'
//         }`}
//         disabled={disabled}
//       >
//         <span className="text-2xl font-bold">+</span>
//       </button>
//     </div>
//   );
// }



'use client';
import { ProductType } from '@/sanity.types';
import React, { useEffect, useState } from 'react';
import useBasketStore from '@/app/(store)/store';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AddtoBasketButtonProps {
  product: ProductType;
  disabled?: boolean;
}

export default function AddtoBasketButton({ product, disabled = false }: AddtoBasketButtonProps) {
  const { addItem, removeItem, getItemCount } = useBasketStore();
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    // Fetch current item count on component mount
    setItemCount(getItemCount(product));
  }, [getItemCount, product]);

  const handleAddItem = () => {
    if (disabled) return;
    addItem(product, 1);
    setItemCount((prev) => prev + 1);
    toast.success('Item added to basket!', {
      style: {
        backgroundColor: 'black',
        color: 'white',
      },
    });
  };

  const handleRemoveItem = () => {
    if (itemCount > 0) {
      removeItem(product, 1);
      setItemCount((prev) => Math.max(prev - 1, 0));
      toast.info('Item removed from basket!', {
        style: {
          backgroundColor: 'red',
          color: 'white',
        },
      });
    }
  };

  return (
    <div className="flex items-center justify-between gap-4">
      {/* Decrement Button */}
      <button
        onClick={handleRemoveItem}
        className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
          itemCount === 0
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-black hover:bg-gray-600 cursor-pointer'
        }`}
        disabled={itemCount === 0 || disabled}
      >
        <span className={`text-2xl ${itemCount === 0 ? 'text-gray-400' : 'text-white'}`}>
          -
        </span>
      </button>

      {/* Item Count */}
      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
        {itemCount}
      </span>

      {/* Increment Button */}
      <button
        onClick={handleAddItem}
        className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
          disabled
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-black hover:bg-gray-600 cursor-pointer'
        }`}
        disabled={disabled}
      >
        <span className="text-2xl font-bold">+</span>
      </button>
    </div>
  );
}
