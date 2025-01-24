import { Category, ProductType } from "@/sanity.types";
import ProductGrid from "./ProductGrid";
import CategorySelector from "./ui/category-selector";

interface ProductsViewProps {
    products: ProductType[];
    categories: Category[];
}
const ProdutsView = ({ products,categories }: ProductsViewProps) => {
    return (
        <div className="flex flex-col "> 
    {/* //    Categories  */}
       <div className="w-full sm:w-[200px]">
        <CategorySelector categories={categories} />
       </div>
    {/* // products  */}
    <div className="flex-1 ">
            <ProductGrid products={products}  />

            <hr className="w-1/2 sm:w-3/4" />
        </div>
    </div>
    )
}

export default ProdutsView;