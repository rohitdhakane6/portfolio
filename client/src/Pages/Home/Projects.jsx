import React, { useState } from "react";
// import { useSelector } from "react-redux";
import SectionTitle from "../../Components/SectionTitle";
import { useSelector } from "react-redux";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 flex-col md:flex-row">
        <div className="flex flex-col gap-5 md:gap-8 border-l-2 border-[#135e4c82] md:w-1/3 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 py-3 -ml-[3px]
                 ${
                   selectedItemIndex === index
                     ? "text-tertiary   bg-[#1a7f5a31]"
                     : "text-white"
                 } `}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 md:flex-row flex-col">
          <img
            src={projects[selectedItemIndex].imageUrl}
            alt=""
            className="h-40"
          />
          <div className="flex flex-col gap-5">
            <a href={projects[selectedItemIndex].githubLink} target="_blank" rel="noopener noreferrer">
              <h1 className="text-secondary text-xl">
                {projects[selectedItemIndex].title}
                <i className="ri-external-link-fill text-white ml-1"></i>
              </h1>
            </a>
            <p className="text-white">
              {projects[selectedItemIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
