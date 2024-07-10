// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../Home/Home.css";

const NavBar = () => (
    <div className='navbar-wrapper'>
  <nav>
    <ul className='navbar-ul-wrapper'>
      <li className='navbar-li-wrapper'><Link to="/">Home</Link></li>
      <li className='navbar-li-wrapper'><Link to="/about">About</Link></li>
      <li className='navbar-li-wrapper'><Link to="/Users">Users</Link> </li>
    </ul>
  </nav>
  </div>
);

export default NavBar;
