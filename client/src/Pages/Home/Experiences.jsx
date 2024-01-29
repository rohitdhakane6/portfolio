import React ,{useState} from "react";
// import { useSelector } from "react-redux";
import SectionTitle from "../../Components/SectionTitle.jsx";
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedItemIndex , setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  return (

    <div>
      <SectionTitle title="Experience" />

      <div className="flex py-10 gap-20 flex-col md:flex-row">
        <div className="flex gap-5 md:gap-8 border-l-2 border-[#135e4c82] md:w-1/3 w-full flex-col">
          {experiences.map((experience, index) => (
            <div
            key={index}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-3 -ml-[3px] py-3 
                 ${selectedItemIndex === index
                    ? "text-tertiary  bg-[#1a7f5a31] "
                    : "text-white "
                  } `}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            expedita accusantium nulla ad odio quisquam consequuntur laudantium
            saepe ratione consectetur optio necessitatibus ut, impedit ducimus
            corrupti ullam veniam error non.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
