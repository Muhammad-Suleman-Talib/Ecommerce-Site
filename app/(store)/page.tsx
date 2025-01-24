import BlackFridayBanner from '@/components/BlackFridayBanner'
import Sale2025 from '@/components/head'
import ProdutsView from '@/components/productsView'
import { Button } from '@/components/ui/button'
import { getAllCategories } from '@/sanity/lib/products/getAllCategories'
import { getAllProducts } from '@/sanity/lib/products/getAllproducts'
import React from 'react'

export default async function Homepage() {
  const produts = await getAllProducts()
  const categories = await getAllCategories()
  return (
    <>

    <div className=' '>
      <Sale2025/>
   <BlackFridayBanner/>

      <ProdutsView  products={produts} categories={categories} />
    </div>
    </>
  )
}
