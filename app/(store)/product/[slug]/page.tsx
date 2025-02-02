
import AddtoBasketButton from "@/components/AddtoBasketButton";
import { imageUrl } from "@/lib/imageUrl";
import { getProductsBySlug } from "@/sanity/lib/products/getProductsBySlug";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

async function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = await getProductsBySlug(slug);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <h2 className="text-2xl font-bold text-blue-500">Product not found</h2>
      </div>
    );
  }

  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <div className="container mx-auto px-8 py-12 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Product Image */}
        <div
          className={`relative overflow-hidden rounded-lg shadow-xl transition-opacity duration-300 ${
            isOutOfStock ? "opacity-70" : ""
          }`}
        >
          {product.image && (
            <Image
              src={imageUrl(product.image)}
              alt={product.name || "Product"}
              width={600}
              height={600}
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover object-center transform transition-transform duration-500 hover:scale-110 rounded-lg"
              priority
            />
          )}
          {isOutOfStock && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2 text-xs sm:text-sm font-semibold uppercase rounded-full shadow-md">
              Out of Stock
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 leading-snug">
           {product.name}
          </h1>
          <p className="text-3xl font-bold text-blue-500">
            {product.price ? `Rs ${product.price}` : "Price not available"}
          </p>
          <div className="prose text-gray-700 text-base sm:text-lg leading-relaxed max-w-prose">
            {product?.description && (
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={
                  product.description ? { __html: product.description } : undefined
                }
              />
            )}
          </div>
          <div>
            <AddtoBasketButton product={product} disabled={isOutOfStock} />
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
