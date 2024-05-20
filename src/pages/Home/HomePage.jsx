import BestHotels from "../../components/HomePage/BestHotels";
import Footer from "../../components/HomePage/Footer";
import Header from "../../components/HomePage/Header";
import HeroSection from "../../components/HomePage/HeroSection";
import OurServices from "../../components/HomePage/OurServices";

const HomePage = () => {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <BestHotels />
      <OurServices />
      <Footer />
    </div>
  );
};
export default HomePage;
