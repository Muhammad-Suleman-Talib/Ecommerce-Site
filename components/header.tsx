// 'use client'
// import { ClerkLoaded, SignIn, SignInButton, UserButton, useUser } from '@clerk/nextjs'
// import Link from 'next/link';
// import Form from 'next/form';
// import React, { use } from 'react'
// import { PackageIcon, TrolleyIcon } from '@sanity/icons';
// import useBasketStore from '@/app/(store)/store';
// import { g } from 'framer-motion/client';

// export default function Header() {
//   const { user } = useUser();
//   const itemCount = useBasketStore((state) => state.basket.reduce((total, item) => total + item.quantity, 0));
//   // Define the expected type of a basket it

// // Assume useBasketStore returns an object containing a basket array


  
//   const CreateClerkPasskey = async () => {
//     try {
//       const response = await user?.createPasskey();
//       console.log(response);
//     } catch (error) {
//       console.error('Error creating passkey:', JSON.stringify(error, null, 2))
//       //  # Label for the error log to easily identify it in the console.
//       // The error object to be converted into a JSON string.
//       // No replacer function; all keys in the object are included.
//       // Indents the JSON string by 2 spaces for better readability.
//     }
//   }

//   return (
//     // <div>
//     //   <header className='flex flex-wrap justify-between items-center px-4 py-2'>
//     //     <div className='flex w-full flex-wrap justify-between items-center'>
//     //         <Link href='/' className='text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0'>
//     //         shop
//     //         </Link>
//     //         <Form action='search' className='w-full sm:w-auto sm:ml-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0' >
//     //             <input type="text" 
//     //             name='query' placeholder='Search the products' className='w-full py-2 px-4 bg-gray-100 rounded-md focus:outline-none text-gray-800 focus:ring-2 focus:ring-blue-500'
//     //             />
//     //         </Form>
//     //         <div className='flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none'>
//     //           <Link href='/Basket' className="flex-1 relative flex justify-center items-center sm:justify-start sm:flex-none space-x-2 bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
//     //           <TrolleyIcon className='w-6 h-6'/>
//     //           {/* {sapn item cunt global one item } */}
//     //           <span>My Basket</span>
//     //           </Link>
//     //           <ClerkLoaded>
//     //             {/* in this Clerk Loader is used to check the user is login or not and if user is login then it will show the orders and i use this in Clerk which i use its modern Authentication system  */}
//     //             <SignIn>
//     //             <Link href='/orders' className="flex-1 relative flex justify-center items-center sm:justify-start sm:flex-none space-x-2 bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
//     //               <PackageIcon className='w-6 h-6'/>
//     //               <span>My Orders</span>
//     //             </Link>
//     //             </SignIn>
//     //             {user ? (
//     //               <div className='flex items-center space-x-2'>
//     //                 <UserButton/>
//     //                 <div>
//     //                   <p className='text-gray-600'>Welcome Back</p>
//     //                   <p className='font-bold'>{user.fullName}</p>
//     //                 </div>
//     //               </div>
//     //             ):(
//     //               <SignInButton mode='modal'/>
//     //             )}


//     //             {user?.passkeys.length === 0 &&(
//     //               <button onClick={CreateClerkPasskey} className='bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300'>

//     //                 create passkey
//     //               </button>
//     //             )}
//     //           </ClerkLoaded>
//     //         </div>
//     //     </div>
//     //   </header>
//     // </div>
//     <div>
//       <header className="flex flex-wrap justify-between items-center px-4 py-2">
//         <div className="flex w-full flex-wrap justify-between items-center">
//           <Link href="/" className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0">
//             shop
//           </Link>
//           <Form action="search" className="w-full sm:w-auto sm:ml-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0">
//             <input
//               type="text"
//               name="query"
//               placeholder="Search the products"
//               className="w-full py-2 px-4 bg-gray-100 rounded-md focus:outline-none text-gray-800 focus:ring-2 focus:ring-blue-500"
//             />
//           </Form>
//           <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
//             <Link
//               href="/basket"
//               className="flex-1 relative flex justify-center items-center sm:justify-start sm:flex-none space-x-2 bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
//             >
//               <span className='absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center'>
//                 {itemCount}
//               </span>
//                 {/* {itemCount} */}
//               <TrolleyIcon className="w-6 h-6" />
//               <span>My Basket</span>
//             </Link>
//             <ClerkLoaded>
//               {/* Check if the user is logged in */}
//               {!user ? (
//                 <SignInButton mode="modal" />
//               ) : (
//                 <>
//                   <Link
//                     href="/orders"
//                     className="flex-1 relative flex justify-center items-center sm:justify-start sm:flex-none space-x-2 bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
//                   >
//                     <PackageIcon className="w-6 h-6" />
//                     <span>My Orders</span>
//                   </Link>
//                   {/* Display user info if logged in */}
//                   <div className="flex items-center space-x-2">
//                     <UserButton />
//                     <div>
//                       <p className="text-gray-600">Welcome Back</p>
//                       <p className="font-bold">{user.fullName}</p>
//                     </div>
//                   </div>

//                   {/* Allow user to create passkey if not present */}
//                   {user?.passkeys.length === 0 && (
//                     <button onClick={CreateClerkPasskey} className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
//                       create passkey
//                     </button>
//                   )}
//                 </>
//               )}
//             </ClerkLoaded>
//           </div>
//         </div>
//       </header>
//     </div>



//   )
// }



// 'use client'
// import { ClerkLoaded, SignIn, SignInButton, UserButton, useUser } from '@clerk/nextjs'
// import Link from 'next/link';
// import Form from 'next/form';
// import {  TrolleyIcon } from '@sanity/icons';
// import useBasketStore from '@/app/(store)/store';
// import { useState } from 'react';
// import { ArrowDownFromLineIcon } from 'lucide-react';
// import { MdOutlineAdminPanelSettings } from 'react-icons/md';
// export default function Header() {
//   const { user } = useUser();
//   const itemCount = useBasketStore((state) => state.basket.reduce((total, item) => total + item.quantity, 0));
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const CreateClerkPasskey = async () => {
//     try {
//       const response = await user?.createPasskey();
//       console.log(response);
//     } catch (error) {
//       console.error('Error creating passkey:', JSON.stringify(error, null, 2));
//     }
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div>
//       <header className="flex flex-wrap justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
//         <div className="flex w-full flex-wrap justify-between items-center max-w-screen-xl mx-auto">
//           {/* Logo / Shop Title */}
//           <Link href="/" className="text-2xl font-bold text-blue-500 hover:text-blue-600 cursor-pointer">
//             shop
//           </Link>

//           {/* Search Form */}
//           <Form action="search" className="w-full sm:w-72 md:w-96 mt-2 sm:mt-0 sm:ml-6">
//             <input
//               type="text"
//               name="query"
//               placeholder="Search the products"
//               className="w-full py-2 px-4 bg-gray-100 rounded-md focus:outline-none text-gray-800 focus:ring-2 focus:ring-blue-500"
//             />
//           </Form>

//           {/* Hamburger Menu Button */}
//           <button onClick={toggleMenu} className="sm:hidden flex flex-col items-center justify-center space-y-1.5 absolute right-6 top-4">
//             <div
//               className={`w-6 h-0.5 bg-blue-500 transition-all duration-300 transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
//             ></div>
//             <div
//               className={`w-6 h-0.5 bg-blue-500 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
//             ></div>
//             <div
//               className={`w-6 h-0.5 bg-blue-500 transition-all duration-300 transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
//             ></div>
//           </button>

//           {/* Desktop Menu */}
//           <div className="hidden sm:flex items-center space-x-6 mt-4 sm:mt-0">
//             <Link
//               href="/basket"
//               className="relative flex items-center space-x-2 bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//             >
//               <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
//                 {itemCount}
//               </span>
//               <TrolleyIcon className="w-6 h-6" />
//               <span>My Basket</span>
//             </Link>

//             <ClerkLoaded>
//               {!user ? (
//                 <SignInButton mode="modal"  className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//                   Sign In
//                 </SignInButton>
//               ) : (
//                 <>
//                   <Link
//                     href="/admin"
//                     className="flex items-center space-x-2 bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//                   >
//                     <MdOutlineAdminPanelSettings className="w-6 h-6" />
//                     <span >Admin</span>
//                   </Link>

//                   <div className="flex items-center space-x-2">
//                     <UserButton />
//                     <div>
//                       <p className="text-gray-600">Welcome Back</p>
//                       <p className="font-bold">{user.fullName}</p>
//                     </div>
//                   </div>

//                   {user?.passkeys.length === 0 && (
//                     <button onClick={CreateClerkPasskey} className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//                       Create Passkey
//                     </button>
//                   )}
//                 </>
//               )}
//             </ClerkLoaded>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="sm:hidden bg-white shadow-md absolute w-full left-0 top-16 z-50">
//           <div className="flex flex-col items-center py-4 space-y-4">
//             {/* Mobile Basket Link */}
//             <Link
//               href="/basket"
//               className="flex items-center space-x-2 text-blue-500 font-bold px-4 py-2 hover:bg-gray-100 w-full text-center"
//             >
//               <TrolleyIcon className="w-6 h-6" />
//               <span>My Basket</span>
//               <span className="ml-2 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
//                 {itemCount}
//               </span>
//             </Link>

//             <ClerkLoaded>
//               {!user ? (
//                 <SignInButton mode="modal" className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//                   Sign In
//                 </SignInButton>
//               ) : (
//                 <>
//                   <Link
//                     href="/admin"
//                     className="flex items-center space-x-2 text-blue-500 font-bold px-4 py-2 hover:bg-gray-100 w-full text-center"
//                   >
//                     <MdOutlineAdminPanelSettings className="w-6 h-6" />
//                     <span>Admin</span>
//                   </Link>

//                   <div className="flex items-center space-x-2 text-blue-500">
//                     <UserButton />
//                     <div>
//                       <p className="text-gray-600">Welcome Back</p>
//                       <p className="font-bold">{user.fullName}</p>
//                     </div>
//                   </div>

//                   {user?.passkeys.length === 0 && (
//                     <button onClick={CreateClerkPasskey} className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//                       Create Passkey
//                     </button>
//                   )}
//                 </>
//               )}
//             </ClerkLoaded>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



'use client';
import { ClerkLoaded, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import Form from 'next/form';
import { TrolleyIcon } from '@sanity/icons';
import useBasketStore from '@/app/(store)/store';
import { useState } from 'react';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

export default function Header() {
  const { user } = useUser();
  const itemCount = useBasketStore((state) => state.basket.reduce((total, item) => total + item.quantity, 0));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const CreateClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log(response);
    } catch (error) {
      console.error('Error creating passkey:', JSON.stringify(error, null, 2));
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="flex flex-wrap justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
        <div className="flex w-full flex-wrap justify-between items-center max-w-screen-xl mx-auto">
          {/* Logo / Shop Title */}
          <Link href="/" className="text-2xl font-bold text-blue-500 hover:text-blue-600 cursor-pointer">
            shop
          </Link>

          {/* Search Form */}
          <Form action="search" className="w-full sm:w-72 md:w-96 mt-2 sm:mt-0 sm:ml-6">
            <input
              type="text"
              name="query"
              placeholder="Search the products"
              className="w-full py-2 px-4 bg-gray-100 rounded-md focus:outline-none text-gray-800 focus:ring-2 focus:ring-blue-500"
            />
          </Form>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden flex flex-col items-center justify-center space-y-1.5 absolute right-6 top-4"
          >
            <div
              className={`w-6 h-0.5 bg-blue-500 transition-all duration-300 transform ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-blue-500 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-blue-500 transition-all duration-300 transform ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-6 mt-4 sm:mt-0">
            <Link
              href="/basket"
              className="relative flex items-center space-x-2 bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {itemCount}
              </span>
              <TrolleyIcon className="w-6 h-6" />
              <span>My Basket</span>
            </Link>

            <ClerkLoaded>
              {!user ? (
                <SignInButton
                  mode="modal"
                  className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Sign In
                </SignInButton>
              ) : (
                <>
                  <Link
                    href="/admin"
                    className="flex items-center space-x-2 bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    <MdOutlineAdminPanelSettings className="w-6 h-6" />
                    <span>Admin</span>
                  </Link>

                  <div className="flex items-center space-x-2">
                    <UserButton />
                    <div>
                      <p className="text-gray-600">Welcome Back</p>
                      <p className="font-bold">{user.fullName}</p>
                    </div>
                  </div>

                  {user?.passkeys.length === 0 && (
                    <button
                      onClick={CreateClerkPasskey}
                      className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                      Create Passkey
                    </button>
                  )}
                </>
              )}
            </ClerkLoaded>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md absolute w-full left-0 top-16 z-50">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/basket"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-2 text-blue-500 font-bold px-4 py-2 hover:bg-gray-100 w-full text-center"
            >
              <TrolleyIcon className="w-6 h-6" />
              <span>My Basket</span>
              <span className="ml-2 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            </Link>

            <ClerkLoaded>
              {!user ? (
                <SignInButton
                  mode="modal"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Sign In
                </SignInButton>
              ) : (
                <>
                  <Link
                    href="/admin"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-2 text-blue-500 font-bold px-4 py-2 hover:bg-gray-100 w-full text-center"
                  >
                    <MdOutlineAdminPanelSettings className="w-6 h-6" />
                    <span>Admin</span>
                  </Link>

                  <div className="flex items-center space-x-2 text-blue-500">
                    <UserButton />
                    <div>
                      <p className="text-gray-600">Welcome Back</p>
                      <p className="font-bold">{user.fullName}</p>
                    </div>
                  </div>

                  {user?.passkeys.length === 0 && (
                    <button
                      onClick={() => {
                        CreateClerkPasskey();
                        setIsMenuOpen(false);
                      }}
                      className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                      Create Passkey
                    </button>
                  )}
                </>
              )}
            </ClerkLoaded>
          </div>
        </div>
      )}
    </div>
  );
}
