import { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
const HeroSection = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(
      `/search?address=${location}&startDate=${checkIn}&endDate=${checkOut}`
    );
  };

  return (
    <section className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center bg-[url('/fondoHero1.jpg')]">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 w-full max-w-5xl mx-auto p-5 text-center">
        <h1 className="text-8xl text-yellow-800 text-left ml-12 mb-10 font-bold">
          IT&apos;S TIME TO ADVENTURES AND EXPERIENCES
        </h1>
        <div className="flex gap-2.5 justify-center items-center bg-black bg-opacity-50 p-2.5 rounded-lg backdrop-blur-md max-w-4xl mx-auto">
          <div className="flex flex-col items-start">
            <label className="text-white text-xs mb-1">LOCATION</label>
            <input
              type="text"
              placeholder="12 STREET LAS VEGAS"
              className="p-2 rounded bg-transparent border border-gray-300 text-white w-48"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-white text-xs mb-1">CHECK IN</label>
            <input
              type="date"
              className="p-2 rounded bg-transparent border border-gray-300 text-white w-48"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-white text-xs mb-1">CHECK OUT</label>
            <input
              type="date"
              className="p-2 rounded bg-transparent border border-gray-300 text-white w-48"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <button
            className="bg-yellow-800 hover:bg-yellow-900 text-white mt-4 p-2.5 px-4 rounded flex items-center justify-center font-bold w-full"
            onClick={handleSearch}
          >
            SEARCH <i className="fas fa-search ml-2" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
