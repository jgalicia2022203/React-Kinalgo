/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import axios from "../../services/axios";

const ConfirmDeleteDialog = ({ room, onClose }) => {
  const handleDeleteRoom = async () => {
    try {
      await axios.delete(
        `/rooms/${room._id}`,
        {
          status: "under_maintenance",
        },
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );
      toast.success("Room marked as under maintenance successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to delete room");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-stone-800 p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Delete Room</h2>
        <p>Are you sure you want to mark this room as under maintenance?</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteRoom}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteDialog;
