import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import axios from "../../services/axios";

const HotelPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [hotel, setHotel] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

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

  const calculateTotal = (startDate, endDate) => {
    const roomRate = 108; // Fixed room rate per night
    const taxRate = 0.22; // Fixed tax rate
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nights = (end - start) / (1000 * 60 * 60 * 24);
    const subtotal = nights * roomRate;
    const taxes = subtotal * taxRate;
    return subtotal + taxes;
  };

  const handleBooking = () => {
    if (!user) {
      toast.error("You need to log in to proceed with the booking.");
      navigate("/login");
      return;
    }
    const total = calculateTotal(startDate, endDate);
    const bookingDetails = {
      user: user._id,
      hotelId: id,
      startDate,
      endDate,
      roomId,
      total,
    };
    navigate("/payment", { state: { bookingDetails } });
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
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default HotelPage;
