import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { Navbar } from './Components/Navbar'
import { Home } from './LandingPage/Home'
import { Camera } from './Pages/Camera/Camera'
import { Phone } from './Pages/CellPhone/Phone'
import { Computer } from './Pages/ComputerTablet/Computer'

export const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/phone' element={<Phone/>}/>
            <Route path='/computer' element={<Computer/>}/>
            <Route path='/camera' element={<Camera/>}/>
            {/* <Route path='/' element={<Home/>}/> */}
            {/* <Route path='/' element={<Home/>}/> */}
            {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
        <Footer/>
    </div>
  )
}
