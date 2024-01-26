import React from 'react';
import { currentYear } from '../../utils/DateFunc';
const Footer = () => {
  return (
    <div className='bg-slate-200 p-3 text-center  shadow-lg'>
    Site footer goes here @ {currentYear()}
    </div>

    
  )
}

export default Footer