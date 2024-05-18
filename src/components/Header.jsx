import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="../../public/logo.png" alt="Logo" className="h-20 mr-4"/>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">Best Hotels</a></li>
          <li><a href="#" className="hover:text-gray-400">Our Services</a></li>
          <li><a href="#" className="hover:text-gray-400">About Us</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
        </ul>
      </nav>
      <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Log In
      </button>
    </header>
  );
};

export default Header;
