// eslint-disable-next-line react/prop-types
export default function TextTile({ type, title, description }) {
  const types = {
    web: "Web Development",
    design: "Design",
    mobile: "Mobile App Development",
  };

  return (
    <div className="flex flex-col gap-y-6 py-4">
      <p className="text-md font-bold ">{types[type]}</p>
      <p className="text-3xl font-extrabold ">{title}</p>
      <p className="text-md">{description}</p>
    </div>
  );
}
