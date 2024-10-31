import NavbarButton from "../atoms/buttons/Navbarbutton";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white  w-full">
      <div className="container border-b-2 py-4 ">
        <div className="flex items-center justify-between ">
          <div className="hidden md:block ">
            <Link to={"/"}>
              <h1 className="text-xl font-semibold cursor-pointer">Hawari</h1>
            </Link>
          </div>
          <ul className="hidden space-x-12 text-md font-medium md:flex ">
            <NavbarButton nameRoute={""} name={"Home"} />
            <NavbarButton nameRoute={"portofolio"} name={"Portofolio"} />
            <NavbarButton nameRoute={"codeSnippet"} name={"CodeSnippet"} />
            {/* <NavbarButton nameRoute={""} name={"Aboute"} /> */}
          </ul>
          <div className="md:hidden">
            <button
              type="button"
              className="block text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
