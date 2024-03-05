import React from "react";

export default function Features({ features }) {
  return (
    <ul className="mt-10 flex flex-wrap gap-10 justify-between">
      {features.map((item) => (
        <li
          key={item.id}
          className="lg:w-[38rem] p-4 md:p-8 rounded-md relative"
        >
          <p className="md:absolute z-10 top-2 left-1 opacity-30 flex flex-col md:text-center">
            <span className="text-4xl font-semibold">Step</span>
            <span className="text-7xl font-bold  -translate-y-2">
              {item.id < 10 ? `0${item.id}` : item.id}
            </span>
          </p>
          <div className=" md:ml-24 relative">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 opacity-95">
              {item.title}
            </h2>
            <p className="text-base md:text-xl text-[#F9FAFBaa]">{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
