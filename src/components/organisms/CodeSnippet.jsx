import { useState, useEffect } from "react";
import Icon from "../atoms/Icon";

// eslint-disable-next-line react/prop-types
function CodeCard({ title, description, icons, stars, link }) {
  return (
    <a href={link}>
      <div className="flex flex-col items-start w-full py-12 px-8 rounded-2xl shadow-lg bg-black bg-opacity-80 hover:shadow-xl hover:bg-gray-800 cursor-pointer">
        <h1 className="text-3xl font-medium text-white">{title}</h1>
        <p className="text-sm text-start mt-8 line-clamp-2 text-gray-400">
          {description || "No description available"}
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
            <p className="text-base font-extralight text-white">
              {stars} Stars
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

// eslint-disable-next-line react/prop-types
function CodeSnippet({ limit = null }) {
  const [reposData, setReposData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReposWithReadme = async () => {
      try {
        const reposResponse = await fetch(
          "https://api.github.com/users/hawarikun/repos",
          {
            headers: {
              "Content-Type": "application/json",
              "X-GitHub-Api-Version": "2022-11-28",
              // Authorization: `Bearer YOUR_ACCESS_TOKEN`,
            },
          }
        );
        const reposResult = await reposResponse.json();

        // Fetch each README for the repositories
        const reposWithReadme = await Promise.all(
          reposResult.map(async (repo) => {
            try {
              const readmeResponse = await fetch(
                `https://api.github.com/repos/${repo.owner.login}/${repo.name}/contents/README.md`,
                {
                  headers: {
                    "Content-Type": "application/json",
                    "X-GitHub-Api-Version": "2022-11-28",
                    // Authorization: `Bearer YOUR_ACCESS_TOKEN`,
                  },
                }
              );
              const readmeResult = await readmeResponse.json();

              // Decode the base64 content if README exists
              const description = readmeResult.content
                ? atob(readmeResult.content)
                : repo.description || "No description available";

              return { ...repo, description };
            } catch {
              // If README fetch fails, fall back to original description
              return {
                ...repo,
                description: repo.description || "No description available",
              };
            }
          })
        );

        setReposData(reposWithReadme);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchReposWithReadme();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-12">
      {loading ? (
        <p>Loading...</p>
      ) : (
        reposData
          .slice(0, limit !== null ? limit : reposData.length)
          .map((repo, index) => (
            <CodeCard
              key={index}
              title={repo.name}
              description={repo.description}
              icons={repo.topics || []}
              stars={repo.stargazers_count}
              link={repo.html_url}
            />
          ))
      )}
    </div>
  );
}

export default CodeSnippet;
