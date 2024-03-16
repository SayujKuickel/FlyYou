import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../constants.js";

export default function Projects() {
  return (
    <ul className="container flex flex-col gap-12 md:gap-12 mx-auto my-20">
      {projects.map(({ id, title_en, description_en, image, link }) => (
        <li
          key={id}
          className="flex items-center justify-between mt-8 md:mt-0 gap-1 md:gap-10 flex-col md:flex-row md:even:flex-row-reverse"
        >
          <div className="flex-1 md:py-4 px-2">
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 max-w-[22ch]">
              {title_en}
            </h2>
            <p className="max-w-[64ch] md:text-xl">{description_en}</p>
            {link && (
              <Link
                to={link}
                className="text-blue-600 block w-fit my-3 hover:-translate-y-1 pr-2 py-2 transition-transform "
              >
                Learn More &#8599;
              </Link>
            )}
          </div>

          <div className="flex-1 h-[18rem] rounded-md overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={image}
              alt="hero image"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
