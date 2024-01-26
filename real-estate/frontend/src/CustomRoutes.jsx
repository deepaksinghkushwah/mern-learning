import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import RequiredAuth from './components/RequiredAuth'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import MainLayout from './pages/layouts/MainLayout'
import ListingsPage from './pages/property/ListingsPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/members/Dashboard'
import PropertyDetail from './pages/property/PropertyDetail'
import RegisterPage from './pages/RegisterPage'
import Unauthorized from './pages/Unauthorized'
import AddProperty from './pages/property/AddProperty'
import UpdateProperty from './pages/property/UpdateProperty'

const CustomRoutes = () => {
  return (
    <Routes>
        <Route path="" element={<MainLayout/>}>
            <Route path='/' element={<HomePage/>}/>            
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/property/listings' element={<ListingsPage/>}/>
            <Route path='/property/detail/:slug' element={<PropertyDetail/>}/>

            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/unauthorized' element={<Unauthorized/>}/>

            <Route element={<RequiredAuth allowedRoles={["registered","admin"]}/>}>              
              <Route path='/members/dashboard' element={<Dashboard/>}/>
            </Route>

            <Route element={<RequiredAuth allowedRoles={["admin"]}/>}>
              <Route path='/property/add' element={<AddProperty/>}/>
              <Route path='/property/update/:slug' element={<UpdateProperty/>}/>              
            </Route>

        </Route>
    </Routes>
  )
}

export default CustomRoutes