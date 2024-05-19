import React from 'react';
import Header from '../components/header/Header';
import HeroSection from '../components/heroSection1/HeroSection1';
import BestHotels from '../components/BestHotel/BestHotels';
import OurServices from '../components/OurServices/OurServices';
import Fotter from '../Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BestHotels/>
      <OurServices/>
      <Fotter/>
    </div>
  );
};

export default HomePage;
