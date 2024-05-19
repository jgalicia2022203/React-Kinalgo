import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './components/search/SearchPage';
import HistoryPage from './components/history/HistoryPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;








