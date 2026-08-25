import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul className="NavBarItems">
        <Link to={"/"} className="NavName">
          <h1>L'hótel</h1>
        </Link>
        <div className="subNav">
          <Link to={"/about"} className="NavLink">
          ABOUT
        </Link>
        <Link to={"/services"} className="NavLink">
          SERVICES
        </Link>
        <Link to={"/rooms"} className="NavLink">
          ROOMS
        </Link>
        <Link to={"/booking"} className="NavLink">
          BOOKING
        </Link>
        </div>
        
         <Link to={"/rooms"} className="NavLink">
          <button type="button" className="navBut">BOOK ROOM</button>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
