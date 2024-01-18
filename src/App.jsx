import "./App.css";
import HeroSection from "./HeroSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Students from "./students/Students";
export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Students />
      <Footer />
    </>
  );
}
