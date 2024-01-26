import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <ul className='flex gap-3 bg-blue-300 px-4 py-2 rounded'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/admin">Admin</Link></li>
        </ul>
    </div>
  )
}

export default Header