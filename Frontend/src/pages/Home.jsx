import React from 'react'
import Hero from '../components/Common/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductsDetail from '../components/Products/ProductsDetail'

const Home = () => {
  return (
    <div>
        <Hero/>  
        <GenderCollectionSection/> 
        <NewArrivals/>

        {/* Best seller */}
        <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
        <ProductsDetail/>
    </div>
  )
}

export default Home