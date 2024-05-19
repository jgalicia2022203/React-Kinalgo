// RegisterPage.jsx
import React from 'react';
import Header from '../components/header/Header';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import './RegisterPage.css'; // Importa el archivo CSS para estilizar la página

const RegisterPage = () => {
  return (
    <div>
      <Header />
      <div className="register-page">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
