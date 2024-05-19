import React, { useState } from 'react';
import Header from '../components/header/Header';
import HeroSection from '../components/heroSection1/HeroSection1';
import BestHotels from '../components/BestHotel/BestHotels';
import OurServices from '../components/OurServices/OurServices';
import Footer from '../components/Footer/Footer';
import './homePage.css'

const mockHotels = [
  {
    id: 1,
    name: "Hotel lalaland",
    rating: 4,
    location: "Las Vegas",
    price: 133,
    imageUrl: "../../public/Busqueda1.jpg",
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
    imageUrl: "../../public/Busqueda2.jpg",
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
    imageUrl: "../../public/Busqueda3.jpg",
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
      <div style={{ padding: '20px' }}>
        {hotels.length > 0 && (
          <div style={{ margin: '20px 0' }}>
            {hotels.map(hotel => (
              <div key={hotel.id} className="hotel-card">
                <img src={hotel.imageUrl} alt={hotel.name} />
                <div className="hotel-info">
                  <h2 className="hotel-name">{hotel.name}</h2>
                  <div className="hotel-details">
                    <p>{hotel.rating} stars</p>
                    <p><i className="fas fa-calendar-alt"></i> {hotel.checkIn} - {hotel.checkOut}</p>
                    <p>{hotel.score} - {hotel.status}</p>
                    <p>{hotel.reviews} reviews</p>
                  </div>
                </div>
                <div className="price-box">
                  <p className="hotel-provider">{hotel.provider}</p>
                  <p className="hotel-breakfast"><i className="fas fa-check"></i> Breakfast included</p>
                  {hotel.discount && <p className="hotel-discount">{hotel.discount}% off</p>}
                  <p className="price">${hotel.price}</p>
                  <button className="view-deal">View Deal</button>
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
