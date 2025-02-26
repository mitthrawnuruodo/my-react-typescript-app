// src/components/Header.tsx
import React from 'react';
import { NavLink } from 'react-router';
import './Header.css'; // Create a CSS file for header styling

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          Contact Us
        </NavLink>
        <NavLink to="/cats" className="nav-item">
          Cats
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
