import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './components/profile/ProfilePage';
import NavBar from './components/Navbar/Navbar';
import Pay from './components/Pay/Pay';


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Pay />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/navbar" element={<NavBar />} />
      <Route path="/pay" element={<Pay />} />
    </Routes>
  </Router>
);

export default AppRoutes;





