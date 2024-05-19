// Header.jsx
import React from 'react';
import './header.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="../../../public/logo.png" alt="Logo" className="logo"/>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Best Hotels</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <div className="login-container">
        {/* Utilizamos el componente Link para redirigir a LoginPage.jsx */}
        <Link to="/login" className="login-button">
          Log In
        </Link>
      </div>
    </header>
  );
};

export default Header;
