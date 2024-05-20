import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import axios from "../../services/axios";

const HotelPage = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(`/hotels/${id}`);
        setHotel(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchHotelDetails();
  }, [id]);

  const handleBooking = async () => {
    try {
      await axios.post(`/hotels/${id}/book`, {
        startDate,
        endDate,
        roomId,
      });
      toast.success("Booking successful!");
    } catch (err) {
      toast.error(err.response.data.msg || "Booking failed!");
    }
  };

  if (!hotel) return <div>Loading...</div>;

  return (
    <div className="w-full bg-stone-800 text-white">
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">{hotel.name}</h2>
        <p>{hotel.address}</p>
        <p>{hotel.description}</p>
        <div className="mt-4">
          <label className="block text-sm font-medium">Check In</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md text-black"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Check Out</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md text-black"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Room</label>
          <select
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md text-black"
          >
            <option value="" className="text-black">
              Select a room
            </option>
            {hotel.rooms.map((room) => (
              <option key={room._id} value={room._id}>
                {room.room_number} - {room.type}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleBooking}
          className="bg-orange-400 text-white py-2 px-4 rounded-md mt-4"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelPage;
