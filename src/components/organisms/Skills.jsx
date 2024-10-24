import { useState } from "react";
import SkillCard from "../moleculs/SkillCard";
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

export default function Skills() {
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
