/* eslint-disable react/prop-types */
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "../../services/axios";
import ConfirmCancelDialog from "./ConfirmCancelDialog";
import EditBookingDialog from "./EditBookingDialog";

const Bookings = ({ hotelId }) => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`/hotels/${hotelId}/bookings`, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      });
      setBookings(response.data);
    } catch (error) {
      console.error("Failed to fetch bookings", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [hotelId]);

  const handleEditBooking = (booking) => {
    setSelectedBooking(booking);
    setShowEditDialog(true);
  };

  const handleCancelBooking = (booking) => {
    setSelectedBooking(booking);
    setShowCancelDialog(true);
  };

  return (
    <div className="p-8 bg-stone-800 text-white w-full">
      <h1 className="text-3xl font-bold mb-4">Bookings</h1>
      <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="p-3 text-left">Room #</th>
            <th className="p-3 text-left">User</th>
            <th className="p-3 text-left">Start Date</th>
            <th className="p-3 text-left">End Date</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings && bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking._id} className="border-b border-gray-300">
                <td className="p-3">
                  {booking.room ? booking.room.room_number : "N/A"}
                </td>
                <td className="p-3">
                  {booking.user ? booking.user.name : "N/A"}
                </td>
                <td className="p-3">
                  {new Date(booking.startDate).toLocaleDateString()}
                </td>
                <td className="p-3">
                  {new Date(booking.endDate).toLocaleDateString()}
                </td>
                <td className="p-3">{booking.status}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleEditBooking(booking)}
                    className="text-blue-500"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => handleCancelBooking(booking)}
                    className="text-red-500"
                  >
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
              <td colSpan="6" className="p-3 text-center">
                No bookings found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showEditDialog && (
        <EditBookingDialog
          booking={selectedBooking}
          onClose={() => {
            setShowEditDialog(false);
            fetchBookings();
          }}
        />
      )}
      {showCancelDialog && (
        <ConfirmCancelDialog
          booking={selectedBooking}
          onClose={() => {
            setShowCancelDialog(false);
            fetchBookings();
          }}
        />
      )}
    </div>
  );
};

export default Bookings;
