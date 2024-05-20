import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "../../services/axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.response.data.msg || "Invalid email or password");
    }
  };

  return (
    <div className="h-full flex flex-col items-center bg-stone-800">
      <div>
        <img
          src="../../../public/logotipo.png"
          alt="logo"
          height={250}
          width={250}
        />
      </div>
      <div className="max-w-md w-full p-8 rounded-md">
        <h2 className="text-2xl text-white font-bold mb-6 text-left">
          Login or create an Account
        </h2>
        <form onSubmit={handleLogin}>
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
              className="mt-1 p-2 block w-full border rounded-md hover:border-orange-400"
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
              className="mt-1 p-2 block w-full border border-orange-400 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-400 font-bold text-white py-2 rounded-md"
          >
            Login
          </button>

          <hr className="my-5" />

          <a
            className="flex align-center justify-center w-full bg-orange-400 font-bold text-white py-2 rounded-md"
            href="/register"
          >
            Register
          </a>
        </form>
        <p className="mt-2 text-left text-white">
          By creating an account you agree to our Privacy policy and Terms of
          use.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
