import React from 'react'
import Hero from './HomeComponents/Hero'
import HomeCategory from './HomeComponents/HomeCategory'
import PopularProdducts from './HomeComponents/popularProducts/PopularProdduct'
import LatestPart from './HomeComponents/LatestPart'
import NewProduct from './HomeComponents/NewProduct'
import Collection from './HomeComponents/Collection'
import Support from './HomeComponents/support'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeCategory/>
      <PopularProdducts/>
      <LatestPart></LatestPart>
      <NewProduct></NewProduct>
      <Collection></Collection>
      <Support></Support>
      
    </div>
  )
}

export default Home
