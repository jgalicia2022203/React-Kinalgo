import {
  faChartLine,
  faEllipsisV,
  faHotel,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OurServices = () => {
  return (
    <section className="py-16 px-8 bg-neutral-900 text-center text-white">
      <h2 className="font-bold text-3xl mb-8">OUR SERVICES</h2>
      <div className="flex justify-center gap-8">
        <div className="bg-white rounded-lg p-12 max-w-sm h-80 text-left relative transition-transform duration-300 hover:-translate-y-2.5">
          <FontAwesomeIcon
            icon={faHotel}
            className="text-3xl text-gray-800 mb-4"
          />
          <FontAwesomeIcon
            icon={faEllipsisV}
            className="absolute top-4 right-4 text-xl text-gray-800"
          />
          <h3 className="font-bold text-lg text-gray-800">SELLING HOTELS</h3>
          <p className="text-base text-gray-600">
            This could be from developments to hotels or even a share
            participation in known hotels, or invest...
          </p>
        </div>
        <div className="bg-white rounded-lg p-12 max-w-sm h-80 text-left relative transition-transform duration-300 hover:-translate-y-2.5">
          <FontAwesomeIcon
            icon={faChartLine}
            className="text-3xl text-gray-800 mb-4"
          />
          <FontAwesomeIcon
            icon={faEllipsisV}
            className="absolute top-4 right-4 text-xl text-gray-800"
          />
          <h3 className="font-bold text-lg text-gray-800">HOTEL INVESTMENTS</h3>
          <p className="text-base text-gray-600">
            This could be from developments to hotels or even a share
            participation in known hotels, or invest...
          </p>
        </div>
        <div className="bg-white rounded-lg p-12 max-w-sm h-80 text-left relative transition-transform duration-300 hover:-translate-y-2.5">
          <FontAwesomeIcon
            icon={faUserTie}
            className="text-3xl text-gray-800 mb-4"
          />
          <FontAwesomeIcon
            icon={faEllipsisV}
            className="absolute top-4 right-4 text-xl text-gray-800"
          />
          <h3 className="font-bold text-lg text-gray-800">
            MANAGEMENT SERVICES
          </h3>
          <p className="text-base text-gray-600">
            Our partners are offering management teams, opening consultants or
            short term operators...
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
