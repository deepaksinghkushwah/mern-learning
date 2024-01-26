import { useEffect,useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import shallow from 'zustand/shallow';
import Pagination from '../../components/Pagination';
import PropertyItem from '../../components/PropertyItem';
import { useBaseStore, usePropertyStore } from "../../store/useStore";
const ListingsPage = () => {
  const properties = usePropertyStore((state) => state.properties, shallow);
  const getAllProperties = usePropertyStore(state => state.getAllProperties);
  const pagination = usePropertyStore(state => state.pagination);
  const setLoading = useBaseStore(state => state.setLoading);
  const total = usePropertyStore(state => state.total);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {        
    const loadProperties = async () => {      
      const page = searchParams.get('page') || 1;
      setLoading(true);      
      await getAllProperties(page);
      setLoading(false);      
    }
    loadProperties();
  }, [searchParams.get('page')])

  return (
    <>
      <h1>Rent or Buy Properties</h1>      
      
      <div className='row row-cols-5'>
        {properties.map(item => (
          <div className='col' key={item._id} >
          <PropertyItem item={item} />
          </div>
        ))}        
      </div>
      <Pagination pagination={pagination} total={total} />
      
    </>
  )
}

export default ListingsPage