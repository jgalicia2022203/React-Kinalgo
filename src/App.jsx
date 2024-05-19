// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'; // Importa el componente LoginPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} /> {/* Agrega la ruta para LoginPage */}
        {/* Otras rutas pueden ser añadidas aquí */}
      </Routes>
    </Router>
  );
};

export default App;
