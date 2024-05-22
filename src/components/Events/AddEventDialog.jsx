/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "../../services/axios";

const AddEventDialog = ({ hotelId, onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [resources, setResources] = useState("");

  const handleAddEvent = async () => {
    try {
      await axios.post(
        "/events",
        {
          name,
          description,
          startDate: new Date(startDate).toISOString(),
          endDate: new Date(endDate).toISOString(),
          hotel: hotelId,
          organizer,
          resources,
        },
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );
      toast.success("Event added successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to add event");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-stone-800 p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Add Event</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
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
        <input
          type="text"
          placeholder="Organizer"
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <textarea
          placeholder="Resources"
          value={resources}
          onChange={(e) => setResources(e.target.value)}
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
            onClick={handleAddEvent}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEventDialog;
