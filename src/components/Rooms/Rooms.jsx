/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "../../services/axios";

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
        setRooms(response.data.rooms);
      } catch (error) {
        console.error("Failed to fetch rooms", error);
      }
    };

    fetchRooms();
  }, [hotelId]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Rooms</h1>
      <table className="w-full bg-gray-100 rounded-lg overflow-hidden">
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
              <tr key={room._id} className="border-b border-gray-300">
                <td className="p-3">{room.room_number}</td>
                <td className="p-3">{room.type}</td>
                <td className="p-3">${room.price_per_night}/night</td>
                <td className="p-3">{room.status}</td>
                <td className="p-3"> {/* Actions here */} </td>
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

export default Rooms;
