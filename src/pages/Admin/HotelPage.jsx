import { Link, Route, Routes, useParams } from "react-router-dom";
import Bookings from "../../components/Bookings/Bookings";
import Events from "../../components/Events/Events";
import Rooms from "../../components/Rooms/Rooms";
import Services from "../../components/Services/Services";

const AdminHotelPage = () => {
  const { id } = useParams();

  return (
    <div className="flex h-full w-full">
      <nav className="w-1/4 bg-stone-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Hotel Management</h2>
        <ul>
          <li className="mb-4">
            <Link to="rooms" className="hover:text-orange-500">
              Rooms
            </Link>
          </li>
          <li className="mb-4">
            <Link to="bookings" className="hover:text-orange-500">
              Bookings
            </Link>
          </li>
          <li className="mb-4">
            <Link to="events" className="hover:text-orange-500">
              Events
            </Link>
          </li>
          <li className="mb-4">
            <Link to="services" className="hover:text-orange-500">
              Services
            </Link>
          </li>
        </ul>
      </nav>
      <div className="w-3/4 bg-stone-800 text-white p-6">
        <Routes>
          <Route path="rooms" element={<Rooms hotelId={id} />} />
          <Route path="bookings" element={<Bookings hotelId={id} />} />
          <Route path="events" element={<Events hotelId={id} />} />
          <Route path="services" element={<Services hotelId={id} />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminHotelPage;
