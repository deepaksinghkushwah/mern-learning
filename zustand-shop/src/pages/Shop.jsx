import React, { useEffect } from 'react'
import ProductListing from '../components/product/ProductListing';
import { useProductStore, useBaseStore } from '../store/useStore';
import shallow from "zustand/shallow";
const Shop = () => {
  const getProducts = useProductStore((state) => state.getProducts, shallow);
  const products = useProductStore((state) => state.products, shallow);
  const setLoading = useBaseStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(true);
    const loadProducts = async () => {
      await getProducts();
      setLoading(false);
    }
    loadProducts();

  }, [setLoading, getProducts]);

  return (
    <>
    <h2>Shop</h2>
      <div className="main-content">
        <ProductListing products={products} />
      </div>
    </>

  )
}

export default Shop