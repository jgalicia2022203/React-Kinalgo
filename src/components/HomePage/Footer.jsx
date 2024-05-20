import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="py-8">
        <h1 className="text-xl text-center mb-4">
          If you have a hotel that you want to sell, we sell it for you.
        </h1>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start here...
          </button>
        </div>
      </div>
      <hr className="border-t border-gray-200 my-4" />
      <div className="flex justify-between flex-wrap p-2">
        <div className="flex items-start space-x-4 p-2">
          <div>
            <img
              src="../../public/logotipo.png"
              alt="Kinalgo Logo"
              className="w-16 h-auto mb-2"
            />
          </div>
          <div>
            <h3 className="font-semibold">CONTACT DETAILS</h3>
            <p>Tel: + (504) 2276-0010</p>
            <p>Mov: + (504) 2276-0010</p>
            <p>E-mail: infozolutto@zolutto.com</p>
            <div className="flex space-x-2 mt-2">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
          </div>
        </div>
        <div className="p-2">
          <h3 className="font-semibold">MENU</h3>
          <hr className="border-t border-gray-200 my-2" />
          <ul className="text-sm">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#hotel-for-sales" className="hover:text-gray-300">
                Hotel for Sales
              </a>
            </li>
            <li>
              <a href="#news" className="hover:text-gray-300">
                News
              </a>
            </li>
            <li>
              <a href="#contacts" className="hover:text-gray-300">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div className="p-2">
          <h3 className="font-semibold">OUR PARTNERS</h3>
          <hr className="border-t border-gray-200 my-2" />
          <ul className="text-sm">
            <li>Hilton</li>
            <li>Marriott</li>
          </ul>
        </div>
        <div className="border border-gray-200 p-2 rounded-md">
          <h3 className="font-semibold">SPECIALIZED SECTION</h3>
          <p className="text-sm">
            This is a specialized section in the footer.
          </p>
          <a
            href="#specialized"
            className="text-sm hover:text-gray-300 mt-2 block"
          >
            Learn more...
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
