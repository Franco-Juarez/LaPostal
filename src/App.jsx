import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import FormSection from "./components/FormSection";
import HeroSection from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import NavBar from "./components/NavBar";
import SliderImages from "./components/Slider";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Banner
        heading={"La Belleza de lo simple"}
        text={
          "Somos un parador costero en la ciudad de Monte Hermoso, provincia de Buenos Aires. Creemos que la autenticidad reside en las acciones simples. Desde 1993, ofrecemos una cuidadosa selección de platos, bebidas, brunchs y cocktails. Seleccionamos ingredientes locales y de temporada, ya que valoramos el esfuerzo de nustra comunidad por crear productos de calidad."
        }
      />
      <MenuSection />
      <FormSection />
      <SliderImages />
      <Footer />
    </div>
  );
}

export default App;
