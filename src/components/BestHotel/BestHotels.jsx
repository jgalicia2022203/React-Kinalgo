import React from 'react';
import './BestHotels.css';

const hotels = [
  {
    name: 'PASSALACQUA',
    location: 'SHORES OF LAKE COMO',
    image: '/bestHotel1.jpg',
    city: 'Argentina'
  },
  {
    name: 'HOTEL ROSEWOOD',
    location: 'HONG KONG',
    image: '/bestHotel2.jpg',
    city: 'HONG KONG'
  },
  {
    name: 'FOUR SEASONS',
    location: 'A ORILLAS DEL CHAO PHRAYA',
    image: '/bestHotel3.jpg',
    city: 'BANGKOK'
  },
  {
    name: 'THE UPPER HOUSE',
    location: 'HONG KONG',
    image: '/bestHotel4.jpg',
    city: 'HONG KONG'
  }
];

const BestHotels = () => {
  return (
    <section className="best-hotels">
      <h2 className="title">BEST HOTELS</h2>
      <div className="hotel-cards">
        {hotels.map((hotel, index) => (
          <div className="best-hotel-card" key={index}>
            <img src={hotel.image} alt={hotel.name} className="best-hotel-image"/>
            <div className="best-hotel-info">
              <h3 className="best-hotel-name">{hotel.name}</h3>
              <p className="best-hotel-location">{hotel.location}</p>
              <div className="best-hotel-city">
                <i className="fas fa-map-marker-alt"></i>
                <span>{hotel.city}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestHotels;
