import Skills from "../moleculs/Skills";

function Activity() {
  return (
    <div className="flex flex-row gap-x-10">
      <div className="flex flex-col justify-center gap-y-4 w-[45%]">
        <h1 className="text-3xl font-bold ">What I do</h1>
        <p className="text-md">
          Build and maintain websites, frontend dev also have a mentorship
          called MOFON. My motto is Beauty and function in equal measure as
          priority.
        </p>
      </div>
      <Skills />
    </div>
  );
}

export default Activity;
