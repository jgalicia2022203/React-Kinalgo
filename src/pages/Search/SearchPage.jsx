import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../services/axios";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const query = useQuery();

  const [address, setAddress] = useState(query.get("address") || "");
  const [startDate, setStartDate] = useState(query.get("startDate") || "");
  const [endDate, setEndDate] = useState(query.get("endDate") || "");

  useEffect(() => {
    const handleSearch = async () => {
      try {
        console.log("Sending search request with:", {
          address,
          startDate,
          endDate,
        });
        const response = await axios.post("hotels/search", {
          address,
          startDate,
          endDate,
        });
        console.log("Received response:", response.data);
        setResults(response.data);
      } catch (err) {
        console.error("Search request error:", err);
      }
    };

    if (address && startDate && endDate) {
      handleSearch();
    }
  }, [address, startDate, endDate]);

  const handleSearch = () => {
    navigate(
      `/search?address=${address}&startDate=${startDate}&endDate=${endDate}`
    );
  };

  const handleViewDetails = (id) => {
    navigate(`/hotels/${id}`);
  };

  return (
    <div className="w-full bg-stone-800 text-white">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Search for Hotels</h2>
        <div className="flex gap-2.5 justify-center items-center bg-black bg-opacity-50 p-2.5 rounded-lg backdrop-blur-md max-w-4xl mx-auto">
          <div className="flex flex-col items-start">
            <label className="text-white text-xs mb-1">LOCATION</label>
            <input
              type="text"
              placeholder="12 STREET LAS VEGAS"
              className="p-2 rounded bg-transparent border border-gray-300 text-white w-48"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-white text-xs mb-1">CHECK IN</label>
            <input
              type="date"
              className="p-2 rounded bg-transparent border border-gray-300 text-white w-48"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-white text-xs mb-1">CHECK OUT</label>
            <input
              type="date"
              className="p-2 rounded bg-transparent border border-gray-300 text-white w-48"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
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
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Results</h2>
        {results.map((hotel) => (
          <div key={hotel._id} className="mb-4 p-4 bg-gray-700 rounded-md">
            <h3 className="text-xl font-bold">{hotel.name}</h3>
            <p>{hotel.address}</p>
            <p>{hotel.description}</p>
            <button
              onClick={() => handleViewDetails(hotel._id)}
              className="bg-orange-400 text-white py-2 px-4 rounded-md mt-2"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
