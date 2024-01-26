import React from 'react'
import {useProductStore, useUserStore} from '../store/useStore'
import shallow from "zustand/shallow"
import {FaTrash} from "react-icons/fa";
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
const FullCart = () => {
  const cart = useProductStore((state) => state.cart, shallow);
  const getCartTotal = useProductStore((state) => state.getCartTotal, shallow);
  const deleteFromCart = useProductStore((state) => state.deleteFromCart, shallow);
  const user = useUserStore(state => state.user);
  const handleDelete = (id) => {    

    Swal.fire({
      title: 'Are you sure',
      text: "You want to delete this item from cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',      
    }).then(result => {
      if(result.isConfirmed){
        deleteFromCart(id)
      }
    });
  }
  return (
    <>
    
      <h2>Your Cart</h2>
      <div className="main-content">
      <table className='customTable'>
        <thead>
          <tr>            
            <th>Title</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map(item => (
            <tr key={item.id}>            
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.qty}</td>
              <td>${(item.qty * item.price).toFixed(2)}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>
                <FaTrash title="Remove from cart"/>
                </button>
                </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>            
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td className='text-center font-bold'>Total Amount</td>

            <td className='font-bold'>${getCartTotal().toFixed(2)}</td>
            
          </tr>
        </tfoot>
      </table>
      {user !== null  && getCartTotal() > 0.00 ? <div className='mt-3 float-right'><Link className='btn' to="/checkout-ship-bill">Proceed To Checkout</Link></div> : ''}
      </div>
      

    </>

  )
}

export default FullCart