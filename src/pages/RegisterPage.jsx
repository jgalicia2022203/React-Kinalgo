// RegisterPage.jsx
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Header from "../components/header/Header";
import "./RegisterPage.css"; // Importa el archivo CSS para estilizar la página

const RegisterPage = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <div className="register-page">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
