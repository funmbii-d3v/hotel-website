import React, {useEffect, useState,}from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer.jsx'
import Home from "../Pages/Home.jsx"
import Rooms from "../Pages/Rooms.jsx"
import Services from '../Pages/Services.jsx'
import About from '../Pages/About.jsx'
import Booking from '../Pages/Booking.jsx'
const PageRoute = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/rooms" element={<Rooms/>} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default PageRoute