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
          <div className="relative h-60 w-80 group cursor-pointer flex justify-center items-center">
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${city1})` }}
            >
              <div className="absolute inset-0 bg-black/40 opacity-100"></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center px-4">
                <div className="text-white text-xl">3,642</div>
                <div className="text-white text-xl font-medium">
                  Lagos Hotels
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-50"></div>
          </div>
          <div className="">
            <div className="relative h-60 w-80 group cursor-pointer">
              <div
                className="h-full w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${city2})` }}
              >
                <div className="absolute inset-0 bg-[rgba(51,51,51,0.5)]"></div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center px-4">
                  <div className="text-white text-xl">1,290</div>
                  <div className="text-white text-xl font-medium">
                    Abuja Hotels
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-50"></div>
            </div>
          </div>
          <div className="">
            <div className="relative h-60 w-80 group cursor-pointer">
              <div
                className="h-full w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${city3})` }}
              >
                <div className="absolute inset-0 bg-[rgba(51,51,51,0.5)]"></div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center px-4">
                  <div className="text-white text-xl">289</div>
                  <div className="text-white text-xl font-medium">
                    Calabar Hotels
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-50"></div>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="">
            <div className="relative h-60 w-80 group cursor-pointer">
              <div
                className="h-full w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${city4})` }}
              >
                <div className="absolute inset-0 bg-[rgba(51,51,51,0.5)]"></div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center px-4">
                  <div className="text-white text-xl">449</div>
                  <div className="text-white text-xl font-medium">
                    Port Harcourt Hotels
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-50"></div>
            </div>
          </div>
          <div className="">
            <div className="relative h-60 w-80 group cursor-pointer">
              <div
                className="h-full w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${city5})` }}
              >
                <div className="absolute inset-0 bg-[rgba(51,51,51,0.5)]"></div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center px-4">
                  <div className="text-white text-xl">259</div>
                  <div className="text-white text-xl font-medium">
                    Owerri Hotels
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-50"></div>
            </div>
          </div>
          <div className="">
            <div className="relative h-60 w-80 group cursor-pointer">
              <div
                className="h-full w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${city6})` }}
              >
                <div className="absolute inset-0 bg-[rgba(51,51,51,0.5)]"></div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center px-4">
                  <div className="text-white text-xl">223</div>
                  <div className="text-white text-xl font-medium">
                    Uyo Hotels
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
