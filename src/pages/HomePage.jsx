import React from 'react';
import Header from '../components/header/Header';
import HeroSection from '../components/heroSection1/HeroSection';
import BestHotels from '../components/BestHotel/BestHotels';
import OurServices from '../components/OurServices/OurServices';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BestHotels/>
      <OurServices/>
    </div>
  );
};

export default HomePage;
