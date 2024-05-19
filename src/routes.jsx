import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './components/profile/ProfilePage';


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  </Router>
);

export default AppRoutes;





