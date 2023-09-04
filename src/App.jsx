import "./App.css";
import CallToActionSection from "./components/Banner";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import images from "./components/Images";
import NavBar from "./components/NavBar";
import PropertiesSection from "./components/PropertiesSection";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Carousel images={images} />
      <PropertiesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}

export default App;
