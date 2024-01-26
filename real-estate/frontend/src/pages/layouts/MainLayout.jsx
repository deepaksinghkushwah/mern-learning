import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/shared/Footer'
import Header from '../../components/shared/Header'
import LeftPane from '../../components/shared/LeftPane'

const MainLayout = () => {
    return (
        <div className=''>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-2'><LeftPane /></div>
                    <div className='col-10'>
                        <Outlet />
                    </div>
                </div>

            </div>
            <Footer />


        </div>
    )
}

export default MainLayout