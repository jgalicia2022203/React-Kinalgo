import React, { useState } from 'react';
import Header from '../components/header/Header';
import HeroSection from '../components/heroSection1/HeroSection1';
import BestHotels from '../components/BestHotel/BestHotels';
import OurServices from '../components/OurServices/OurServices';
import Footer from '../components/Footer/Footer';
import './homePage.css'; 

const mockHotels = [
  {
    id: 1,
    name: "Hotel lalaland",
    rating: 4,
    location: "Las vegas",
    price: 133,
    imageUrl: "/Busqueda1.jpg",
    checkIn: "2024-11-29",
    checkOut: "2024-12-29",
    reviews: 2083,
    score: 7.6,
    status: "Good",
    breakfast: true,
    provider: "Comfort inn hotels",
    discount: null
  },
  {
    id: 2,
    name: "The Iron Horse Inn",
    rating: 4,
    location: "Las Vegas",
    price: 98,
    imageUrl: "/Busqueda2.jpg",
    checkIn: "2024-11-29",
    checkOut: "2024-12-29",
    reviews: 4019,
    score: 8.7,
    status: "Excellent",
    breakfast: true,
    provider: "Expedia",
    discount: 35
  },
  {
    id: 3,
    name: "Comfort Suites University",
    rating: 5,
    location: "Las Vegas",
    price: 200,
    imageUrl: "/Busqueda3.jpg",
    checkIn: "2024-11-29",
    checkOut: "2024-12-29",
    reviews: 6290,
    score: 9.5,
    status: "Perfect",
    breakfast: true,
    provider: "Comfort suites hotels",
    discount: 50
  }
];

const HomePage = () => {
  const [hotels, setHotels] = useState([]);

  const handleSearch = (searchParams) => {
    const filteredHotels = mockHotels.filter(hotel => {
      return hotel.location.toLowerCase().includes(searchParams.location.toLowerCase()) &&
             hotel.checkIn === searchParams.checkIn &&
             hotel.checkOut === searchParams.checkOut;
    });
    setHotels(filteredHotels);
  };

  return (
    <div>
      <Header />
      <HeroSection onSearch={handleSearch} />
      <div className="search-results">
        {hotels.length > 0 && (
          <div className="results-container">
            {hotels.map(hotel => (
              <div key={hotel.id} className="hotel-card">
                <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image"/>
                <div className="hotel-card-content">
                  <div className="hotel-info">
                    <h2>{hotel.name}</h2>
                    <p>{hotel.location}</p>
                    <p>Check-in: {hotel.checkIn} | Check-out: {hotel.checkOut}</p>
                    <p>Rating: {hotel.rating} stars</p>
                    <p>{hotel.reviews} reviews</p>
                    <p>Score: {hotel.score} - {hotel.status}</p>
                    <p>{hotel.breakfast ? "Breakfast included" : "No breakfast"}</p>
                    <p>Provider: {hotel.provider}</p>
                  </div>
                  <div className="provider-box">
                    <span className="price">${hotel.price}</span>
                    {hotel.discount && <span className="discount">{hotel.discount}% off</span>}
                    <button className="view-deal-button">
                      View Deal
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <BestHotels />
      <OurServices />
      <Footer />
    </div>
  );
};

export default HomePage;
