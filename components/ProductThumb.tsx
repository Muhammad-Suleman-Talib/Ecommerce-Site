import { imageUrl } from "@/lib/imageUrl";
import { ProductType } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";

function ProductThumb({ product }: { product: ProductType }) {
  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <Link
      href={`/product/${product?.slug?.current}`}
      className={`group flex flex-col bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-transform duration-300 overflow-hidden w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 hover:scale-105 ${
        isOutOfStock ? "opacity-60" : ""
      }`}
    >
      {/* Image Section */}
      <div className="relative flex items-center justify-center p-5 w-full aspect-square bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-50">
        {product.image && (
          <Image
            src={imageUrl(product.image)}
            alt={product.name || "Product"}
            width={420} // Adjust width as needed
  height={420} // Adjust height as needed
  quality={100} // Ensure the highest quality
  className="object-cover rounded-md w-full h-full" 
          />
        )}
        {isOutOfStock && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 text-xs sm:text-sm font-semibold uppercase rounded-full shadow-md">
            Out of Stock
          </div>
        )}
      </div>

      {/* Product Info Section */}
      <div className="px-6 pt-4 pb-3 space-y-3 flex-grow overflow-hidden">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 truncate hover:text-blue-500 transition-colors duration-300">
          {product.name}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
        {typeof product.description === "string" && (product.description as string).trim() !== ""
             ? product.description
             : "No description available"}
        </p>
      </div>

      {/* Price and Button Section */}
      <div className="px-6 py-4 flex items-center justify-between bg-gray-100 rounded-b-xl">
        <span className="text-lg sm:text-xl font-bold text-gray-900">
          Rs {product.price}
        </span>
        <button
          disabled={isOutOfStock}
          className={`px-5 py-2 text-sm sm:text-base rounded-lg font-medium transition-all duration-200 shadow-lg ${
            isOutOfStock
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700"
          }`}
        >
          {isOutOfStock ? "Out of Stock" : `Stock: ${product.stock}`}
        </button>
      </div>
    </Link>
  );
}

export default ProductThumb;


