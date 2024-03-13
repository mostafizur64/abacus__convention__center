import "./App.css";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import HClients from "./Components/HClients";
import Hero from "./Components/Hero";
import Moment from "./Components/Moment";
import Package from "./Components/Package";

function App() {
  return (
    <div className="h-full max-w-[2024px] mx-auto overflow-hidden">
      <Hero />
      <Moment />
      <Package />
      <HClients />
      <Faq />
      <Footer/>
    </div>
  );
}

export default App;
