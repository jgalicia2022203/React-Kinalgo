/* eslint-disable react/prop-types */
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "../../services/axios";
import AddServiceDialog from "./AddServiceDialog";
import ConfirmCancelDialog from "./ConfirmCancelDialog";
import EditServiceDialog from "./EditServiceDialog";

const Services = ({ hotelId }) => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  const fetchServices = async () => {
    try {
      const response = await axios.get(`/hotels/${hotelId}/services`, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      });
      setServices(response.data.services);
    } catch (error) {
      console.error("Failed to fetch services", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [hotelId]);

  const handleAddService = () => {
    setShowAddDialog(true);
  };

  const handleEditService = (service) => {
    setSelectedService(service);
    setShowEditDialog(true);
  };

  const handleCancelService = (service) => {
    setSelectedService(service);
    setShowCancelDialog(true);
  };

  return (
    <div className="p-8 bg-stone-800 text-white w-full">
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <button
        onClick={handleAddService}
        className="bg-green-500 text-white py-2 px-4 rounded mb-4"
      >
        Add New Service
      </button>
      <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Availability</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services && services.length > 0 ? (
            services.map((service) => (
              <tr key={service._id} className="border-b border-gray-300">
                <td className="p-3">{service.name}</td>
                <td className="p-3">{service.description}</td>
                <td className="p-3">${service.price.toFixed(2)}</td>
                <td className="p-3">
                  {service.available ? "Available" : "Unavailable"}
                </td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleEditService(service)}
                    className="text-blue-500"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => handleCancelService(service)}
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
                No services found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showAddDialog && (
        <AddServiceDialog
          hotelId={hotelId}
          onClose={() => {
            setShowAddDialog(false);
            fetchServices();
          }}
        />
      )}
      {showEditDialog && (
        <EditServiceDialog
          service={selectedService}
          onClose={() => {
            setShowEditDialog(false);
            fetchServices();
          }}
        />
      )}
      {showCancelDialog && (
        <ConfirmCancelDialog
          service={selectedService}
          onClose={() => {
            setShowCancelDialog(false);
            fetchServices();
          }}
        />
      )}
    </div>
  );
};

export default Services;
