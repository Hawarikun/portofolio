import Icon from "../atoms/Icon";

// eslint-disable-next-line react/prop-types
export default function CircleIcon({ name, width, height }) {
  return (
    <div className="inline-block rounded-full ring-2 ring-blue-400 p-4 bg-black bg-opacity-800">
      <Icon name={name} width={width} height={height} colorHex="#FFFFFF" />
    </div>
  );
}
