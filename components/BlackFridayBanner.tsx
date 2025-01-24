import { COUPON_CODES, couponCode, } from "@/sanity/lib/sale/cuponCode";
import { getActiveSaleByCouponCode, } from "@/sanity/lib/sale/gerActiveSaleByCuponCode";

// async function BlackFridayBanner() {
//     try {
//         const Sale = await getActiveSaleByCuponCode(COUPON_CODES.BFRIDAY as CuponCode);
//         console.log("Sale object:", Sale); // Log the Sale object to check its value

//         if (!Sale?.isActive) {
//             return null; // If the sale is not active, do not render the banner
//         }

//         return (
//             <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4">
//                 <h2>Your Black Friday Sale is Active!</h2>
//                 <p>Don't miss out on our amazing deals this Black Friday!</p>
//             </div>
//         );
//     } catch (error) {
//         console.error("Error fetching sale:", error);
//         return null;
//     }
// }

async function BlackFridayBanner() {
    try {
        const sales = await getActiveSaleByCouponCode(COUPON_CODES.BFRIDAY as couponCode);
        console.log("Sale object:", sales);

        if (!sales) {
            console.log('Sale is not available');
            return null; // Don't render the banner if no sale is found
        }

        return (
            <div className="relative w-full max-w-6.5xl h-[350px] bg-gradient-to-r from-black to-red-500 text-white flex items-center p-8 rounded-lg shadow-xl transition-transform duration-500  mx-auto">
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-800 to-red-600 opacity-50 blur-lg"></div>
                <div className="relative z-10 w-1/2 space-y-4">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight animate-fade-in">
                        {sales.title}
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg font-medium animate-fade-in-delay">
                        {sales.description}
                    </p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-300 animate-bounce">
                        Use Code: <span>{sales.couponCode}</span> for {sales.discountAmount}% off!
                    </p>
                    <button className="mt-4 bg-red-700 hover:bg-red-800 text-white text-sm sm:text-base font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300">
                        Shop Now
                    </button>
                </div>
                <div className="w-full sm:w-1/2 h-full">
                    <img
                        src="/iphone.jpeg"
                        alt="Promotional Banner"
                        className="h-full w-full object-cover rounded-r-lg shadow-lg"
                    />
                </div>

            </div>


        );
    } catch (error) {
        console.error("Error fetching sale:", error);
        return null;
    }
}


export default BlackFridayBanner;