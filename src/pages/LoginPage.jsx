import React from 'react';
import Header from '../components/header/Header';
import LoginForm from '../components/LoginForm/LoginForm'; // Asegúrate de importar el formulario de inicio de sesión aquí
import './LoginPage.css'; // Importa el archivo CSS para estilizar la página

const LoginPage = () => {
  return (
    
    <div>
      <Header /> {/* Reutilizando el componente de encabezado */}
      <div className="login-page">
        <LoginForm /> {/* Agregando el formulario de inicio de sesión */}
      </div>
    </div>
  );
};

export default LoginPage;
