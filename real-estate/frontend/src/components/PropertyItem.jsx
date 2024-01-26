import React from 'react'
import { Link } from 'react-router-dom'

const PropertyItem = ({ item }) => {
    return (
        <div className='border-green-500 bg-gray-300 text-black mt-1 p-2 rounded shadow-md'>
            <Link to={`/property/detail/${item.slug}`}>
                {item?.images?.length > 0 && <img src={item?.images[0]['thumb']} className="rounded shadow-md border-black border-2" />}
                
            </Link>
            <div className='text-justify'>{item.name}</div>
            <div className="mt-1"><strong>Rent / Buy:</strong> {item.type.toUpperCase()}</div>
            <Link to={`/property/detail/${item.slug}`} className='bg-slate-700 text-white rounded border-2 border-black pt-1 pb-1 p-3 mt-2'>
                Details
            </Link>
        </div>
    )
}

export default PropertyItem