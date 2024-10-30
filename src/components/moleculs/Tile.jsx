import ImageTile from "../atoms/images/ImageTile";
import TextTile from "../atoms/TextTile";

// eslint-disable-next-line react/prop-types
export default function Tile({ img, type, title, description }) {
  return (
    <div className="flex flex-row gap-x-6 cursor-pointer">
      <ImageTile resorce={img} />
      <TextTile type={type} title={title} description={description} />
    </div>
  );
}
