/* eslint-disable react/prop-types */
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "../../services/axios";
import AddRoomDialog from "./AddRoomDialog";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import EditRoomDialog from "./EditRoomDialog";

const Rooms = ({ hotelId }) => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const fetchRooms = async () => {
    try {
      const response = await axios.get(`/hotels/${hotelId}/rooms`, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      });
      // Verifica que la respuesta tenga el formato esperado
      if (response.data && Array.isArray(response.data)) {
        setRooms(response.data); // Ajuste aquí para manejar el array directamente
      } else {
        console.error("Unexpected response format", response.data);
        setRooms([]);
      }
    } catch (error) {
      console.error("Failed to fetch rooms", error);
      setRooms([]); // Asegúrate de que rooms sea un arreglo
    }
  };

  useEffect(() => {
    fetchRooms();
  }, [hotelId]);

  const handleAddRoom = () => {
    setShowAddDialog(true);
  };

  const handleEditRoom = (room) => {
    setSelectedRoom(room);
    setShowEditDialog(true);
  };

  const handleDeleteRoom = (room) => {
    setSelectedRoom(room);
    setShowDeleteDialog(true);
  };

  return (
    <div className="p-8 bg-stone-800 text-white w-full">
      <h1 className="text-3xl font-bold mb-4">Rooms</h1>
      <button
        onClick={handleAddRoom}
        className="bg-green-500 text-white py-2 px-4 rounded mb-4"
      >
        Add New Room
      </button>
      <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="p-3 text-left">Room #</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Availability</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <tr key={room._id} className="border-b border-gray-300">
                <td className="p-3">{room.room_number}</td>
                <td className="p-3">{room.type}</td>
                <td className="p-3">${room.price_per_night}/night</td>
                <td className="p-3">{room.status}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleEditRoom(room)}
                    className="text-blue-500"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => handleDeleteRoom(room)}
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
              <td colSpan="5" className="p-3 text-center">
                No rooms found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showAddDialog && (
        <AddRoomDialog
          hotelId={hotelId}
          onClose={() => {
            setShowAddDialog(false);
            fetchRooms();
          }}
        />
      )}
      {showEditDialog && (
        <EditRoomDialog
          room={selectedRoom}
          onClose={() => {
            setShowEditDialog(false);
            fetchRooms();
          }}
        />
      )}
      {showDeleteDialog && (
        <ConfirmDeleteDialog
          room={selectedRoom}
          onClose={() => {
            setShowDeleteDialog(false);
            fetchRooms();
          }}
        />
      )}
    </div>
  );
};

export default Rooms;
