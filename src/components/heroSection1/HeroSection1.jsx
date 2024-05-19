import React from 'react';
import './heroSection1.css'; 

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: "url('../../../public/fondoHero1.jpg')" }}>
      <div className="overlay"></div>
      <div className="content">
        <h1 className="hero-title">IT'S TIME TO ADVENTURES AND EXPERIENCES</h1>
        <div className="search-container">
          <div className="input-group">
            <label>LOCALITATION</label>
            <input type="text" placeholder="12 STREET LAS VEGAS" className="input"/>
          </div>
          <div className="input-group">
            <label>CHECK IN</label>
            <input type="date" className="input" value="2024-11-29"/>
          </div>
          <div className="input-group">
            <label>CHECK OUT</label>
            <input type="date" className="input" value="2024-12-29"/>
          </div>
          <button className="search-button">
            SEARCH <i className="fas fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
