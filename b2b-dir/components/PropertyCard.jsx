import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const PropertyCard = ({item}) => {
  return (
    <div        
        className="bg-white text-black rounded-lg shadow-md p-8 my-3 w-full">
          <div className="flex flex-col justify-center text-center gap-3">
            <Image
              src={`https://picsum.photos/seed/dog-${item._id}/200/100`}
              width={200}
              height={100}
              alt="Hello"
              priority={false}
              className="shadow-md border border-black"
            />
            <Link href={`/properties/${item._id}`}>{item.name}</Link>
            <div>Type: {item.type}</div>
          </div>
          </div>
  )
}
