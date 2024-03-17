import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PopupMenu({ children, itemList }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      className="relative group  hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="flex align-bottom justify-center gap-1">
        {children}
        <span
          className={`scale-y-50 text-xl font-bold rotate-[180deg] transition-all ${
            isHovered ? "rotate-[360deg]" : ""
          }`}
        >
          ^
        </span>
      </p>
      <div
        className={`absolute w-64 bg-[#2a2a2a] shadow-xl top-full left-1/2 -translate-x-1/2 flex flex-col gap-3 px-4 py-2 rounded-md z-[10000]  text-neutral-300  ${
          isHovered
            ? "block opacity-100 translate-y-0"
            : "hidden opacity-0 -translate-y-10"
        } transition-all duration-500 ease-in-out`}
      >
        <div className="flex gap-2 flex-col pt-2">
          {itemList.map(({ id, link, title }) => (
            <Link key={id} to={link} className="hover:text-white">
              {title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
