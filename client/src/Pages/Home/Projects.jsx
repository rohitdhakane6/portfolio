import React, { useState } from "react";
// import { useSelector } from "react-redux";
import SectionTitle from "../../Components/SectionTitle";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  // const { portfolioData } = useSelector((state) => state.root);
  // const { projects } = portfolioData;

  const projects = [
    {
      technologies: [],

      title: "SHEYPIZZA",
      image: "https://sheysathya2.netlify.app/pizzas.svg",
      description:
        "An ecommerce application developed using react , node , redux and mongodb",
      link: "/",
    },
    {
      technologies: [],

      title: "SHEYSHOP",
      image: "https://sheysathya2.netlify.app/ecommerce.svg",
      description:
        "An ecommerce application developed using react , node , redux and mongodb",
      link: "/",
    },
    {
      technologies: [],

      title: "SHEYROOMS",
      image: "https://sheysathya2.netlify.app/hotels.svg",
      description:
        "An ecommerce application developed using react , node , redux and mongodb",
      link: "/",
    },
    {
      technologies: [],

      title: "SHEYCARS",
      image: "https://sheysathya2.netlify.app/cars.svg",
      description:
        "An ecommerce application developed using react , node , redux and mongodb",
      link: "/",
    },
    {
      technologies: [],

      title: "SHEYJOBS",
      image: "https://sheysathya2.netlify.app/jobs.svg",
      description:
        "An ecommerce application developed using react , node , redux and mongodb",
      link: "/",
    },
    {
      technologies: [],

      title: "SHEYGRAM",
      image: "https://sheysathya2.netlify.app/socialmedia.svg",
      description:
        "An ecommerce application developed using react , node , redux and mongodb",
      link: "/",
    },
  ];

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 flex-col md:flex-row">
        <div className="flex flex-col gap-5 md:gap-8 border-l-2 border-[#135e4c82] md:w-1/3 w-full">
          {projects.map((project, index) => (
            <div
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
            src={projects[selectedItemIndex].image}
            alt=""
            className="h-60 w-72"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {projects[selectedItemIndex].title}
            </h1>
            <p className="text-white">
              {projects[selectedItemIndex].description}
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              expedita accusantium nulla ad odio quisquam consequuntur
              laudantium saepe ratione consectetur optio necessitatibus ut,
              impedit ducimus corrupti ullam veniam error non.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
