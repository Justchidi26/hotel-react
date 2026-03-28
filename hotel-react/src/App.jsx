import Navbar from "./Navbar";
import Hero from "./Hero";
import Destinations from "./Destinations";

function App() {

  return (
    <>
     <div className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <Destinations />
     </div>
    </>
  )
}

export default App
