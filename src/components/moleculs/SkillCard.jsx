import CircleIcon from "../atoms/CircleIcon";

// eslint-disable-next-line react/prop-types
export default function SkillCard({ icon = "react", skillName, description }) {
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
