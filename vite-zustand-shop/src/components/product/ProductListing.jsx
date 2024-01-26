import React from 'react'
import ProductItem from './ProductItem'

const ProductListing = ({ products }) => {
    return (
        <>
            {products.map((item, i) => (
                <div key={i}>
                    <ProductItem product={item}/>
                </div>
            ))}
        </>
    )
}

export default ProductListing