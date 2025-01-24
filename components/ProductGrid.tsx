'use client'
import { ProductType } from "@/sanity.types";
import { AnimatePresence, motion } from "framer-motion";
import ProductThumb from "./ProductThumb";

function ProductGrid({ products }: { products: ProductType[] }) {
    return (
        <AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {Array.isArray(products) ? products.map((product) => (
                    <motion.div
                      key={product._id}
                      layout
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-center items-center"
                    >
                      <ProductThumb product={product} />
                    </motion.div>

                )) : (
                    <div className="col-span-full text-center text-red-500">
                        Error: Products data is not available.
                    </div>
                )}
            </div>
        </AnimatePresence>
    );
}

export default ProductGrid;

