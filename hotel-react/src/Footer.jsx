import nanta from "./assets/nanta.svg";
import ntdc from "./assets/ntdc.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-8 w-full px-4">
      <div className="border-t border-stone-400 w-full max-w-6xl"></div>
      <div className="flex md:flex-row md:justify-between items-center w-full max-w-6xl gap-6 text-stone-500">
        <div className="flex md:flex-row items-center gap-4 text-center md:text-left">
          
          <div className="text-sm">
            Copyright © 2026 Hotel Booking Limited All Rights Reserved
          </div>
          <div className="flex gap-3 text-lg">
            <a href="https://www.twitter.com/hotelsng" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter cursor-pointer"></i>
            </a>
            <a href="https://www.facebook.com/hotelsng" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-f cursor-pointer"></i>
            </a>
            <a href="https://instagram.com/hotelsng" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram cursor-pointer"></i>
            </a>
            <a href="https://www.google.com/+hotelsng" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-google cursor-pointer"></i>
            </a>
            <a href="https://pinterest.com/hotelsng" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-pinterest cursor-pointer"></i>
            </a>
            <a href="https://www.youtube.com/user/hotelsng" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube cursor-pointer"></i>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm">Certified by:</div>

          <img src={nanta} alt="nanta" className="h-10 w-10 object-contain" />

          <img src={ntdc} alt="ntdc" className="h-10 w-10 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Footer;