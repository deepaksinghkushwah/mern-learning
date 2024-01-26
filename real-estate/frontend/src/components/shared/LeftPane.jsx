import React from 'react'
import { useLocation } from 'react-router-dom';
import PropertyFilters from '../PropertyFilters';

const LeftPane = () => {
  const location = useLocation().pathname;  
  return (
    <>
    Left Pane goes here
    {location === '/property/listings' && <div><PropertyFilters/></div>}
    </>
  )
}

export default LeftPane