import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function NavbarButton({ nameRoute, name }) {
  return (
    <li className="px-4 py-2 hover:bg-black hover:bg-opacity-80 hover:text-white hover:rounded-md cursor-pointer">
      <Link to={`/${nameRoute}`}>{name}</Link>{" "}
    </li>
  );
}