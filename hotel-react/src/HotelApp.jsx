import appimage from "./assets/app-image.png";
import googleplaymin from "./assets/google-play-min.png";
import appstore from "./assets/app-store.png";

const HotelApp = () => {
  return (
    <div className="mt-20 bg-sky-50 w-screen flex justify-center items-center py-2 px-20 gap-20">
      <div
        className="h-[600px] w-[500px] bg-contain bg-no-repeat bg-center mt-20"
        style={{ backgroundImage: `url(${appimage})` }}
      ></div>
      <div className="flex flex-col max-w-xl mt-30">
        <h1 className="text-5xl text-[#0099e6] font-medium leading-tight">
          Get the
        </h1>
        <h1 className="text-5xl text-[#0099e6] font-medium leading-tight">
          Hotels.ng app
        </h1>

        <div className="text-2xl text-[#4f4f4f] font-semibold mt-4">
          Download the hotels.ng app and book a hotel instantly
        </div>

        <div className="text-xl text-[#4f4f4f] mt-2">
          Book your hotel instantly with our Android and iOS Apps.
        </div>
        <div className="flex gap-4 mt-8">
          <div
            className="h-14 w-44 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${googleplaymin})` }}
          ></div>
          <div
            className="h-14 w-44 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${appstore})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HotelApp;