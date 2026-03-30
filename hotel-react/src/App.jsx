import Navbar from "./Navbar";
import Hero from "./Hero";
import Destinations from "./Destinations";
import Hotel  from "./Hotel";
import Cities from "./Cities";
import States from "./States";
import Deals from "./Deals";
import Features from "./Features";
import HotelApp from "./HotelApp";
import EmailForm from "./EmailForm";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Navbar />
        <Hero />
        <div className="mt-20">
          <Destinations />
        </div>
        <Hotel />
        <Cities />
        <States />
        <Deals />
        <Features />
        <HotelApp />
        <EmailForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
