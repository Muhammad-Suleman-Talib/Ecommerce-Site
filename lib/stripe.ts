import Stripe from "stripe";

if(!process.env['STRIPE_SECRET-KEY']){
    throw new Error('Stripe Secret Key is not define !')
}
const stripe = new Stripe(process.env['STRIPE_SECRET-KEY']!,{
    apiVersion:'2024-12-18.acacia'  
  })
export default stripe