// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'; // Importa el componente LoginPage
import RegisterPage from './pages/RegisterPage'; // Importa el componente RegisterPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> {/* Agrega la ruta para la página de registro */}
        {/* Otras rutas pueden ser añadidas aquí */}
      </Routes>
    </Router>
  );
};

export default App;
