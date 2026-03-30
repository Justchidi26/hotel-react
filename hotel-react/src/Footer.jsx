import nanta from "./assets/nanta.svg";
import ntdc from "./assets/ntdc.svg";
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-8 w-screen">
      <div className="border-t border-stone-400 w-250"></div>
      <div className="flex justify gap-40 text-stone-500">
        <div className="flex gap-2">
          <div className="text-sm">
            Copyright © 2026 Hotel Booking Limited All Rights Reserved
          </div>
          <div className="flex gap-2">
            <a
              href="https://www.twitter.com/hotelsng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter cursor-pointer"></i>
            </a>
            <a
              href="https://www.facebook.com/hotelsng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com/hotelsng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.google.com/+hotelsng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-google"></i>
            </a>
            <a
              href="https://pinterest.com/hotelsng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-pinterest"></i>
            </a>
            <a
              href="https://www.youtube.com/user/hotelsng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="text-sm mt-2">Certified by: </div>
          <img src={nanta} alt="nanta" className="h-10 w-10" />
          <div
            className="h-10 w-10 bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${ntdc})` }}
          ></div>

          
        </div>
      </div>
    </div>
  );
};

export default Footer;
