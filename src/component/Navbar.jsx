import React from "react";
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
     
      <div className="nav-links">
      <ul>
      
      <li>
          <NavLink to='/home' className={({isActive})=>isActive?"activeNav":""}>Home</NavLink>
      </li>
      <li>
          <NavLink to='/about' className={({isActive})=>isActive?"activeNav":""} >About</NavLink>
      </li>
      <li>
          <NavLink to='/contact' className={({isActive})=>isActive?"activeNav":""}>Contact</NavLink>
      </li>
    </ul>
       
      </div>
     

      
      <div className="nav-logo">
        <h2>CompanyName</h2>
      </div>
    </nav>
  );
}

export default Navbar;
