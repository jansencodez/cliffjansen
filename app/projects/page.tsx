import React from "react";

// Inline SVGs for the project icons
const WebDevIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="text-green-600"
    width="24"
    height="24"
  >
    <path
      d="M12 2v20m8-8l-8 8-8-8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const ECommerceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="text-yellow-500"
    width="24"
    height="24"
  >
    <path
      d="M12 2v20m8-8l-8 8-8-8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const PortfolioIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="text-purple-600"
    width="24"
    height="24"
  >
    <path
      d="M12 2v20m8-8l-8 8-8-8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const projects = [
  {
    name: "Farmus App",
    description: "An Android app providing a platform for farmers and clients.",
    link: "https://github.com/jansencodez/farmus",
    liveLink: "#", // Update with live link once available
    icon: <WebDevIcon />,
  },
  {
    name: "Farmus Backend",
    description:
      "The backend for Farmus app, built with RESTful APIs and MongoDB.",
    link: "https://github.com/jansencodez/farmus-backend",
    liveLink: "#", // Update with live link once available
    icon: <WebDevIcon />,
  },
  {
    name: "Glamora Shop",
    description:
      "A full-stack e-commerce application for selling beauty products.",
    link: "https://github.com/jansencodez/glamora-frontend",
    liveLink: "https://glamora-one.vercel.app/",
    icon: <ECommerceIcon />,
  },
  {
    name: "Promptopia",
    description:
      "An open-source platform where users can share AI prompts and copy prompts.",
    link: "https://github.com/jansencodez/promptopia",
    liveLink: "https://promptopia-two-eta.vercel.app/",
    icon: <WebDevIcon />,
  },
  {
    name: "Weva Technologies",
    description:
      "A tech company project focused on innovation in tech solutions.",
    link: "https://github.com/jansencodez/wevatechnologies",
    liveLink: "https://wevatechnologies.vercel.app/",
    icon: <WebDevIcon />,
  },
  {
    name: "Portfolio",
    description: "My personal portfolio showcasing my work and projects.",
    link: "https://github.com/jansencodez/portfolio",
    liveLink: "#", // You can add your portfolio live link here
    icon: <PortfolioIcon />,
  },
  {
    name: "Eswil School Website",
    description:
      "A school website built to provide information about the institution, courses, and events.",
    link: "https://github.com/jansencodez/eswil",
    liveLink: "https://eswil.vercel.app/",
    icon: <WebDevIcon />,
  },
];

const Projects: React.FC = () => {
  return (
    <section className="container mx-auto py-8 px-4 p-1 rounded-2xl outline outline-1 outline-gray-200">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        My Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-3 rounded-2xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              {project.icon}
              <h2 className="text-2xl font-semibold text-gray-700">
                {project.name}
              </h2>
            </div>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex space-x-4 justify-center items-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white bg-green-500 hover:bg-green-600 transition-colors duration-300 px-4 py-2 rounded-3xl shadow-sm"
              >
                View on GitHub
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 px-4 py-2 rounded-s-3xl shadow-sm"
                >
                  View in Action
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
