import React from "react";

// Inline SVGs for the icons (unchanged)
const WebDevelopmentIcon = () => (
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

const MobileDevelopmentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="text-blue-600"
    width="24"
    height="24"
  >
    <path
      d="M17 2H7a2 2 0 00-2 2v18a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const PythonIcon = () => (
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
      d="M16 2H8a2 2 0 00-2 2v4a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zM16 16H8a2 2 0 00-2 2v4a2 2 0 002 2h8a2 2 0 002-2v-4a2 2 0 00-2-2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const ProblemSolvingIcon = () => (
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

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="text-blue-600"
    width="24"
    height="24"
  >
    <path
      d="M5 12h14M12 5l7 7-7 7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

// The About Me page component
const About: React.FC = () => {
  return (
    <section className="container mx-auto py-12 px-6 outline outline-1 outline-gray-100 rounded-2xl">
      <h1 className="text-4xl font-semibold text-center text-gray-900 mb-8">
        About Me
      </h1>
      <p className="text-lg text-gray-500 leading-relaxed text-center max-w-3xl mx-auto mb-8">
        Hello! I&apos;m a passionate developer with expertise in the MERN stack,
        Python, FastAPI, and mobile development. I specialize in creating
        intuitive, high-performance applications designed to solve real-world
        problems. Whether it&apos;s web development or mobile applications,
        I&apos;m committed to delivering user-friendly solutions that make an
        impact.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
        <ul className="space-y-6">
          <li className="flex items-center">
            <WebDevelopmentIcon />
            <span className="text-gray-500 text-lg ml-5">
              <strong>Web Development:</strong> React, Next.js, MongoDB,
              Express, Node.js
            </span>
          </li>
          <li className="flex items-center">
            <MobileDevelopmentIcon />
            <span className="text-gray-500 text-lg ml-5">
              <strong>Mobile Development:</strong> React Native, Expo
            </span>
          </li>
          <li className="flex items-center">
            <PythonIcon />
            <span className="text-gray-500 text-lg ml-5">
              <strong>Backend Development:</strong> Python, FastAPI, MongoDB,
              Node js, Express, RESTful APIs
            </span>
          </li>
          <li className="flex items-center">
            <ProblemSolvingIcon />
            <span className="text-gray-500 text-lg ml-5">
              <strong>Problem Solving:</strong> Building systems that bridge
              gaps between technology and real-world challenges.
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-6">My Approach</h2>
        <p className="text-gray-500 text-lg">
          I believe that great software is built with collaboration, creativity,
          and a deep understanding of the user&apos;s needs. My approach to
          development is simple: focus on the problem at hand, iterate quickly,
          and always aim for clean, maintainable code. With every project, I
          seek to learn, adapt, and grow.
        </p>
      </div>

      {/* View My Projects/Work Link */}
      <div className="mt-12 text-center p-2 rounded-2xl outline outline-1 outline-gray-100">
        <a
          href="/projects"
          className="inline-flex items-center text-blue-600 text-xl font-semibold hover:text-blue-700 transition-colors duration-300"
        >
          <span className="mr-2">View My Projects/Work</span>
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
};

export default About;
