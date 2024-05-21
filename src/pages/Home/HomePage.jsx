import BestHotels from "../../components/HomePage/BestHotels";
import Footer from "../../components/HomePage/Footer";
import Header from "../../components/HomePage/Header";
import HeroSection from "../../components/HomePage/HeroSection";
import OurServices from "../../components/HomePage/OurServices";

const HomePage = () => {
  return (
    <div className="w-full">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="best-hotels">
        <BestHotels />
      </section>
      <section id="our-services">
        <OurServices />
      </section>
      <section id="contact-us">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
