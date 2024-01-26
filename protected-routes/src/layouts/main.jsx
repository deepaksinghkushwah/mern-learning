import React from 'react'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Links from "../components/Links";
import Footer from '../components/Footer';
const main = () => {
  return (
    <div className='container'>
      <ToastContainer/>
      <Links/>
      <div className='card card-primary'>
        <div className="card-body bg-light">
      <Outlet />
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default main