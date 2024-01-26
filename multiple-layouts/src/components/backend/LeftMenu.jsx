import React from 'react'
import { Link } from 'react-router-dom'

function LeftMenu() {
  return (
    <div>
      <h1 className='text-2xl'>Admin Layout</h1>
      <ul className='flex flex-col gap-3 px-4 py-2 '>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/admin">Admin</Link></li>
        </ul>
    </div>
  )
}

export default LeftMenu