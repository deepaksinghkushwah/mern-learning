import Link from 'next/link'
import React from 'react'

const InfoboxItem = ({title, description}) => {
  return (
    <div className=' bg-gray-200 text-black w-[300px]  px-10 py-10 text-center'>
      <h1 className='text-3xl font-bold'>
        {title}
      </h1>
      <p>{description}</p>
      <div className='py-2'>
      <Link href="/" className='btn'>More...</Link>
      </div>
    </div>
  )
}

export default InfoboxItem