import React from 'react'
import InfoboxItem from './InfoboxItem'

const Infoboxes = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 md:flex-row md:items-start my-2'>
      <InfoboxItem title="For Renters" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dolore."/>
      
      <InfoboxItem title="For Buyers" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dolore." />
    </div>
  )
}

export default Infoboxes