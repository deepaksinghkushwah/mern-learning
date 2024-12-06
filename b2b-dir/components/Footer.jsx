import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-center bg-blue-700 text-white py-5'>
      Copyright &copy; {new Date().getFullYear()}, All Rights Reserved &reg;&nbsp; <a href="mailto:deepaksinghkushwah@gmail.com">Deepak</a>
    </div>
  )
}

export default Footer