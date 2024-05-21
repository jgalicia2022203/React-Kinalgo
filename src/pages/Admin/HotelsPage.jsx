import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "../../services/axios";

const AdminHotelsPage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("/hotels");
        setHotels(response.data.hotels);
      } catch (err) {
        toast.error("Failed to fetch hotels");
      }
    };
    fetchHotels();
  }, []);

  return (
    <div className="p-8 bg-stone-800 text-white w-full">
      <h1 className="text-3xl font-bold mb-4">Manage Hotels</h1>
      {hotels.length === 0 ? (
        <p>No hotels found.</p>
      ) : (
        <ul>
          {hotels.map((hotel) => (
            <li key={hotel._id} className="mb-4 p-4 bg-gray-700 rounded-md">
              <h3 className="text-xl font-bold">{hotel.name}</h3>
              <p>{hotel.address}</p>
              <p>{hotel.description}</p>
              <button className="bg-red-500 text-white py-2 px-4 rounded-md mt-2">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminHotelsPage;
