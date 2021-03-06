import { Img } from "react-image";
import {
  IlFeaturesTab1,
  IlFeaturesTab2,
  IlFeaturesTab3,
} from "../../../assets";

function Features() {
  return (
    <section className="bg-bookmark-white py-20 mt-20 lg:mt-60">
      {/* Heading */}
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-bookmark-blue">Features</h1>
        <p className="text-center text-bookmark-grey mt-4">
          Our aim is to make it quick and easy for you to access your favourite
          websites. your bookmarks sync between your devices so you can access
          them on the go
        </p>
      </div>
      {/* Features #1 */}
      <div className="relative mt-20 lg:mt-24">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          {/* Image */}
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <Img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h/3/4 md:w-full md:h-full"
              src={IlFeaturesTab1}
            ></Img>
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:itmes-start">
            <h1 className="text-3xl text-bookmark-blue">
              Bookmark in one click
            </h1>
            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complex over how you manage your favourite
              sites.
            </p>
            <button className="btn btn-purple hover:bg-bookmark-white hover:text-black">
              More Info ...
            </button>
          </div>
        </div>
        <div className="hidden md:block overflow-hidden bg-bookmark-pupple rounded-r-full absolute h-80 w-2/4   -bottom-24 -left-36"></div>
      </div>
      {/* Features #2 */}
      <div className="relative mt-20 lg:mt-52">
        <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          {/* Image */}
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <Img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h/3/4 md:w-full md:h-full"
              src={IlFeaturesTab2}
            ></Img>
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:itmes-start">
            <h1 className="text-3xl text-bookmark-blue">Intelligent search</h1>
            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all time at all. No need to
              traw of your bookmarks
            </p>
            <button className="btn btn-purple hover:bg-bookmark-white hover:text-black">
              More Info ...
            </button>
          </div>
        </div>
        <div className="hidden md:block overflow-hidden bg-bookmark-pupple rounded-l-full absolute h-80 w-2/4  -bottom-24 -right-0"></div>
      </div>
      {/* Features #3 */}
      <div className="relative mt-20 lg:mt-52">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          {/* Image */}
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <Img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h/3/4 md:w-full md:h-full"
              src={IlFeaturesTab3}
            ></Img>
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:itmes-start">
            <h1 className="text-3xl text-bookmark-blue">
              Share your bookmarks
            </h1>
            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Easily share your bookmarks and collections with others. Create a
              shareble link that you can at the click of a button.
            </p>
            <button className="btn btn-purple hover:bg-bookmark-white hover:text-black">
              More Info ...
            </button>
          </div>
        </div>
        <div className="hidden md:block overflow-hidden bg-bookmark-pupple rounded-r-full absolute h-80 w-2/4   -bottom-24 -left-36"></div>
      </div>
    </section>
  );
}

export default Features;
