import Icon from "../atoms/Icon";

export default function Footer() {
  return (
    <div className="flex flex-col items-center border-t-2 border-gray-400 mt-24">
      {/* <div className="text-3xl font-bold my-12">Footer</div> */}
      <div className="text-md font-semibold mt-12">Reach me out</div>
      <div className="flex flex-row justify-center items-center my-8 gap-x-8">
        <a href="https://www.linkedin.com/in/ciptarakanurhisamhawari/">
          <Icon name="linkedIn" />
        </a>
        <a href="https://github.com/Hawarikun">
          <Icon name="github" />
        </a>
        <a href="https://www.instagram.com/">
          <Icon name="instagram" />
        </a>
      </div>
    </div>
  );
}
