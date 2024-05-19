import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde React Router
import axios from 'axios';
import './RegisterForm.css'; // Importa el archivo CSS para estilizar el formulario

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', {
        name,
        username,
        email,
        password
      });
      console.log(response.data); // Maneja la respuesta del servidor aquí
    } catch (error) {
      console.error('Error al registrarse:', error);
    }
  };

  return (
    <div className="register-form-container">
      <div className="logo-container left">
        <img src="../../../public/logotipo.png" alt="Logo" className="logo" />
      </div>
      <h2>Create an Account</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Your Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="register-button">Register</button>
        <hr className="separator" />
        <p>Already have an account? <Link to="/login">Login in here</Link></p>
      </form>
    </div>
  );
};

export default RegisterForm;
