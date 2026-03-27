import navbarContactMin from "./assets/navbar-contact-min.jpg";
import whatsappicon from "./assets/whatsapp-icon.png";
import logo from "./assets/logo.png";
import nigeriaflag from "./assets/nigeria-flag.svg";

const Navbar = () => {
  return (
    <div className="bg-sky-400 flex justify-between h-16">
      <div className="flex items-center px-4">
        <div className=" px-4">
          <img src={logo} alt="logo" className="h-8 w-20" />
        </div>
      </div>
      <div className="flex h-full">
        <div className="border-r border-white flex items-center px-4">
          <img src={whatsappicon} alt="whatsapp" className="h-10 w-10" />
        </div>
        <div className="border-r border-white flex items-center px-4">
          <div className="flex items-center bg-blue-900 rounded-full pr-6 gap-6 h-11">
            <img
              src={navbarContactMin}
              alt="contact"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex flex-col items-center gap-[1px]">
              <div className="text-[10px] text-sky-500 mt-1">
                You can call us to book your hotel
              </div>

              <div className="flex items-center text-white">
                <span className="mr-2 text-[15px]">+234 814 880 8800</span>
                <button>
                  <i className="mt-1 text-white fa-solid fa-caret-down"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-r border-white flex items-center px-4 text-white gap-2">
          <img src={nigeriaflag} alt="Nigerian flag" className="h-10 w-10" />
          <i class="text-white fa-solid fa-naira-sign"></i>
          <button>
            <i className="ml-2 mt-1 fa-solid fa-caret-down"></i>
          </button>
        </div>
        <div className="flex items-center px-4 mr-8 text-white">
          <i className="text-3xl mr-2 fa-solid fa-circle-user"></i>
          <span className="text-sm">Account</span>
          <button>
            <i className="ml-2 mt-1 fa-solid fa-caret-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
