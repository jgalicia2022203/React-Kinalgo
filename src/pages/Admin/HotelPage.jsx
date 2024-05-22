/* eslint-disable react/prop-types */
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
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

const Rooms = ({ hotelId }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`/hotels/${hotelId}/rooms`, {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        });
        setRooms(response.data);
      } catch (error) {
        console.error("Failed to fetch rooms", error);
      }
    };

    fetchRooms();
  }, [hotelId]);

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Rooms</h3>
      <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="p-3 text-left">Room #</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Availability</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <tr key={room._id} className="border-b border-gray-700">
                <td className="p-3">{room.room_number}</td>
                <td className="p-3">{room.type}</td>
                <td className="p-3">${room.price_per_night}/night</td>
                <td className="p-3">{room.status}</td>
                <td className="p-3 flex gap-2">
                  <button className="text-blue-500">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="text-red-500">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button className="text-green-500">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-3 text-center">
                No rooms found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const Bookings = ({ hotelId }) => <div>Bookings for hotel {hotelId}</div>;
const Events = ({ hotelId }) => <div>Events for hotel {hotelId}</div>;
const Services = ({ hotelId }) => <div>Services for hotel {hotelId}</div>;

export default AdminHotelPage;
