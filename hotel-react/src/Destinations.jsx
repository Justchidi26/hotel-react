const Destinations = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 mt-8 mb-12">
        <div className="text-2xl text-[#4f4f4f] font-medium">
          Suggested Destinations in Nigeria
        </div>
        <div className="text-lg text-[#4f4f4f]">
          Below are the most popular travel destinations in Nigeria
        </div>
        <div className="border-t-[3px] border-[#00aeff] my-[15px] mx-auto w-16"></div>
      </div>
      <div className="flex gap-4 pr-[30px] pl-[30px]">
        <div className="group flex flex-col items-center justify-center border-2 border-[#00aeff] rounded-md p-4 h-25 w-40 hover:bg-[#00aeff] transition duration-700 ease-in-out cursor-pointer">
          <div className="text-[#00aeff] text-lg font-medium group-hover:text-white">
            Hotels in
          </div>
          <div className="text-[#00aeff] text-lg font-medium group-hover:text-white">
            Lagos
          </div>
          <div className="text-base text-[#4f4f4f] group-hover:text-white">
            3,642 hotels
          </div>
        </div>
        <div className="group flex flex-col items-center justify-center border-2 border-[#00aeff] rounded-md p-4 h-25 w-40 hover:bg-[#00aeff] transition duration-700 ease-in-out cursor-pointer">
          <div className="text-[#00aeff] text-lg font-medium group-hover:text-white">
            Hotels in
          </div>
          <div className="text-[#00aeff] text-lg font-medium group-hover:text-white">
            Abuja
          </div>
          <div className="text-base text-[#4f4f4f] group-hover:text-white">
            1,290 hotels
          </div>
        </div>
        <div className="group flex flex-col items-center justify-center border-2 border-[#00aeff] rounded-md p-4 h-25 w-40 hover:bg-[#00aeff] transition duration-700 ease-in-out cursor-pointer">
          <div className="text-[#00aeff] text-lg font-medium group-hover:text-white">
            Hotels in
          </div>
          <div className="text-[#00aeff] text-lg font-medium group-hover:text-white">
            Port Harcourt
          </div>
          <div className="text-base text-[#4f4f4f] group-hover:text-white">
            449 hotels
          </div>
        </div>
        <div className="group flex flex-col items-center justify-center border-2 border-[#00aeff] rounded-md p-4 h-25 w-40 hover:bg-[#00aeff] transition duration-700 ease-in-out cursor-pointer">
          <div className="text-[#00aeff] text-lg font-medium group-hover:text-white">
            Hotels in
          </div>
          <div className="text-[#00aeff] text-lg font-medium group-hover:text-white">
            Kaduna
          </div>
          <div className="text-base text-[#4f4f4f] group-hover:text-white">
            331 hotels
          </div>
        </div>
        <div className="group flex flex-col items-center justify-center border-2 border-[#00aeff] rounded-md p-4 h-25 w-40 hover:bg-[#00aeff]  transition duration-700 ease-in-out cursor-pointer">
          <div className="text-[#00aeff] text-lg font-medium group-hover:text-white">
            Hotels in
          </div>
          <div className="text-[#00aeff] text-lg font-medium group-hover:text-white">
            Uyo
          </div>
          <div className="text-base text-[#4f4f4f] group-hover:text-white">
            223 hotels
          </div>
        </div>
        <div className="group flex flex-col items-center justify-center border-2 border-[#00aeff] rounded-md p-4 h-25 w-40 hover:bg-[#00aeff] transition duration-700 ease-in-out cursor-pointer">
          <div className="text-[#00aeff] text-lg font-medium group-hover:text-white">
            Hotels in
          </div>
          <div className="text-[#00aeff] text-lg font-medium group-hover:text-white">
            Ibadan
          </div>
          <div className="text-base text-[#4f4f4f] group-hover:text-white">
            518 hotels
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
