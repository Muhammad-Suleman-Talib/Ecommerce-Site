import ProductGrid from '@/components/ProductGrid';
import { searchProductsByName } from '@/sanity/lib/products/searchProductsByName';
import React from 'react'
import { AiOutlineHome } from "react-icons/ai"; // Using React Icons for the home icon

export default async function Searchpage({
    searchParams,
}:{
    searchParams: {
        query: string;
      };
}) {
    const {query} = await searchParams;
    const products = await searchProductsByName(query);

    if (!products || products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight animate-pulse text-red-500">
                        No Products Found
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300">
                        We couldn’t find any products matching your search. Please explore our homepage for more options!
                    </p>
                    <div className="mt-6">
                        <a
                            href="/"
                            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
                        >
                            <AiOutlineHome className="text-lg sm:text-xl" />
                            Home
                        </a>
                    </div>
                </div>
                <div className="mt-10">
                    {/* <img
                        src="https://undraw.co/api/illustrations/svg?style=flat&image=no_data"
                        alt="No Products Found"
                        className="w-full max-w-md mx-auto animate-bounce"
                    /> */}
                </div>
            </div>
        );


    
}
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight animate-pulse text-red-500">
        Search Results for {query}
      </h1>
      <p className="text-lg sm:text-xl text-gray-300">
        We found {products.length} products matching your search. Explore them below!
      </p>
      <div className="mt-6">
        <ProductGrid products={products} />
      </div>
    </div>
  )
}
