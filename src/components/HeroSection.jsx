import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('../../public/fondoHero1.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">It's time to adventures and experiences</h1>
        <div className="flex space-x-2 mt-4">
          <input type="text" placeholder="Localitation" className="p-2 rounded"/>
          <input type="date" className="p-2 rounded"/>
          <input type="date" className="p-2 rounded"/>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Search</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
