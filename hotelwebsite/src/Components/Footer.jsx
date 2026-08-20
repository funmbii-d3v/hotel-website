import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  const [email, setEmail] = useState('')
  const submitBtn = (e) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    setEmail('')
  }
  return (
    <footer className='footer'>
        <div className='form'>
          <h2>Stay in the know</h2>
          <form onSubmit={submitBtn}>
            <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}required/>
            <button type="submit" className='sub'>Okay!</button>
          </form>
          <p>By entering your email, you agree to receive email marketing from us at your email address and agree to the Terms and Privacy Policy.</p>
          <img src={"/Assets/image/Logo.png"} alt="logo" height={80}/>
          <p>©2026 All Rights Reserved</p>
        </div>
        <div className='footLinks'>
          <h3>Quick Links</h3>
          <Link to={"/"} className='Link'>Home</Link>
          <Link to={"/rooms"} className='Link'>Rooms</Link>
        </div>
        <div>
          <h3>Support</h3>
          <p>Help Center</p>
          <p>Reach out</p>
          <p>Damages</p>
          <p>Sponsorship</p>
        </div>
    </footer>
  )
}

export default Footer