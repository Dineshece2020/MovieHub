import React, { useState } from 'react';
import "./Navbar.css";
import Logo from './assets/Logo.svg';
import {Link} from 'react-router-dom'

function Navbar({ onSearchChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div className="container-fluid px-4">

          {/* Logo */}
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src={Logo} alt="Logo" className="me-2" style={{ height: '40px' }} />
            
          </ Link>

          {/* Toggler (mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarContent">
            
            {/* 🔍 Responsive Search Input - Always Visible */}
            <form className="d-flex mx-auto my-2 my-lg-0 w-100" style={{ maxWidth: '400px' }}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Movies..."
                aria-label="Search"
                onChange={(e) => onSearchChange(e.target.value)}
              />
              
            </form>

            {/* Nav links */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item navli">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item navli">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              <li className="nav-item navli">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
