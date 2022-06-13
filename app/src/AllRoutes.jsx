import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignUp } from './Authentication/SignUp'
import { Footer } from './Components/Footer'
import { Navbar } from './Components/Navbar'
import { Home } from './LandingPage/Home'
import { Camera } from './Pages/Camera/Camera'
import { Phone } from './Pages/CellPhone/Phone'
import { Computer } from './Pages/ComputerTablet/Computer';
import { Tv } from './Pages/HomeTheater/Tv';

export const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/phone' element={<Phone/>}/>
            <Route path='/tv' element={<Tv/>}/>
            <Route path='/computer' element={<Computer/>}/>
            <Route path='/camera' element={<Camera/>}/>
           
            <Route path='/signup' element={<SignUp/>}/>
            {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
        <Footer/>
    </div>
  )
}
