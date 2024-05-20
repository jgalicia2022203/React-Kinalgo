const hotels = [
  {
    name: "PASSALACQUA",
    location: "SHORES OF LAKE COMO",
    image: "/bestHotel1.jpg",
    city: "Argentina",
  },
  {
    name: "HOTEL ROSEWOOD",
    location: "HONG KONG",
    image: "/bestHotel2.jpg",
    city: "HONG KONG",
  },
  {
    name: "FOUR SEASONS",
    location: "A ORILLAS DEL CHAO PHRAYA",
    image: "/bestHotel3.jpg",
    city: "BANGKOK",
  },
  {
    name: "THE UPPER HOUSE",
    location: "HONG KONG",
    image: "/bestHotel4.jpg",
    city: "HONG KONG",
  },
];

const BestHotels = () => {
  return (
    <section className="p-12 bg-neutral-800 text-center">
      <h2 className="text-4xl text-white font-sans font-bold mb-10">
        BEST HOTELS
      </h2>
      <div className="flex justify-center gap-5 flex-wrap">
        {hotels.map((hotel, index) => (
          <div
            className="bg-transparent rounded-lg overflow-hidden w-64 h-96 relative transition-transform duration-300 ease-in-out hover:scale-105"
            key={index}
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-3/4 object-cover rounded-t-lg"
            />
            <div className="p-2.5 bg-black bg-opacity-60 rounded-b-lg text-white absolute bottom-0 w-full h-1/4 text-left">
              <h3 className="text-xl m-0">{hotel.name}</h3>
              <p className="text-sm my-1">{hotel.location}</p>
              <div className="flex items-center text-sm">
                <i className="fas fa-map-marker-alt text-yellow-300 mr-1"></i>
                <span>{hotel.city}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestHotels;
