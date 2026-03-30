const EmailForm = () => {
  return (
    <div className="flex bg-[#084482] w-screen items-center justify-center h-23 gap-6">
      <div className="flex gap-4 items-center justify-center">
        <i class="text-[#0099e6] bg-white rounded-full p-2 fa-solid fa-lock"></i>
        <div className="flex flex-col">
          <div className="text-lg text-white font-medium">
            Enter your email address to unlock hotel deals
          </div>
          <div className="text-[#0099e6]">
            Sign up to start receiving exclusive offers
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center border-l border-t border-b h-10 bg-white w-70 p-1 rounded-tl-sm  rounded-bl-sm">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full outline-none p-2"
          />
        </div>
        <button className="bg-[#00aeff] text-white cursor-pointer w-40 h-10 p-2 rounded-tr-sm  rounded-br-sm hover:bg-[#0099e6] transition duration-700 ease-in-out">
          Unlock
        </button>
      </div>
    </div>
  );
};

export default EmailForm;
