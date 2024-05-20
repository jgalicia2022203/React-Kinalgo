import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "../../services/axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", { name, username, email, password });
      toast.success("Registration successful!");
      navigate("/login");
    } catch (err) {
      toast.error(err.response.data.msg || "Registration failed");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center bg-stone-800">
      <div>
        <img
          src="../../../public/logotipo.png"
          alt="logo"
          height={250}
          width={250}
        />
      </div>
      <div className="max-w-md w-full p-8 rounded-md text-left">
        <h2 className="text-2xl text-white font-bold mb-6 text-left">
          Join Us!
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-white"
            >
              Your username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Your email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded-md font-bold"
          >
            Register
          </button>
        </form>
        <p className="mt-2 text-left text-white">
          You already have an account?{" "}
          <a href="/login" className="text-orange-400">
            Login here!
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
