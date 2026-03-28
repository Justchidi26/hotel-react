const Search = () => {
  return (
    <section className="bg-white shadow-xl/20 w-280 h-30 flex items-center justify-center">
      <div className="bg-white pr-[30px] pl-[30px] flex justify-center items-center gap-2">
        <div className="flex items-center border border-stone-400 w-120 p-2 rounded-sm">
          <i class="fa-solid fa-magnifying-glass mr-2 text-[#4f4f4f]"></i>
          <input
            type="text"
            placeholder="Search for a city or particular hotel"
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border border-stone-400 w-80 p-2 rounded-sm">
          <i class="fa-solid fa-calendar mr-2 text-[#4f4f4f]"></i>
          <input
            type="date"
            className="outline-none"
          />
        </div>
        <button className="bg-[#00aeff] text-white cursor-pointer w-50 p-2 rounded-sm hover:bg-[#0099e6] transition duration-700 ease-in-out">
          Find Hotels
        </button>
      </div>
    </section>
  );
};

export default Search;
