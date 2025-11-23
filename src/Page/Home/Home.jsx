import React from 'react'
import Hero from './HomeComponents/Hero'
import HomeCategory from './HomeComponents/HomeCategory'
import PopularProdducts from './HomeComponents/popularProducts/PopularProdduct'
import LatestPart from './HomeComponents/LatestPart'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeCategory/>
      <PopularProdducts/>
      <LatestPart></LatestPart>
    </div>
  )
}

export default Home
