import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "../Assets/FlyYouLogo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="container mx-auto flex justify-between items-center p-4 text-xl">
      <img src={Logo} className="h-12" alt="page-navigation" />

      <nav className="md:flex gap-2 md:gap-6 font-sm  text-[#F9FAFBaa] hidden capitalize ">
        <Link className="hover:text-white" to="/">
          Home
        </Link>

        <div
          className="relative group pb-3 hover:text-white hover:cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p>Project</p>
          <div
            className={`absolute w-64   bg-[#141415] top-full left-1/2 -translate-x-1/2 flex flex-col gap-3 px-4 py-2 rounded-md text-[#F9FAFBaa]  ${
              isHovered
                ? "block opacity-100 translate-y-0"
                : "hidden opacity-0 -translate-y-10"
            } transition-all duration-500 ease-in-out`}
          >
            <Link
              className="hover:text-white"
              to="/projects/registered_support_organization"
            >
              Registered Support Organization
            </Link>
            <Link className="hover:text-white" to="/projects/namaste_recruit">
              Namaste Recruit
            </Link>
            <Link
              className="hover:text-white"
              to="/projects/abs_english_conversation"
            >
              ABS English Conversation
            </Link>
          </div>
        </div>

        <Link className="hover:text-white" to="/about">
          About
        </Link>
        <Link className="hover:text-white" to="/contact">
          Contact
        </Link>
      </nav>

      <button
        className="block md:hidden absolute z-[201] right-4 top-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* mobile nav */}
      {isOpen && (
        <>
          <nav className="absolute left-0 top-0 z-[200] w-full h-screen flex flex-col gap-4 items-center justify-center text-2xl bg-[#141415] text-[#F9FAFBaa] md:hidden capitalize  transition-all">
            <Link className="hover:text-white" to="/">
              Home
            </Link>

            <div
              className="relative group px-3  before:absolute before:w-[20%] before:h-1 before:bg-gradient-to-r from-[#082FB2] to-[#F34213] before:left-1/2 before:-bottom-1 before:-translate-x-1/2 hover:before:w-[80%] before:transition-all hover:text-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p>Project</p>
              <div
                className={`absolute w-64 text-[#F9FAFBaa] bg-black top-1/2 left-full -translate-y-1/2 flex flex-col gap-3 px-4 py-2 rounded-md ${
                  isHovered
                    ? "block opacity-100 translate-y-0"
                    : "hidden opacity-0 -translate-y-10"
                } transition-all duration-500 ease-in-out`}
              >
                <Link
                  className="hover:text-white"
                  to="/projects/registered_support_organization"
                >
                  Registered Support Organization
                </Link>
                <Link
                  className="hover:text-white"
                  to="/projects/namaste_recruit"
                >
                  Namaste Recruit
                </Link>
                <Link
                  className="hover:text-white"
                  to="/projects/abs_english_conversation"
                >
                  ABS English Conversation
                </Link>
              </div>
            </div>

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
