import FlyYouLogo from "../Assets/FlyYouLogo.png";
import IdeaGenLogo from "../Assets/IdeaGenLogo.png";
import FacebookIcon from "../Assets/icons/facebook-logo.svg";
import InstagramIcon from "../Assets/icons/instagram-logo.svg";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-32">
      <div className="container mx-auto bg-[#141415] md:rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 md:p-6 lg:p-10">
        <div>
          <img src={FlyYouLogo} className="h-16 brightness-0 invert" alt="" />
          <p className="text-[#F9FAFBaa]">Flyyou &copy; All right reserved</p>

          <h3 className="uppercase font-bold mt-8">Developed By</h3>
          <img src={IdeaGenLogo} className="h-12 brightness-0 invert" alt="" />
        </div>

        <ul className="flex flex-col gap-3 mt-6 md:mt-0 text-[#F9FAFBaa]">
          <li>
            <h2 className="text-2xl font-bold mt-6 md:mt-0 text-white">
              Quick Links
            </h2>
          </li>

          <li className="text-[#F9FAFBaa]">
            <a href="">Company</a>
          </li>
          <li className="text-[#F9FAFBaa]">
            <a href="">Articles</a>
          </li>
          <li className="text-[#F9FAFBaa]">
            <a href="">Contacts</a>
          </li>
          <li className="text-[#F9FAFBaa]">
            <a href="">Recuritment</a>
          </li>
          <li className="">
            <a href="">Privacy Policy</a>
          </li>
        </ul>

        <ul className="flex flex-col gap-3 mt-6 md:mt-0 text-[#F9FAFBaa]">
          <li>
            <h2 className="text-2xl font-bold mt-6 md:mt-0 text-white">
              Projects
            </h2>
          </li>

          <li>
            <Link
              className="hover:text-white"
              to="/projects/registered_support_organization"
            >
              Registered Support Organization
            </Link>
          </li>

          <li>
            <Link className="hover:text-white" to="/projects/namaste_recruit">
              Namaste Recruit
            </Link>
          </li>

          <li>
            <Link
              className="hover:text-white"
              to="/projects/abs_english_conversation"
            >
              ABS English Conversation
            </Link>
          </li>
        </ul>

        <div>
          <h2 className="text-2xl font-bold mt-6 md:mt-0">Our Social Links</h2>
          <div className="flex gap-3 my-4">
            <a href="">
              <img
                className="w-8 mx-1 hover:scale-110 transition-all"
                src={FacebookIcon}
              />
            </a>
            <a href="">
              <img
                className="w-8 mx-1 hover:scale-110 transition-all"
                src={InstagramIcon}
              />
            </a>
          </div>
          <div id="google_translate_element"></div>
        </div>
      </div>
    </footer>
  );
}
