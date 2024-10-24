// eslint-disable-next-line react/prop-types
export default function ImageTile({ resorce }) {
  return (
    <div className="container flex items-center justify-center bg-black bg-opacity-90 pt-16 px-16 w-[50%] h-[275px]">
      <img
        className="object-cover object-top w-full h-full"
        src={`${resorce}`}
        alt=""
      />
    </div>
  );
}
