import React from 'react'

const SectionHeading = ({heading,colorHeading, discription}) => {
  return (
    <div>
        <div>
            <h3 className='text-4xl text-gray-700 font-semibold'>{heading}<span className='color-prymary'>{colorHeading}</span> </h3>
            <p className='style-text'>{discription}</p>
        </div>
    </div>
  )
}

export default SectionHeading