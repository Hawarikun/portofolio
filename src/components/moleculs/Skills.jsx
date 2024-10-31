import { useState } from "react";
import Icon from "../atoms/Icon";

const SKILLS = [
  {
    icon: "web",
    skillName: "Web Development",
    description:
      "You will receive a customized plan for your fitness journey, and lots of support.",
  },
  {
    icon: "mobile",
    skillName: "Mobile Development",
    description:
      "You will receive a customized plan for your fitness journey, and lots of support.",
  },
  { icon: "web", skillName: "Angular", description: "I love Angular" },
  { icon: "web", skillName: "Svelte", description: "I love Svelte" },
];

// eslint-disable-next-line react/prop-types
function CircleIcon({ name, width, height }) {
  return (
    <div className="inline-block rounded-full ring-2 ring-blue-400 p-4 bg-black bg-opacity-800">
      <Icon name={name} width={width} height={height} colorHex="#FFFFFF" />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function SkillCard({ icon = "react", skillName, description }) {
  return (
    <div className="flex relative justify-center">
      <div className="absolute -top-7 z-10 left-1/2 transform -translate-x-1/2 ">
        <CircleIcon name={icon} width={25} height={25} />
      </div>
      <div className="flex flex-col items-center w-60 h-40 py-12 px-8 rounded-md shadow-lg bg-black bg-opacity-800">
        <h1 className="text-sm font-bold text-white">{skillName}</h1>
        <p className="text-xs text-center mt-2 text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function Skills() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2; // Number of items per page
  const totalPages = Math.ceil(SKILLS.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center gap-x-8 py-12">
      <div className="grid grid-cols-2 gap-4">
        {SKILLS.slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        ).map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            skillName={skill.skillName}
            description={skill.description}
          />
        ))}
      </div>
      <div className=" mt-4">
        {currentPage > 0 && (
          <button onClick={handlePrev} disabled={currentPage === 0}>
            <Icon name="arrowLeft" />
          </button>
        )}
        {currentPage < totalPages - 1 && (
          <button
            className="hover:fill-blue-300"
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
          >
            <Icon name="arrowRight" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Skills;
