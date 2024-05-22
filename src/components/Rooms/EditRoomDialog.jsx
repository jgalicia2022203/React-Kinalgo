/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "../../services/axios";

const EditRoomDialog = ({ room, onClose }) => {
  const [roomNumber, setRoomNumber] = useState(room.room_number);
  const [type, setType] = useState(room.type);
  const [capacity, setCapacity] = useState(room.capacity);
  const [pricePerNight, setPricePerNight] = useState(room.price_per_night);
  const [status, setStatus] = useState(room.status);

  const handleEditRoom = async () => {
    try {
      await axios.put(
        `/rooms/${room._id}`,
        {
          room_number: roomNumber,
          type,
          capacity,
          price_per_night: pricePerNight,
          status,
        },
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );
      toast.success("Room updated successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to update room");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-stone-800 p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Edit Room</h2>
        <input
          type="text"
          placeholder="Room Number"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 text-black rounded"
        />
        <input
          type="number"
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Price per Night"
          value={pricePerNight}
          onChange={(e) => setPricePerNight(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        >
          <option value="available">Available</option>
          <option value="booked">Booked</option>
          <option value="under_maintenance">Under Maintenance</option>
        </select>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleEditRoom}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRoomDialog;
