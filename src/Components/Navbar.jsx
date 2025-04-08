import "./Navbarstyle.css";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-left">
          <a href="/"><h2><span>Q</span>BRIDGE</h2></a>
        </div>
        <div className="theme-toggle">
          <label className="switch">
            <input
              type="checkbox"
            />
          </label>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/feature">Features</a></li>
          <li><a href="/Login">Login</a></li>
          <li><a href="/signup">SignUp</a></li>
        </ul>
      </div>
    </nav>
  );
}