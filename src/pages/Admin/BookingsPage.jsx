import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "../../services/axios";

const AdminBookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("/bookings");
        setBookings(response.data.bookings);
      } catch (err) {
        toast.error("Failed to fetch bookings");
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="p-8 bg-stone-800 text-white w-full">
      <h1 className="text-3xl font-bold mb-4">Manage Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id} className="mb-4 p-4 bg-gray-700 rounded-md">
              <h3 className="text-xl font-bold">{booking.hotel.name}</h3>
              <p>Room: {booking.room.room_number}</p>
              <p>
                Dates: {new Date(booking.startDate).toLocaleDateString()} -{" "}
                {new Date(booking.endDate).toLocaleDateString()}
              </p>
              <p>Total: ${booking.total}</p>
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

export default AdminBookingsPage;
