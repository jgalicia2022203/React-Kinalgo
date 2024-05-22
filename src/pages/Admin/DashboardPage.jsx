import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddHotelDialog from "../../components/Hotels/AddHotelDialog";
import ConfirmDeleteDialog from "../../components/Hotels/ConfirmDeleteDialog";
import EditHotelDialog from "../../components/Hotels/EditHotelDialog";
import axios from "../../services/axios";

const AdminDashboardPage = () => {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const navigate = useNavigate();

  const fetchHotels = async () => {
    try {
      const response = await axios.get("/hotels", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      });
      setHotels(response.data.hotels);
    } catch (error) {
      console.error("Failed to fetch hotels", error);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const handleAddHotel = () => {
    setShowAddDialog(true);
  };

  const handleEditHotel = (hotel) => {
    setSelectedHotel(hotel);
    setShowEditDialog(true);
  };

  const handleDeleteHotel = (hotel) => {
    setSelectedHotel(hotel);
    setShowDeleteDialog(true);
  };

  const handleViewHotel = (hotelId) => {
    navigate(`/admin/hotel/${hotelId}`);
  };

  return (
    <div className="p-8 bg-stone-800 text-white w-full">
      <h1 className="text-3xl font-bold mb-4">Hotel Management</h1>
      <button
        onClick={handleAddHotel}
        className="bg-green-500 text-white py-2 px-4 rounded mb-4"
      >
        Add New Hotel
      </button>
      <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="p-3 text-left">Hotel Name</th>
            <th className="p-3 text-left">Location</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotels && hotels.length > 0 ? (
            hotels.map((hotel) => (
              <tr key={hotel._id} className="border-b border-gray-700">
                <td className="p-3">{hotel.name}</td>
                <td className="p-3">{hotel.address}</td>
                <td className="p-3">{hotel.category}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleEditHotel(hotel)}
                    className="text-blue-500"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => handleDeleteHotel(hotel)}
                    className="text-red-500"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    onClick={() => handleViewHotel(hotel._id)}
                    className="text-green-500"
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-3 text-center">
                No hotels found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showAddDialog && (
        <AddHotelDialog
          onClose={() => {
            setShowAddDialog(false);
            fetchHotels(); // Refrescar la lista de hoteles después de agregar
          }}
        />
      )}
      {showEditDialog && (
        <EditHotelDialog
          hotel={selectedHotel}
          onClose={() => {
            setShowEditDialog(false);
            fetchHotels(); // Refrescar la lista de hoteles después de editar
          }}
        />
      )}
      {showDeleteDialog && (
        <ConfirmDeleteDialog
          hotel={selectedHotel}
          onClose={() => {
            setShowDeleteDialog(false);
            fetchHotels(); // Refrescar la lista de hoteles después de eliminar
          }}
        />
      )}
    </div>
  );
};

export default AdminDashboardPage;
