import React from 'react'
import {useProductStore} from '../../store/useStore'
import shallow from "zustand/shallow"
import { Link } from "react-router-dom"
const Cart = () => {
  const cart = useProductStore((state) => state.cart, shallow);
  return (
    <div className='mt-4'>
      <Link to="/cart">
        Cart Items <span className='badge-default'>{cart.length}</span>
      </Link>
    </div>
  )
}

export default Cart