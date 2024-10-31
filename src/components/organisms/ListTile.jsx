import Tile from "../moleculs/Tile";

const projects = [
  {
    img: "https://picsum.photos/1280/720",
    type: "web",
    title: "Bolder Landingpage",
    description:
      "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
  },
  {
    img: "https://picsum.photos/300/300",
    type: "web",
    title: "Bolder Landingpage",
    description:
      "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
  },
];

export default function ListTile() {
  const limit = 2;

  return (
    <>
      <div className="flex flex-col gap-y-8">
        {projects.slice(0, limit).map((project, index) => (
          <Tile
            key={index}
            img={project.img}
            type={project.type}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </>
  );
}
