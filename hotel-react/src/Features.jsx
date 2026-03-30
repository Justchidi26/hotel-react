const Features = () => {
  return (
    <div className="flex flex-col gap-2 items-center w-screen">
      <div className="text-2xl text-[#4f4f4f] font-medium mt-10">
        We've been features in
      </div>
      <div className="border-t-[3px] border-[#00aeff] my-[15px] mx-auto w-16 mb-10"></div>
      <div className="flex justify-center gap-14 mb-10">
        <div>BBC</div>
        <div>Forbes</div>
        <div>Newsweek</div>
        <div>Web AFRICA</div>
      </div>
      <div className="text-3xl text-[#4f4f4f] font-medium">
        Get More Bookings for Your Hotel
      </div>
      <div className="text-lg text-[#4f4f4f] mb-6">
        Find out why over 13,137 hotels managers trust Hotels.ng
      </div>
      <button className="bg-[#00aeff] text-white cursor-pointer w-50 p-2 rounded-sm hover:bg-[#0099e6] transition duration-700 ease-in-out">
        Add your Hotel
      </button>
    </div>
  );
};

export default Features;
