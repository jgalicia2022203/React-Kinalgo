import { Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import AdminDashboardPage from "./pages/Admin/DashboardPage";
import AdminHotelPage from "./pages/Admin/HotelPage";
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
  const { user } = useAuth();

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
      {user && user.role === "ADMIN" && (
        <>
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/hotel/:id/*" element={<AdminHotelPage />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
