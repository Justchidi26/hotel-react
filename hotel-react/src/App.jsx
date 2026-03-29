import Navbar from "./Navbar";
import Hero from "./Hero";
import Destinations from "./Destinations";
import Hotel  from "./Hotel";

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
      </div>
    </>
  );
}

export default App;
