import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Home from "../Pages/Home.jsx"
import Rooms from "../Pages/Rooms.jsx"

const PageRoute = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rooms" element={<Rooms/>} />
      </Routes>
    </>
  )
}

export default PageRoute