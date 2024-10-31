import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SeeMore({ path }) {
  return (
    <Link to={`/${path}`}>
      <button className="flex bg-black bg-opacity-90 border-2 border-transparent hover:border-black text-white hover:bg-transparent hover:text-black  font-bold py-2 px-4 rounded-lg mb-8 mt-8">
        See More
      </button>
    </Link>
  );
}
