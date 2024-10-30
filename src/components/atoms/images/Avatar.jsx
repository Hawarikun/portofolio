// eslint-disable-next-line react/prop-types
export default function Avatar({ resorce }) {
  return (
    <div className="inline-block overflow-hidden ring-4 ring-blue-400 bg-slate-200 w-96 h-60  rounded-full bg-black bg-opacity-80 ">
      <img
        className="object-cover object-top w-full h-full"
        src={`${resorce}`}
        alt=""
      />
    </div>
  );
}
