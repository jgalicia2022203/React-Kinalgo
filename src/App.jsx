import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* Otras rutas pueden ser añadidas aquí */}
      </Routes>
    </Router>
  );
};

export default App;
