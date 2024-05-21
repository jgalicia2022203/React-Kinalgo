/* Header.jsx */

import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-yellow-950 text-white p-4 flex items-center justify-between z-50">
      <div className="ml-20">
        <img src="../../../public/logotipo.png" alt="Logo" className="h-20" />
      </div>
      <nav className="flex-grow flex justify-center">
        <ul className="flex gap-8">
          {user && user.role === "ADMIN" ? (
            <>
              <li>
                <Link
                  to="/admin/dashboard"
                  className="text-white no-underline hover:text-gray-300"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/users"
                  className="text-white no-underline hover:text-gray-300"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/reports"
                  className="text-white no-underline hover:text-gray-300"
                >
                  Reports
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScroll(e, "home")}
                  className="text-white no-underline hover:text-gray-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#best-hotels"
                  onClick={(e) => handleScroll(e, "best-hotels")}
                  className="text-white no-underline hover:text-gray-300"
                >
                  Best Hotels
                </a>
              </li>
              <li>
                <a
                  href="#our-services"
                  onClick={(e) => handleScroll(e, "our-services")}
                  className="text-white no-underline hover:text-gray-300"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  onClick={(e) => handleScroll(e, "contact-us")}
                  className="text-white no-underline hover:text-gray-300"
                >
                  Contact Us
                </a>
              </li>
            </>
          )}
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
