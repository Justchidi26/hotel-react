import v7homepage1 from "./assets/v7-homepage1.jpg";
import Search from "./Search";

const Hero = () => {
  return (
    <section className="relative w-screen flex flex-col items-center">
      <div
        className="w-screen h-64 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${v7homepage1})` }}
      >
        <div className="absolute inset-0 bg-[rgba(51,51,51,0.5)]"></div>
        <div className="relative z-10 flex flex-col items-center gap-3 text-center px-4">
          <h1 className="text-white text-4xl font-medium">
            Find and book hotels in Nigeria.
          </h1>
          <h3 className="text-white text-xl">
            Search through 13,728 hotels in Nigeria
          </h3>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-18 px-[130px]">
        <Search />
      </div>
    </section>
  );
};

export default Hero;
