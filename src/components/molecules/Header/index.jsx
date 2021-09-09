import { Img } from "react-image";
import { LogoBookMark } from "../../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <header>
      <nav className="container flex items-center py-4 mt-4 sm:mt-12">
        <div className="py-1">
          <Img src={LogoBookMark} alt="" />
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Price</li>
          <li className="cursor-pointer">Contact</li>
          <button
            type="button"
            className="bg-bookmark-red text-white rounded-md px-7 py-3"
          >
            Login
          </button>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end">
          <FontAwesomeIcon icon={faBars} className="text-2xl"></FontAwesomeIcon>
        </div>
      </nav>
    </header>
  );
}

export default Header;
