/* eslint-disable react/prop-types */
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "../../services/axios";
import AddEventDialog from "./AddEventDialog";
import ConfirmCancelDialog from "./ConfirmCancelDialog";
import EditEventDialog from "./EditEventDialog";

const Events = ({ hotelId }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`/hotels/${hotelId}/events`, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      });
      setEvents(response.data);
    } catch (error) {
      console.error("Failed to fetch events", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [hotelId]);

  const handleAddEvent = () => {
    setShowAddDialog(true);
  };

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    setShowEditDialog(true);
  };

  const handleCancelEvent = (event) => {
    setSelectedEvent(event);
    setShowCancelDialog(true);
  };

  return (
    <div className="p-8 bg-stone-800 text-white w-full">
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <button
        onClick={handleAddEvent}
        className="bg-green-500 text-white py-2 px-4 rounded mb-4"
      >
        Add New Event
      </button>
      <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-left">Start Date</th>
            <th className="p-3 text-left">End Date</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 ? (
            events.map((event) => (
              <tr key={event._id} className="border-b border-gray-300">
                <td className="p-3">{event.name}</td>
                <td className="p-3">{event.description}</td>
                <td className="p-3">
                  {new Date(event.startDate).toLocaleDateString()}
                </td>
                <td className="p-3">
                  {new Date(event.endDate).toLocaleDateString()}
                </td>
                <td className="p-3">{event.status}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleEditEvent(event)}
                    className="text-blue-500"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => handleCancelEvent(event)}
                    className="text-red-500"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="p-3 text-center">
                No events found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showAddDialog && (
        <AddEventDialog
          hotelId={hotelId}
          onClose={() => {
            setShowAddDialog(false);
            fetchEvents();
          }}
        />
      )}
      {showEditDialog && (
        <EditEventDialog
          event={selectedEvent}
          onClose={() => {
            setShowEditDialog(false);
            fetchEvents();
          }}
        />
      )}
      {showCancelDialog && (
        <ConfirmCancelDialog
          event={selectedEvent}
          onClose={() => {
            setShowCancelDialog(false);
            fetchEvents();
          }}
        />
      )}
    </div>
  );
};

export default Events;
