import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const { portfolioData } = useSelector((state) => state.root);
  console.log(portfolioData);
  const{intro}=portfolioData;
  const{firstName,lastName ,caption,description,welcomeText}=intro;

  return (
    <div className="h-[90vh] bg-primary flex flex-col items-start justify-center gap-8 md:py-10 py-5">
      <h1 className="text-white">{welcomeText || ""}</h1>
      <h1 className="md:text-5xl text-3xl text-secondary font-semibold">
        {firstName || ""}{lastName || ""}
      </h1>
      <h1 className="md:text-4xl text-2xl text-white font-semibold">
        {caption || ""}
      </h1>
      <p className="text-white md:w-2/3">{description || ""}</p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
