/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "../../services/axios";

const AddHotelDialog = ({ onClose, onRefresh }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");

  const handleAddHotel = async () => {
    try {
      await axios.post(
        "/hotels",
        {
          name,
          description,
          address,
          phone,
          email,
          category,
        },
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );
      toast.success("Hotel added successfully");
      onClose();
      onRefresh(); // Refresh the hotel list
    } catch (error) {
      toast.error("Failed to add hotel");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-stone-800 p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4 ">Add New Hotel</h2>
        <input
          type="text"
          placeholder="Hotel Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300  text-black rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-red-500  text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleAddHotel}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Add Hotel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHotelDialog;
