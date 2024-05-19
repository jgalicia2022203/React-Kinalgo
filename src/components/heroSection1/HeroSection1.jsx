import React, { useState } from 'react';
import './heroSection1.css';

const HeroSection = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSearch = () => {
    onSearch({ location, checkIn, checkOut });
  };

  return (
    <section className="hero-section" style={{ backgroundImage: "url('/fondoHero1.jpg')" }}>
      <div className="overlay"></div>
      <div className="content">
        <h1 className="hero-title">IT'S TIME TO ADVENTURES AND EXPERIENCES</h1>
        <div className="search-container">
          <div className="input-group">
            <label>LOCATION</label>
            <input type="text" placeholder="12 STREET LAS VEGAS" className="input" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className="input-group">
            <label>CHECK IN</label>
            <input type="date" className="input" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>
          <div className="input-group">
            <label>CHECK OUT</label>
            <input type="date" className="input" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>
          <button className="search-button" onClick={handleSearch}>
            SEARCH <i className="fas fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
