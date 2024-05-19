import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde React Router
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", {
        username,
        password,
      });
      console.log(response.data); // Maneja la respuesta del servidor aquí
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
    }
  };

  return (
    <div className="login-form-container">
      <div className="logo-container left">
        <img src="../../../public/logotipo.png" alt="Logo" className="logo" />
      </div>
      <h2>Login or Create an Account</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Your Email Address</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit" className="submit-button">
          Next
        </button>
        <hr className="separator" />
        <Link to="/register" className="register-button">
          Register
        </Link>{" "}
        {/* Utiliza Link para redirigir a la página de registro */}
        <p>
          By creating an account, you agree to our Privacy policy and Terms of
          use.
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
