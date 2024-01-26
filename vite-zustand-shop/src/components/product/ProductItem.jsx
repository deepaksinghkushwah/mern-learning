import React from 'react'
import {useProductStore} from '../../store/useStore'

const ProductItem = ({ product }) => {
    const addToCart = useProductStore((state) => state.addToCart);       
    return (
        <div className='bg-white shadow-xl border-gray-400 p-10 rounded-lg mb-2'>
            <table width="100%">
                <thead>
                    <tr>
                        <th width="70%">{product.title}</th>
                        <th width="30%" className='text-right'>Price: ${product.price}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="2" className='text-justify'>{product.description}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2" className='text-right'><button className='btn' onClick={() => addToCart(product)} type="button">Add To Cart</button></td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}

export default ProductItem