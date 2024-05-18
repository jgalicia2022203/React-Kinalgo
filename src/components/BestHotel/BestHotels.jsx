import React from 'react';
import './BestHotels.css';

const hotels = [
  {
    name: 'PASSALACQUA',
    location: 'SHORES OF LAKE COMO',
    image: '../../public/bestHotel1.jpg',
    city: 'COMO'
  },
  {
    name: 'HOTEL ROSEWOOD',
    location: 'HONG KONG',
    image: '../../public/bestHotel2.jpg',
    city: 'HONG KONG'
  },
  {
    name: 'FOUR SEASONSK',
    location: 'A ORILLAS DEL CHAO PHRAYA',
    image: '../../public/bestHotel3.jpg',
    city: 'BANGKOK'
  },
  {
    name: 'THE UPPER HOUSE',
    location: 'HONG KONG',
    image: '../../public/bestHotel4.jpg',
    city: 'HONG KONG'
  }
];

const BestHotels = () => {
  return (
    <section className="best-hotels">
      <h2 className="title">BEST HOTELS</h2>
      <div className="hotel-cards">
        {hotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <img src={hotel.image} alt={hotel.name} className="hotel-image"/>
            <div className="hotel-info">
              <h3 className="hotel-name">{hotel.name}</h3>
              <p className="hotel-location">{hotel.location}</p>
              <div className="hotel-city">
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
