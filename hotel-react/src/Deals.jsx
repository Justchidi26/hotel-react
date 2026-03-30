const Deals = () => {
  return (
    <div className="flex flex-col gap-2 w-screen items-center justify-center bg-gray-50 mt-20">
      <div className="text-3xl text-[#4f4f4f] font-medium mt-10">
        Special Hotel Deals and Offers
      </div>
      <div className="text-base text-[#4f4f4f]">
        Enter your email address to receive secret hotels deals
      </div>
      <div className="flex justify-center gap-2 mb-20 mt-5">
        <div className="flex items-center border border-stone-400 w-120 p-2 rounded-md">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full outline-none ml-5"
          />
        </div>
        <button className="bg-[#00aeff] text-white cursor-pointer w-30 p-2 rounded-md hover:bg-[#0099e6] transition duration-700 ease-in-out">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Deals;
