/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Rooms from "../../components/Rooms/Rooms";
import axios from "../../services/axios";

const AdminHotelPage = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(`/hotels/${id}`, {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        });
        setHotel(response.data);
      } catch (error) {
        console.error("Failed to fetch hotel details", error);
      }
    };

    fetchHotelDetails();
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-full w-full">
      <nav className="w-1/4 bg-stone-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">{hotel.name}</h2>
        <ul>
          <li className="mb-4">
            <Link to="rooms" className="hover:text-orange-500">
              Rooms
            </Link>
          </li>
          <li className="mb-4">
            <Link to="bookings" className="hover:text-orange-500">
              Bookings
            </Link>
          </li>
          <li className="mb-4">
            <Link to="events" className="hover:text-orange-500">
              Events
            </Link>
          </li>
          <li className="mb-4">
            <Link to="services" className="hover:text-orange-500">
              Services
            </Link>
          </li>
        </ul>
      </nav>
      <div className="w-3/4 bg-stone-800 text-white p-6">
        <Routes>
          <Route path="rooms" element={<Rooms hotelId={hotel._id} />} />
          <Route path="bookings" element={<Bookings hotelId={hotel._id} />} />
          <Route path="events" element={<Events hotelId={hotel._id} />} />
          <Route path="services" element={<Services hotelId={hotel._id} />} />
        </Routes>
      </div>
    </div>
  );
};

const Bookings = ({ hotelId }) => <div>Bookings for hotel {hotelId}</div>;
const Events = ({ hotelId }) => <div>Events for hotel {hotelId}</div>;
const Services = ({ hotelId }) => <div>Services for hotel {hotelId}</div>;

export default AdminHotelPage;
