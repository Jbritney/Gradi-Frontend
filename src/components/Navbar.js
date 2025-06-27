import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      {/* Left section: Logo with stars below it */}
      <div className="navbar-logo">
        <Link to="/" className="gradi-link">
          {/* Logo Text */}
          <span className="gradi-name">
            Gradi<span className="dot">.</span>lk
          </span>

          {/* Star Rating below logo */}
          <div className="stars">
            ★ ★ ★ ★ <span className="empty">★</span>
          </div>
        </Link>
      </div>

      {/* Right section: Navigation links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sell">Sell</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
