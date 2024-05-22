/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import axios from "../../services/axios";

const ConfirmCancelDialog = ({ booking, onClose }) => {
  const handleCancelBooking = async () => {
    try {
      await axios.patch(
        `/bookings/${booking._id}`,
        { status: "cancelled" },
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );
      toast.success("Booking cancelled successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to cancel booking");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-stone-800 p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Cancel Booking</h2>
        <p>Are you sure you want to cancel this booking?</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleCancelBooking}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCancelDialog;
