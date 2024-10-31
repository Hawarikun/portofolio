import CodeCard from "../moleculs/CodeCrard";

export default function CodeSnippet() {
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
