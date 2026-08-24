import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer.jsx'
import Home from "../Pages/Home.jsx"
import Rooms from "../Pages/Rooms.jsx"
import Details from '../Pages/Details.jsx'
import Booking from '../Pages/Booking.jsx'
const PageRoute = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rooms" element={<Rooms/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default PageRoute