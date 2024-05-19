import React from 'react';
import './historyPage.css';

const HistoryPage = () => {
  const reservations = [
    {
      id: 1,
      name: 'Hotel La Riviera de Atitlan',
      location: 'Atitlan',
      rating: 4.5,
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/ca/12/30/villa-del-palmar-beach.jpg?w=1200&h=-1&s=1'
    },
    {
      id: 2,
      name: 'Hotel La Riviera de Atitlan',
      location: 'Atitlan',
      rating: 4.5,
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/ca/12/30/villa-del-palmar-beach.jpg?w=1200&h=-1&s=1'
    },
    {
      id: 3,
      name: 'Hotel La Riviera de Atitlan',
      location: 'Atitlan',
      rating: 4.5,
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/ca/12/30/villa-del-palmar-beach.jpg?w=1200&h=-1&s=1'
    },
    {
      id: 4,
      name: 'Hotel La Riviera de Atitlan',
      location: 'Atitlan',
      rating: 4.5,
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/ca/12/30/villa-del-palmar-beach.jpg?w=1200&h=-1&s=1'
    }

  ];

  return (
    <div className="history-page">
      <header className="header">
        <div className="logo">
          <img src="URL_DE_LA_LOGO.jpg" alt="Logo" />
        </div>
      </header>
      <div className="content">
        <h1>Reservations history</h1>
        <div className="reservation-list">
          {reservations.map(reservation => (
            <div className="reservation-card" key={reservation.id}>
              <img src={reservation.image} alt={reservation.name} className="reservation-image" />
              <div className="reservation-info">
                <h3>{reservation.name}</h3>
                <p>{reservation.location}</p>
                <p>Rating: {reservation.rating}</p>
              </div>
              <div className="arrow">
                <button></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
