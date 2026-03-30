import appimage from "./assets/app-image.png";
import googleplaymin from "./assets/google-play-min.png";
import appstore from "./assets/app-store.png";
const HotelApp = () => {
  return (
    <div className="mt-20 bg-sky-50 flex w-screen justify-center gap-12">
      <div
        className="h-50 w-60 bg-cover bg-center mt-20"
        style={{ backgroundImage: `url(${appimage})` }}
      ></div>
      <div className="flex flex-col mt-27">
        <h1 className="text-5xl text-[#0099e6] font-medium">Get the</h1>
        <h1 className="text-5xl text-[#0099e6] font-medium">Hotels.ng app</h1>
        <div className="text-xl text-[#4f4f4f] font-medium">
          Download the hotels.ng app and book a
        </div>
        <div className="text-xl text-[#4f4f4f] font-medium">
          hotel instantly
        </div>
        <div className="text-lg text-[#4f4f4f]">
          Book your hotel instantly with our Android and
        </div>
        <div className="text-lg text-[#4f4f4f]">iOS Apps.</div>
        <div className="flex gap-2 mt-5 mb-8">
          <div
            className="h-10 w-40 bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${googleplaymin})` }}
          ></div>
          <div
            className="h-10 w-40 bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${appstore})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HotelApp;
