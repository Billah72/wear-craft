import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaAngleDown } from 'react-icons/fa'
import { MdOutlinePhoneInTalk } from 'react-icons/md'

const TopHeaer = () => {
  return (
    <div className='bg-[#f8f8f8] py-2 '>
      <div className=' flex justify-between items-center container mx-auto px-24'>
        <div className='flex items-center gap-12 color-text'>
        <div className='flex items-center gap-2'>
       <MdOutlinePhoneInTalk />
       <p className='text-[12px]'>+8801632263666</p>
        </div>
        <div className='flex items-center gap-2'>
          <BsWhatsapp/>
          <p className='text-[12px]'>+8801632263666</p>
        </div>
      </div>
      <div className='text-[12px] color-text'>
        <p>World's Faster Online Shopping Destination</p>
      </div>

      <div className='flex items-center color-text text-[12px] gap-6'>
        <p>Help </p>
        <p>Trac Order</p>
        <p>English</p>
        <p>Contract Us</p>
      </div>
      </div>
      
    </div>
  )
}

export default TopHeaer
