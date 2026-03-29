import firsthotel from "./assets/first-hotel.jpg";
import secondhotel from "./assets/second-hotel.jpg";
import thirdhotel from "./assets/third-hotel.jpeg";
import fourthhotel from "./assets/fourth-hotel.jpg";
import fifthhotel from "./assets/fifth-hotel.jpg";
import sixthhotel from "./assets/sixth-hotel.jpg";

const Hotel = () => {
  return (
    <div className="mt-20 flex flex-col items-center gap-2">
      <div className="text-2xl text-[#4f4f4f] font-medium">
        Today's Top Hotel Deals
      </div>
      <div className="text-lg text-[#4f4f4f]">
        A selection of the best hotel deals, only available Today
      </div>
      <div className="border-t-[3px] border-[#00aeff] my-[15px] mx-auto w-16"></div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="">
            <div className="relative h-50 w-80">
              <div className="relative h-50 w-80 group cursor-pointer">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${firsthotel})` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div>
              </div>
              <div className="absolute top-3 -left-2.5 bg-orange-500 text-white text-md px-4 py-1">
                Up to <span className="font-semibold text-lg">19%</span> off
                <span className="absolute -bottom-2.5 left-0 w-0 h-0 border-l-[10px] border-l-orange-700 border-t-[10px] border-t-transparent rotate-180"></span>
              </div>
            </div>
            <div className="flex flex-col justify-left gap-4 border-r border-l border-b border-stone-400 rounded-br-sm rounded-bl-sm">
              <div className="text-[#00aeff] text-lg font-medium  mt-5 ml-4">
                Florence Hotel and S...
              </div>
              <div className="text-lg text-[#4f4f4f] mb-5 ml-4">Benin, Edo</div>
            </div>
          </div>
          <div className="">
            <div className="relative h-50 w-80">
             <div className="relative h-50 w-80 group cursor-pointer">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${secondhotel})` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div>
              </div>
              <div className="absolute top-3 -left-2.5 bg-orange-500 text-white text-md px-4 py-1">
                Up to <span className="font-semibold text-lg">27%</span> off
                <span className="absolute -bottom-2.5 left-0 w-0 h-0 border-l-[10px] border-l-orange-700 border-t-[10px] border-t-transparent rotate-180"></span>
              </div>
            </div>
            <div className="flex flex-col justify-left gap-4 border-r border-l border-b border-stone-400 rounded-br-sm rounded-bl-sm">
              <div className="text-[#00aeff] text-lg font-medium  mt-5 ml-4">
                The Corinthia Villa...
              </div>
              <div className="text-lg text-[#4f4f4f] mb-5 ml-4">
                Garki, Abuja
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative h-50 w-80">
              <div className="relative h-50 w-80 group cursor-pointer">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${thirdhotel})` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div>
              </div>
              <div className="absolute top-3 -left-2.5 bg-orange-500 text-white text-md px-4 py-1">
                Up to <span className="font-semibold text-lg">21%</span> off
                <span className="absolute -bottom-2.5 left-0 w-0 h-0 border-l-[10px] border-l-orange-700 border-t-[10px] border-t-transparent rotate-180"></span>
              </div>
            </div>
            <div className="flex flex-col justify-left gap-4 border-r border-l border-b border-stone-400 rounded-br-sm rounded-bl-sm">
              <div className="text-[#00aeff] text-lg font-medium  mt-5 ml-4">
                Luxol Homes & Suites
              </div>
              <div className="text-lg text-[#4f4f4f] mb-5 ml-4">
                Ikeja, Lagos
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="">
            <div className="relative h-50 w-80">
              <div className="relative h-50 w-80 group cursor-pointer">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${fourthhotel})` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div>
              </div>
              <div className="absolute top-3 -left-2.5 bg-orange-500 text-white text-md px-4 py-1">
                Up to <span className="font-semibold text-lg">19%</span> off
                <span className="absolute -bottom-2.5 left-0 w-0 h-0 border-l-[10px] border-l-orange-700 border-t-[10px] border-t-transparent rotate-180"></span>
              </div>
            </div>
            <div className="flex flex-col justify-left gap-4 border-r border-l border-b border-stone-400 rounded-br-sm rounded-bl-sm">
              <div className="text-[#00aeff] text-lg font-medium  mt-5 ml-4">
                Delta Continental H...
              </div>
              <div className="text-lg text-[#4f4f4f] mb-5 ml-4">
                Port harcourt, Rivers
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative h-50 w-80">
              <div className="relative h-50 w-80 group cursor-pointer">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${fifthhotel})` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div>
              </div>
              <div className="absolute top-3 -left-2.5 bg-orange-500 text-white text-md px-4 py-1">
                Up to <span className="font-semibold text-lg">19%</span> off
                <span className="absolute -bottom-2.5 left-0 w-0 h-0 border-l-[10px] border-l-orange-700 border-t-[10px] border-t-transparent rotate-180"></span>
              </div>
            </div>
            <div className="flex flex-col justify-left gap-4 border-r border-l border-b border-stone-400 rounded-br-sm rounded-bl-sm">
              <div className="text-[#00aeff] text-lg font-medium  mt-5 ml-4">
                Wavecrest Beach Re...
              </div>
              <div className="text-lg text-[#4f4f4f] mb-5 ml-4">
                Ibeju-lekki, Lagos
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative h-50 w-80">
              <div className="relative h-50 w-80 group cursor-pointer">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${sixthhotel})` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div>
              </div>
              <div className="absolute top-3 -left-2.5 bg-orange-500 text-white text-md px-4 py-1">
                Up to <span className="font-semibold text-lg">0%</span> off
                <span className="absolute -bottom-2.5 left-0 w-0 h-0 border-l-[10px] border-l-orange-700 border-t-[10px] border-t-transparent rotate-180"></span>
              </div>
            </div>
            <div className="flex flex-col justify-left gap-4 border-r border-l border-b border-stone-400 rounded-br-sm rounded-bl-sm">
              <div className="text-[#00aeff] text-lg font-medium  mt-5 ml-4">
                Florence Hotel and S...
              </div>
              <div className="text-lg text-[#4f4f4f] mb-5 ml-4">Benin, Edo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
