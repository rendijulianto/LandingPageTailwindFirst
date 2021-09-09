import { Img } from "react-image";
import { BgHero } from "../../../assets";

function Hero() {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        {/* Content */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-left mb-6">
            A simple bookmark manager
          </h2>
          <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
            A clean and simpel interface to organize your favourite websites.
            Open a new browser tab and se - load instantly, try it for free
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <button className="btn btn-purple hover:bg-bookmark-white hover:text-black">
              Get in on Chrome
            </button>
            <button className="btn btn-white hover:bg-bookmark-pupple hover:text-white">
              Get in on Firefox
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:md-0 z-10">
          <Img
            src={BgHero}
            className="w-5/6 h-5/6 sm:w-3/4 sm:h/3/4 md:w-full md:h-full"
          ></Img>
        </div>
      </div>
      {/* Rounded Rectangle */}
      <div className="hidden md:block overflow-hidden bg-bookmark-pupple rounded-l-full absolute h-80 w-2/4 right-0 top-32 lg: -bottom-28 lg:-right-36"></div>
    </section>
  );
}

export default Hero;
