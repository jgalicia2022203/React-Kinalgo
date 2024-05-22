/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "../../services/axios";

const EditServiceDialog = ({ service, onClose }) => {
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(service.description);
  const [price, setPrice] = useState(service.price);
  const [available, setAvailable] = useState(service.available);

  const handleEditService = async () => {
    try {
      await axios.put(
        `/services/${service._id}`,
        {
          name,
          description,
          price: parseFloat(price),
          available,
        },
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );
      toast.success("Service updated successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to update service");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-stone-800 p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Edit Service</h2>
        <input
          type="text"
          placeholder="Service Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
            className="mr-2"
          />
          <label>Available</label>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleEditService}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditServiceDialog;
