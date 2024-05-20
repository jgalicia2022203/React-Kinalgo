import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import BookingHistoryPage from "./pages/BookingHistory/BookingHistoryPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import HomePage from "./pages/Home/HomePage";
import HotelPage from "./pages/Hotels/HotelPage";
import PaymentPage from "./pages/Payment/PaymentPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import SearchPage from "./pages/Search/SearchPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/booking-history" element={<BookingHistoryPage />} />
      <Route path="/hotels/:id" element={<HotelPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/search" element={<SearchPage />} />
      {/* Agrega más rutas según sea necesario */}
    </Routes>
  );
};

export default AppRoutes;
