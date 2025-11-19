import React from 'react'
import bg from '../../../assets/image/HERO-COVER.jpg'

const Hero = () => {
  return (
    <div>
      <div 
      style={{backgroundImage: `url(${bg})`}}
      className='container bg-cover my-10 px-24 mx-auto h-[70vh] bg-no-repeat '>
        <div className='flex flex-col justify-center items-start h-full gap-3'>
          <h3 className='font-semibold text-2xl color-prymary'>Bigest Sele for winter 70% Off</h3>
          <h1 className='font-bold text-4xl text-gray-500'>Bigest  Sale for Winter<br /> Man & Woman</h1>
          <button className='btn color-bg text-white rounded'>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
