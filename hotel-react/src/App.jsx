import Navbar from "./Navbar";
import Hero from "./Hero";
import Destinations from "./Destinations";
import Hotel  from "./Hotel";
import Cities from "./Cities";
import States from "./States";
import Deals from "./Deals";
import Features from "./Features";

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
      </div>
    </>
  );
}

export default App;
