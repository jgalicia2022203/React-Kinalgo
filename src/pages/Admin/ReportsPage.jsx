import { useEffect, useState } from "react";
import axios from "../../services/axios";

const AdminReportsPage = () => {
  const [hotelDemand, setHotelDemand] = useState([]);
  const [roomOccupancy, setRoomOccupancy] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchHotelDemand = async () => {
    try {
      const response = await axios.get("/reports/hotel-demand", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      });
      setHotelDemand(response.data.hotels);
    } catch (error) {
      console.error("Failed to fetch hotel demand report", error);
    }
  };

  const fetchRoomOccupancy = async () => {
    try {
      const response = await axios.get("/reports/room-occupancy", {
        params: { startDate, endDate },
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      });
      setRoomOccupancy(response.data.rooms);
    } catch (error) {
      console.error("Failed to fetch room occupancy report", error);
    }
  };

  useEffect(() => {
    fetchHotelDemand();
  }, []);

  return (
    <div className="p-8 bg-stone-800 text-white w-full h-max">
      <h1 className="text-3xl font-bold mb-4">Reports</h1>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Hotel Demand</h2>
        <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="p-3 text-left">Hotel Name</th>
              <th className="p-3 text-left">Demand</th>
            </tr>
          </thead>
          <tbody>
            {hotelDemand.map((hotel) => (
              <tr key={hotel._id} className="border-b border-gray-300">
                <td className="p-3">{hotel.name}</td>
                <td className="p-3">{hotel.demand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Room Occupancy</h2>
        <div className="mb-4">
          <label className="block text-sm mb-1">Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border text-black border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border text-black border-gray-300 rounded"
          />
        </div>
        <button
          onClick={fetchRoomOccupancy}
          className="bg-green-500 text-white py-2 px-4 rounded mb-4"
        >
          Fetch Room Occupancy
        </button>
        <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="p-3 text-left">Room Number</th>
              <th className="p-3 text-left">Occupancy</th>
            </tr>
          </thead>
          <tbody>
            {roomOccupancy.map((room) => (
              <tr key={room._id} className="border-b border-gray-300">
                <td className="p-3">{room.roomNumber}</td>
                <td className="p-3">{room.occupancy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminReportsPage;
