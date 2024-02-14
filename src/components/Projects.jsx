import React from "react";

export default function Projects({ projects }) {
  return (
    <ul className="container flex flex-col gap-12 md:gap-4 mx-auto my-20">
      {projects.map((project) => (
        <li className="grid mx-4 md:mx-auto grid-cols-1 md:grid-cols-2 gap-1 lg:gap-8 items-center ">
          <div className="p-2">
            <h2 className="text-3xl md:text-5xl mb-4 max-w-[22ch]">
              {project.title}
            </h2>
            <p className="max-w-[64ch]">{project.description}</p>
            <p className="text-blue-600 mt-6">Learn More</p>
          </div>

          <img
            className="md:h-64 md:aspect-[10/4]  mx-auto object-cover rounded-b-md"
            src={project.image}
            alt="hero image"
          />
        </li>
      ))}
    </ul>
  );
}
