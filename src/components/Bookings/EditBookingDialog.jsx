/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "../../services/axios";

const EditBookingDialog = ({ booking, onClose }) => {
  const [userId, setUserId] = useState(booking.user._id);
  const [roomId, setRoomId] = useState(booking.room._id);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    setStartDate(formatDate(booking.startDate));
    setEndDate(formatDate(booking.endDate));
  }, [booking]);

  const formatDate = (date) => {
    const d = new Date(date);
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const day = `0${d.getDate()}`.slice(-2);
    return `${d.getFullYear()}-${month}-${day}`;
  };

  const handleEditBooking = async () => {
    try {
      await axios.put(
        `/bookings/${booking._id}`,
        {
          user: userId,
          room: roomId,
          startDate: new Date(startDate).toISOString(),
          endDate: new Date(endDate).toISOString(),
        },
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );
      toast.success("Booking updated successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to update booking");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-stone-800 p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Edit Booking</h2>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
          disabled
        />
        <input
          type="text"
          placeholder="Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 text-black rounded"
          disabled
        />
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleEditBooking}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBookingDialog;
