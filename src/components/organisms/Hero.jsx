import Avatar from "../atoms/images/Avatar";
import logo from "../../assets/profile.jpg";
import Icon from "../atoms/Icon";
import Skills from "../organisms/Skills";
//

export default function Hero() {
  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-br from-green-700 to-light-blue-500  inline-block text-transparent bg-clip-text">
        <div className="pt-24  tracking-wide mb-24 w-[80%]">
          <h1 className="text-6xl font-extrabold leading-tight tracking-normal">
            Hi Im Hawari, a special human with some ability to love learning and
            working on teamwork.
          </h1>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-x-8 mb-24">
        <Avatar resorce={logo} />
        <div className="flex flex-col gap-y-4 justify-center">
          <h1 className="text-3xl font-bold ">biography</h1>
          <p className="text-md">
            Getting Buff +1 for learning, Buff +2 for documentation and more
            buff on managing team. Exicited on React, UX Research and Agile.
          </p>
        </div>
        <div className="flex flex-col gap-y-4 justify-center xl:w-[50%]">
          <h1 className="text-3xl font-bold ">Lest Connect</h1>
          <div className="flex flex-row gap-x-4 ">
            <Icon name="linkedIn" />
            <Icon name="github" />
            <Icon name="instagram" />
          </div>
        </div>
      </div>
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
    </div>
  );
}
