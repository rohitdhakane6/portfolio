import React from "react";
import SectionTitle from "../../Components/SectionTitle.jsx";

function About() {
  const skills = ["node", "react","node", "react","node", "react","node", "react","node", "react"];
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center flex-col lg:flex-row">
        <div className="h-[70vh] md:w-1/2">
          <dotlottie-player
            src="https://lottie.host/fcaa8e79-5648-43f3-a741-bc2dba4a53e6/8KeAYDDMZQ.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 lg:w-1/2">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            neque assumenda dolores vitae commodi ducimus fuga nam corrupti
            nihil fugit, nobis, consectetur impedit laboriosam est doloremque
            tenetur harum ipsa aut!
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            dignissimos autem nihil est. Nesciunt perspiciatis reiciendis,
            maiores molestiae sit exercitationem quo enim quisquam beatae optio
            consequatur dignissimos et tenetur quibusdam!
          </p>
        </div>
      </div>

      <div className="py-5 ">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I’ve been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
