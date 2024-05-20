import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-yellow-950 text-white p-4 flex items-center justify-between">
      <div className="ml-20">
        <img src="../../../public/logotipo.png" alt="Logo" className="h-20" />
      </div>
      <nav className="flex-grow flex justify-center">
        <ul className="flex gap-8">
          <li>
            <Link
              to="/"
              className="text-white no-underline hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/best-hotels"
              className="text-white no-underline hover:text-gray-300"
            >
              Best Hotels
            </Link>
          </li>
          <li>
            <Link
              to="/our-services"
              className="text-white no-underline hover:text-gray-300"
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="text-white no-underline hover:text-gray-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="text-white no-underline hover:text-gray-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mr-6">
        {user ? (
          <div className="relative inline-block">
            <div className="flex flex-row gap-2">
              <Link
                to="/profile"
                className="bg-orange-400 text-black font-bold py-2 px-4 rounded-full border-4 border-black cursor-pointer hover:bg-orange-300"
              >
                Profile
              </Link>
              <button
                onClick={logout}
                className="bg-orange-400 text-black font-bold py-2 px-4 rounded-full border-4 border-black cursor-pointer hover:bg-orange-300"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-orange-400 text-black font-bold py-2 px-4 rounded-full border-4 border-black cursor-pointer hover:bg-orange-300"
          >
            Log In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
