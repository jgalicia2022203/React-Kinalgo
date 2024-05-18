import React, { useState } from 'react';
import './searchPage.css';

const SearchPage = () => {
  // Estados locales para la ubicación y las fechas de entrada y salida
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  // Lista de hoteles
  const hotels = [
    {
      id: 1,
      name: 'Hotel lalaland',
      location: 'Las Vegas',
      rating: 7.6,
      reviews: 2083,
      price: 133,
      image: 'https://t4.ftcdn.net/jpg/00/09/21/15/360_F_9211505_d4hxfNtPeTfgt7AeGmoO7u79P2hwxkoQ.jpg'
    },
    {
      id: 2,
      name: 'The Iron Horse Inn',
      location: 'Las Vegas',
      rating: 8.7,
      reviews: 4019,
      price: 98,
      image: 'https://t4.ftcdn.net/jpg/00/09/21/15/360_F_9211505_d4hxfNtPeTfgt7AeGmoO7u79P2hwxkoQ.jpg'
    },
    {
      id: 3,
      name: 'Comfort Suites University',
      location: 'Las Vegas',
      rating: 9.5,
      reviews: 6290,
      price: 200,
      image: 'https://t4.ftcdn.net/jpg/00/09/21/15/360_F_9211505_d4hxfNtPeTfgt7AeGmoO7u79P2hwxkoQ.jpg'
    },
    {
      id: 4,
      name: 'Hotel lalaland',
      location: 'Las Vegas',
      rating: 7.6,
      reviews: 2083,
      price: 133,
      image: 'https://t4.ftcdn.net/jpg/00/09/21/15/360_F_9211505_d4hxfNtPeTfgt7AeGmoO7u79P2hwxkoQ.jpg'
    },
    {
      id: 5,
      name: 'Hotel lalaland',
      location: 'Las Vegas',
      rating: 7.6,
      reviews: 2083,
      price: 133,
      image: 'https://t4.ftcdn.net/jpg/00/09/21/15/360_F_9211505_d4hxfNtPeTfgt7AeGmoO7u79P2hwxkoQ.jpg'
    }
  ];

  // Función para filtrar hoteles según la ubicación y el nombre
  const filterHotels = () => {
    return hotels.filter(hotel =>
      hotel.location.toLowerCase().includes(location.toLowerCase()) ||
      hotel.name.toLowerCase().includes(location.toLowerCase())
    );
  };

  // Manejadores de cambios en los campos de búsqueda
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCheckInDateChange = (event) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutDateChange = (event) => {
    setCheckOutDate(event.target.value);
  };

  return (
    <div className="search-page">
      <header className="header">
        <div className="logo">KINAGLO</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Best Hotels</li>
            <li>Our Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <button className="login-button">Log In</button>
      </header>
      <div className="search-container">
        <input type="text" placeholder="Location" value={location} onChange={handleLocationChange} />
        <input type="date" value={checkInDate} onChange={handleCheckInDateChange} />
        <input type="date" value={checkOutDate} onChange={handleCheckOutDateChange} />
        <button>Search</button>
      </div>
      <div className="hotel-list">
        {filterHotels().map(hotel => (
          <div className="hotel-card" key={hotel.id}>
            <img src={hotel.image} alt={hotel.name} />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>
              <p>{hotel.rating} - Good ({hotel.reviews} reviews)</p>
              <div className="hotel-price">
                <span>${hotel.price}</span>
                <button>View Deal</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
