import Avatar from "../atoms/images/Avatar";
import logo from "../../assets/profile.jpg";
import Icon from "../atoms/Icon";

export default function Hero() {
  const downloadCV = () => {
    // using Java Script method to get PDF file
    fetch("Ciptaraka Nurhisam Hawari - CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV.pdf";
        alink.click();
      });
    });
  };

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
      <div className="flex flex-row justify-between gap-x-8 mb-16">
        <Avatar resorce={logo} />
        <div className="flex flex-col gap-y-8 justify-center">
          <h1 className="text-3xl font-bold ">biography</h1>
          <p className="text-md">
            Getting Buff +1 for learning, Buff +2 for documentation and more
            buff on managing team. Exicited on React, UX Research and Agile.
          </p>
        </div>
        <div className="flex flex-col gap-y-8 justify-center xl:w-[50%]">
          <h1 className="text-3xl font-bold ">Lest Connect</h1>
          <div className="flex flex-row gap-x-4 ">
            <a href="https://www.linkedin.com/in/ciptarakanurhisamhawari/">
              <Icon name="linkedIn" />
            </a>
            <a href="https://github.com/Hawarikun">
              <Icon name="github" />
            </a>
            {/* <a href="https://www.instagram.com/"> */}
            <button onClick={downloadCV}>
              <Icon name="cv" />
            </button>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
