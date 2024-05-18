import React from 'react';
import './header.css'; 

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
        <button className="login-button">
          Log In
        </button>
      </div>
    </header>
  );
};

export default Header;
