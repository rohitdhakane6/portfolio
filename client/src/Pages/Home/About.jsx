import React from "react";
import SectionTitle from "../../Components/SectionTitle.jsx";
import { useSelector } from "react-redux";

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const{about}=portfolioData;
  const {lottieURL,description1,description2,skills}=about;

  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center flex-col lg:flex-row">
        <div className="h-[70vh] md:w-1/2">
          <dotlottie-player
            src={lottieURL}
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 lg:w-1/2">
          <p className="text-white">
            {description1 || ""}
          </p>
          <p className="text-white">{description2||""}
          </p>
        </div>
      </div>

      <div className="py-5 ">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I’ve been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10" key={index}>
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
