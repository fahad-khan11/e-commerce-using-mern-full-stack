import React from 'react'
import Hero from '../components/Common/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductsDetail from '../components/Products/ProductsDetail'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeatureSection from '../components/Products/FeatureSection'

const placeholderProducts = [
  {
    _id:4,
    name:'Product 4',
    price:100,
    images:[{url:"https://picsum.photos/500/500?random=6"}]
  },
  {
    _id:5,
    name:'Product 5',
    price:100,
    images:[{url:"https://picsum.photos/500/500?random=7"}]
  },
  {
    _id:6,
    name:'Product 6',
    price:100,
    images:[{url:"https://picsum.photos/500/500?random=8"}]
  },
  {
    _id:7,
    name:'Product 7',
    price:100,
    images:[{url:"https://picsum.photos/500/500?random=9"}]
  }
]


const Home = () => {
  return (
    <div>
        <Hero/>  
        <GenderCollectionSection/> 
        <NewArrivals/>

        {/* Best seller */}
        <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
        <ProductsDetail/>

        <div className='container mx-auto'>
          <h2 className='t4ext-3xl text-center font-bold mb-4'>
            Top Wears for Women
          </h2>
          <ProductGrid products={placeholderProducts}/>
        </div>
        <FeaturedCollection/>
        <FeatureSection/>
    </div>
  )
}

export default Home