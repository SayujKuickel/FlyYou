import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between  items-center p-4 text-xl">
      <img src="vite.svg" className="h-12" alt="page-navigation" />

      <nav className="md:flex gap-2 md:gap-6 font-sm  text-[#F9FAFBaa] hidden capitalize ">
        <a className="hover:text-white" href="#">
          Home
        </a>
        <a className="hover:text-white" href="#">
          Projects
        </a>
        <a className="hover:text-white" href="#">
          Company
        </a>
        <a className="hover:text-white" href="#">
          Recruiment
        </a>
        <a className="hover:text-white" href="#">
          Articles
        </a>
        <a className="hover:text-white" href="#">
          contact
        </a>
      </nav>

      <button
        className="block md:hidden absolute z-[201] right-4 top-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && (
        <>
          {/* mobile nav */}
          <nav className="absolute left-0 top-0 z-[200] w-full h-screen flex flex-col gap-4 items-center justify-center text-2xl bg-[#141415] text-[#F9FAFBaa] md:hidden capitalize">
            <a className="hover:text-white" href="#">
              Home
            </a>
            <a className="hover:text-white" href="#">
              Projects
            </a>
            <a className="hover:text-white" href="#">
              Company
            </a>
            <a className="hover:text-white" href="#">
              Recruiment
            </a>
            <a className="hover:text-white" href="#">
              Articles
            </a>
            <a className="hover:text-white" href="#">
              contact
            </a>
          </nav>
        </>
      )}
    </header>
  );
}
