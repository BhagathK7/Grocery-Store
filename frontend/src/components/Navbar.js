import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles.css';
import './Navbar.css'; // This will handle the specific navbar styles

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <i className="fa-solid fa-shopping-basket"></i> Grocery
      </Link>

      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>

      <div className="icons">
        <div id="menu-btn" className="fa-solid fa-bars" onClick={toggleMenu}></div>
        <Link to="/cart"><div className="fa-solid fa-shopping-cart"></div></Link>
        <Link to="/login"><div className="fa-solid fa-user"></div></Link>
      </div>
    </header>
  );
};

export default Navbar;
