import React from 'react'

const Hero = () => {
  return (
    <div className='bg-blue-500 text-white min-h-52 min-w-full flex items-center justify-center flex-col'>
      <h1 className='text-5xl'>Find the perfect rantal</h1>
      <p>Discover the perfect properties that suite your needs.</p>
      <div className='flex gap-2 my-2 md:flex-row flex-col'>
        <input type="text" name="" id="" />
        <select name="" id="">
          <option value="">Select a location</option>
          <option value="1">Alwar</option>
          <option value="1">Jaipur</option>
          <option value="1">Nagor</option>
          <option value="1">Jalon</option>
        </select>
        <button className='btn'>Search</button>
      </div>
    </div>
  )
}

export default Hero