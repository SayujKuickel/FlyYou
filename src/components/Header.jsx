import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Logo from "../Assets/FlyYouLogo.png";
import CrossIcon from "../Assets/icons/cross-nav.svg";
import BarsIcon from "../Assets/icons/bars-nav.svg";

import { projects } from "../constants";

import PopupMenu from "../components/PopupMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // google translate
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <header className="container mx-auto flex justify-between items-center p-4 text-xl">
      <Link to="/">
        <img src={Logo} className="h-12" alt="page-navigation" />
      </Link>

      <nav className="md:flex gap-2 md:gap-6 font-sm  text-[#F9FAFBaa] hidden capitalize ">
        <Link className="hover:text-white" to="/">
          Home
        </Link>

        <PopupMenu itemList={projects}>Projects</PopupMenu>

        <Link className="hover:text-white" to="/about">
          Company
        </Link>
        <Link className="hover:text-white" to="/contact">
          Contact
        </Link>
      </nav>

      <div id="google_translate_element"></div>

      <button
        className="block md:hidden absolute z-[201] right-4 top-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <img
            className=" brightness-0 invert w-6 aspect-square"
            src={CrossIcon}
          />
        ) : (
          <img
            className=" brightness-0 invert w-6 aspect-square"
            src={BarsIcon}
          />
        )}
      </button>

      {/* mobile nav */}
      {isOpen && (
        <>
          <nav className="absolute left-0 top-0 z-[200] w-full h-screen flex flex-col gap-4 items-center justify-center text-2xl bg-[#141415] text-[#F9FAFBaa] md:hidden capitalize  transition-all">
            <Link className="hover:text-white" to="/">
              Home
            </Link>

            <PopupMenu itemList={projects}>Projects</PopupMenu>

            <Link className="hover:text-white" to="/about">
              About
            </Link>
            <Link className="hover:text-white" to="/contact">
              Contact
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}
