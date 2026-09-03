import React, { useState, useEffect } from "react";
import { FaXmark , FaBars} from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen]= useState(false)
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
  const closeMenu= ()=> setMenuOpen(false)
  return (
    <nav className={`NavBarItems ${scrolled ? 'scrolled' : ''}`}>
      <ul className="NavList">
        <Link to={"/"} className="NavName" onClick={closeMenu}>
          <h1>L'hótel</h1>
        </Link>
        <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>{menuOpen ? <FaXmark className="ham"/> : <FaBars className="ham"/> }</div>
        <div className={`subNav ${menuOpen ? 'show' : ''}`}>
          <Link to={"/about"} className="NavLink" onClick={closeMenu}>
            About
          </Link>
          <Link to={"/services"} className="NavLink" onClick={closeMenu}>
            Services
          </Link>
          <Link to={"/rooms"} className="NavLink" onClick={closeMenu}>
            Rooms
          </Link>
          <Link to={"/booking"} className="NavLink" onClick={closeMenu}>
            Booking
          </Link>
        </div>
        <Link to={"/rooms"} className="NavLink" onClick={closeMenu}>
          <button type="button" className="navBut">
            Book room
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;