import React from "react";
import Image from "next/image";

// Inline SVG for the About Link (Right Arrow)
const AboutIcon = () => (
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
      d="M5 12h14m0 0l-6-6m6 6l-6 6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

// Inline SVG for the Contact Me Link (Phone Icon)
const PhoneIcon = () => (
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
      d="M3 6.75V17.25C3 18.6642 4.33579 20 5.75 20H18.25C19.6642 20 21 18.6642 21 17.25V6.75C21 5.33579 19.6642 4 18.25 4H5.75C4.33579 4 3 5.33579 3 6.75Z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M3 9L12 14L21 9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const Home: React.FC = () => {
  return (
    <section className="text-center py-16 px-4 rounded-3xl outline outline-1 outline-gray-100">
      <div className="max-w-3xl mx-auto p-4 rounded-3xl outline outline-1 outline-gray-200">
        {/* Profile Picture */}
        <div className="mb-8">
          <Image
            src="/images/profile.png"
            alt="Nyamwe Cliff Jansen"
            width={150}
            height={150}
            className="rounded-full mx-auto border-4 border-gray-700 shadow-lg"
          />
        </div>

        {/* Introduction */}
        <h1 className="text-4xl font-bold mb-4 text-white">
          Hi, I am Nyamwe Cliff Jansen
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          A passionate Software Developer focused on building seamless and
          impactful digital experiences across web and mobile platforms.
        </p>

        {/* Links */}
        <div className="mt-6">
          {/* About Link */}
          <a
            href="/about"
            className="flex items-center justify-center mr-4 bg-gray-700 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-600 hover:scale-105 transition-transform duration-300 outline outline-1 outline-gray-50"
          >
            <AboutIcon />
            About Me
          </a>
          {/* Contact Button */}
          <a
            href="/contact"
            className="mt-6 flex items-center justify-center bg-gray-700 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-600 hover:scale-105 transition-transform duration-300 outline outline-1 outline-gray-50"
          >
            <PhoneIcon />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
