import Icon from "../atoms/Icon";

// eslint-disable-next-line react/prop-types
function CodeCard({ title, description, icons, stars }) {
  return (
    <div className="flex flex-col items-start w-full py-12 px-8 rounded-2xl shadow-lg bg-black bg-opacity-80  hover:shadow-xl hover:bg-gray-800 cursor-pointer ">
      <h1 className="text-3xl font-medium text-white">{title}</h1>
      <p className="text-sm text-start mt-8 line-clamp-2 text-gray-400">
        {description}
      </p>
      <div className="flex flex-row items-center justify-between w-full mt-12">
        <div className="flex flex-row gap-3">
          {/* eslint-disable-next-line react/prop-types */}
          {icons.map((icon, index) => (
            <div
              key={index}
              className="p-2 rounded-md shadow-lg bg-white cursor-pointer"
            >
              <Icon name={icon} />
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-3 items-center">
          <Icon name="star" />
          <p className="text-base font-extralight text-white">{stars} Stars</p>
        </div>
      </div>
    </div>
  );
}

function CodeSnippet() {
  const codes = [
    {
      title: "React",
      description:
        "React is a JavaScript library for building user interfaces.",
      icons: ["react"],
      stars: 100,
    },
    {
      title: "React",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quia laborum, veniam repellat ipsam amet distinctio error eos mollitia maiores, ab totam! Eius aut laboriosam consequuntur delectus magnam. Magnam, quas nulla harum animi omnis adipisci fugit culpa excepturi nihil saepe molestias, voluptates quos sit asperiores.",
      icons: ["react", "dart"],
      stars: 100,
    },
  ];
  return (
    <>
      <div className=" grid grid-cols-2 gap-12 my-8">
        {codes.map((code, index) => (
          <CodeCard key={index} {...code} />
        ))}
      </div>
    </>
  );
}

export default CodeSnippet;
