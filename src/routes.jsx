import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './components/profile/ProfilePage';
import NavBar from './components/Navbar/Navbar';


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/navbar" element={<NavBar />} />
    </Routes>
  </Router>
);

export default AppRoutes;





