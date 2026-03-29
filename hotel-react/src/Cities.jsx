import city1 from "./assets/city1.jpeg";
import city2 from "./assets/city2.jpeg";
import city3 from "./assets/city3.jpeg";
import city4 from "./assets/city4.jpeg";
import city5 from "./assets/city5.jpeg";
import city6 from "./assets/city6.jpeg";
const Cities = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-20">
      <div className="flex flex-col items-center gap-1">
        <div className="text-2xl text-[#4f4f4f] font-medium">
          Popular cities with Hotels.ng travellers
        </div>
        <div className="text-lg text-[#4f4f4f]">
          See the top destinations people are traveling to
        </div>
        <div className="border-t-[3px] border-[#00aeff] my-[15px] mx-auto w-16"></div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <div className="relative h-60 w-80 group cursor-pointer flex justify-center items-center overflow-hidden rounded-sm">
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${city1})` }}
            >
              <div className="absolute inset-0 bg-black/40 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full group-hover:h-20 bg-black/40 group-hover:bg-black/60 transition"></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center px-4 mt-15">
                <div className="text-white text-xl">3,642</div>
                <div className="text-white text-xl font-medium mb-10">
                  Lagos Hotels
                </div>
                <button className=" px-4 py-2 border border-white text-white rounded-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  Book Hotels in Lagos
                </button>
              </div>
            </div>
          </div>
          <div className="relative h-60 w-80 group cursor-pointer flex justify-center items-center overflow-hidden rounded-sm">
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${city2})` }}
            >
              <div className="absolute inset-0 bg-black/40 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full group-hover:h-20 bg-black/40 group-hover:bg-black/60 transition"></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center px-4 mt-15">
                <div className="text-white text-xl">1,290</div>
                <div className="text-white text-xl font-medium mb-10">
                  Abuja Hotels
                </div>
                <button className=" px-4 py-2 border border-white text-white rounded-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  Book Hotels in Abuja
                </button>
              </div>
            </div>
          </div>
          <div className="relative h-60 w-80 group cursor-pointer flex justify-center items-center overflow-hidden rounded-sm">
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${city3})` }}
            >
              <div className="absolute inset-0 bg-black/40 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full group-hover:h-20 bg-black/40 group-hover:bg-black/60 transition"></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center px-4 mt-15">
                <div className="text-white text-xl">289</div>
                <div className="text-white text-xl font-medium mb-10">
                  Calabar Hotels
                </div>
                <button className=" px-4 py-2 border border-white text-white rounded-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  Book Hotels in Calabar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="relative h-60 w-80 group cursor-pointer flex justify-center items-center overflow-hidden rounded-sm">
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${city4})` }}
            >
              <div className="absolute inset-0 bg-black/40 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full group-hover:h-20 bg-black/40 group-hover:bg-black/60 transition"></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center px-4 mt-15">
                <div className="text-white text-xl">449</div>
                <div className="text-white text-xl font-medium mb-10">
                  Port Harcourt Hotels
                </div>
                <button className=" px-4 py-2 border border-white text-white rounded-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  Book Hotels in Port Harcourt
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative h-60 w-80 group cursor-pointer flex justify-center items-center overflow-hidden rounded-sm">
              <div
                className="h-full w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${city5})` }}
              >
                <div className="absolute inset-0 bg-black/40 transition duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full group-hover:h-20 bg-black/40 group-hover:bg-black/60 transition"></div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center px-4 mt-15">
                  <div className="text-white text-xl">259</div>
                  <div className="text-white text-xl font-medium mb-10">
                    Owerri Hotels
                  </div>
                  <button className=" px-4 py-2 border border-white text-white rounded-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                    Book Hotels in Owerri
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-60 w-80 group cursor-pointer flex justify-center items-center overflow-hidden rounded-sm">
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${city6})` }}
            >
              <div className="absolute inset-0 bg-black/40 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full group-hover:h-20 bg-black/40 group-hover:bg-black/60 transition"></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center px-4 mt-15">
                <div className="text-white text-xl">223</div>
                <div className="text-white text-xl font-medium mb-10">
                  Uyo Hotels
                </div>
                <button className=" px-4 py-2 border border-white text-white rounded-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  Book Hotels in Uyo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
