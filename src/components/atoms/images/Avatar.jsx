// eslint-disable-next-line react/prop-types
export default function Avatar({ resorce }) {
  return (
    <img
      className="inline-block  rounded-full ring-4 ring-blue-400 bg-slate-200 h-2/12 w-2/12 bg-black bg-opacity-80"
      src={`${resorce}`}
      alt=""
    />
  );
}
