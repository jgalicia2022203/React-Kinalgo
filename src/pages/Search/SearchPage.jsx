import { useState } from "react";
import axios from "../../services/axios";

const SearchPage = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get("/hotels/search", {
        params: {
          location,
          checkIn,
          checkOut,
        },
      });
      setResults(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-stone-800 text-white">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Search for Hotels</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Check In</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Check Out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-orange-400 text-white py-2 px-4 rounded-md"
        >
          Search
        </button>
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Results</h2>
        {results.map((hotel) => (
          <div key={hotel.id} className="mb-4 p-4 bg-gray-700 rounded-md">
            <h3 className="text-xl font-bold">{hotel.name}</h3>
            <p>{hotel.location}</p>
            <p>{hotel.description}</p>
            <button className="bg-orange-400 text-white py-2 px-4 rounded-md mt-2">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
