import React from "react";

export default function Projects({ projects }) {
  return (
    <ul className="container flex flex-col gap-12 md:gap-4 mx-auto my-20">
      {projects.map((project) => (
        <li className="flex items-center justify-between flex-col md:flex-row">
          <div className="flex-1 py-4 px-2">
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 max-w-[22ch]">
              {project.title}
            </h2>
            <p className="max-w-[64ch]">{project.description}</p>
            <p className="text-blue-600 mt-6">Learn More</p>
          </div>

          <div className="flex-1 h-[18rem] rounded-md overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={project.image}
              alt="hero image"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
