import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import axios from "../../services/axios";

const HotelDetailsPage = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("");
  const [guests, setGuests] = useState(1);

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
        checkIn,
        checkOut,
        roomType,
        guests,
      });
      toast.success("Booking successful!");
    } catch (err) {
      toast.error("Booking failed!");
    }
  };

  if (!hotel) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-stone-800 text-white">
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">{hotel.name}</h2>
        <p>{hotel.location}</p>
        <p>{hotel.description}</p>
        <div className="mt-4">
          <label className="block text-sm font-medium">Check In</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Check Out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Room Type</label>
          <input
            type="text"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Guests</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md"
          />
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

export default HotelDetailsPage;
