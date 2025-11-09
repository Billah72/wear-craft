import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { LuShoppingCart } from 'react-icons/lu'
import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <div className='border-y py-2 border-gray-200'>
      <div className='flex justify-between items-center container mx-auto px-24'>
        <div className='flex items-center gap-2 color-bg text-white py-2 px-6 rounded-md'>
          <BiCategory />
          <p>All Categoris</p>
        </div>
        <div className='flex gap-12'>
          <NavLink className={({isActive}) => isActive ? 'color-prymary' : ''} to="/">
            Home
          </NavLink>
          <NavLink className={({isActive}) => isActive ? 'color-prymary' : ''} to="/shopnow">
            Shop Now
          </NavLink>
          <NavLink className={({isActive}) => isActive ? 'color-prymary' : ''} to="/about">
            About
          </NavLink>
           <NavLink className={({isActive}) => isActive ? 'color-prymary' : ''} to="/blog">
            Blog
          </NavLink>
          <NavLink className={({isActive}) => isActive ? 'color-prymary' : ''} to="/contract">
            Contact Us
          </NavLink>
         
         
        </div>
        <div className='flex items-center gap-2 color-bg text-white py-2 px-6 rounded-md'>
          <LuShoppingCart />
          <p>All Categoris</p>
        </div>
      </div>
    </div>
  )
}
