import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const buttonScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    };
    window.addEventListener('scroll', buttonScroll)
    return()=> window.removeEventListener('scroll', buttonScroll)
  }, []);
  return (
    <nav className={`NavBarItems ${scrolled ? 'scrolled' : ''}`}>
      <ul className="NavList">
        <Link to={"/"} className="NavName">
          <h1>L'hótel</h1>
        </Link>
        <div className="subNav">
          <Link to={"/about"} className="NavLink">
            About
          </Link>
          <Link to={"/services"} className="NavLink">
            Services
          </Link>
          <Link to={"/rooms"} className="NavLink">
            Rooms
          </Link>
          <Link to={"/booking"} className="NavLink">
            Booking
          </Link>
        </div>
        <Link to={"/rooms"} className="NavLink">
          <button type="button" className="navBut">
            Book room
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
