import React from 'react'
import Hero from './HomeComponents/Hero'
import HomeCategory from './HomeComponents/HomeCategory'
import PopularProdducts from './HomeComponents/popularProducts/PopularProdduct'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeCategory/>
      <PopularProdducts/>
    </div>
  )
}

export default Home
