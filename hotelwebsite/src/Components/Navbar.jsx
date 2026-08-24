import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <ul className="NavBarItems">
        <Link to={"/"} className="NavLogo">
          <img src={"/Assets/image/Logo.png"} alt="logo" height={75} />
        </Link>
        <Link to={"/"} className="NavName">
          <h1>L'hótel</h1>
        </Link>
        <Link to={"/"} className="NavLink">
          HOME
        </Link>
        <Link to={"/rooms"} className="NavLink">
          ROOMS
        </Link>
        <Link to={"/details"} className="NavLink">
          DETAILS
        </Link>
        <Link to={"/booking"} className="NavLink">
          BOOKING
        </Link>
        <input type="text" placeholder="search" className="navSearch" />

        <button
          className="hamburger"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to={"/"} className="NavLink">
            HOME
          </Link>
          <Link to={"/rooms"} className="NavLink">
            ROOMS
          </Link>
          <Link to={"/details"} className="NavLink">
            DETAILS
          </Link>
          <Link to={"/booking"} className="NavLink">
            BOOKING
          </Link>
        </ul>
      </ul>
    </div>
  );
};

export default Navbar;
