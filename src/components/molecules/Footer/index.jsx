import { Img } from "react-image";
import { LogoBookMarkWhite } from "../../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className="bg-bookmark-blue py-8">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-wrap justify-center md:justify-start gap-12">
          <Img src={LogoBookMarkWhite} alt=""></Img>
          <ul className="flex text-white uppercase gap-12 text-xs">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact </li>
          </ul>
        </div>
        <div className="flex gap-10 mt-12 md:mt-0">
          <li className="list-none">
            <FontAwesomeIcon
              className="text-white text-2xl"
              icon={faFacebook}
            />
          </li>
          <li className="list-none">
            <FontAwesomeIcon className="text-white text-2xl" icon={faTwitter} />
          </li>
          <li className="list-none">
            <FontAwesomeIcon className="text-white text-2xl" icon={faGithub} />
          </li>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
