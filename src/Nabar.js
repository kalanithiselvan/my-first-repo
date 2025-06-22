import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling
import {Link} from 'react-router-dom'; // If you're using React Router for navigation

export default function Nabar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <div className="navbar__links">
        <Link className='Link' to="/">Home</Link>
        <Link className='Link' to="/about">About</Link>  
        <Link className='Link' to="/reserve">Reservation</Link>
        <Link className='Link' to="/order">OrderOnline</Link>  
        <Link className='Link'to="/login">Login</Link>
      </div>
    </div>
  );
}