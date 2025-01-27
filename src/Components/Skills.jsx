import React, { useEffect, useState } from 'react';
import reactIcon from '../assets/reactjs-line.svg';
import htmlIcon from '../assets/html5-fill.svg';
import cssIcon from '../assets/css3-fill.svg';
import jsIcon from '../assets/javascript-fill.svg';
import cppIcon from '../assets/cpp.svg';
import gitIcon from '../assets/git.svg';
import githubIcon from '../assets/github-fill.svg';
import tailwindIcon from '../assets/tailwind-css-fill.svg';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`skills min-w-full h-fit border-b mb-11 p-8 bg-white shadow-md rounded-lg transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} max-w-full sm:max-w-4xl mx-auto my-10 border border-gray-300`}
    >
      <h2 className="text-3xl sm:text-3xl md:text-3xl font-semibold mb-8 text-center text-gray-900 inline-block border-b-2 border-blue-300 relative pl-3 group">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 w-2.5 h-2.5 rounded-full group-hover:scale-110 group-hover:bg-green-500 transition-all duration-300"></div>
        SKILLS
      </h2>

      {/* Languages Section */}
      <div className="Languages mb-8">
        <h2 className="text-xl font-semibold text-start text-blue-500 mb-6">Languages</h2>
        <div className="flex justify-around space-x-6">
          <div className="flex flex-col items-center group">
            <img
              src={htmlIcon}
              alt="HTML5"
              className="w-14 h-14 transform transition duration-300 group-hover:scale-110 group-hover:rounded-full"
            />
            <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-opacity duration-300">
              HTML
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={cssIcon}
              alt="CSS3"
              className="w-14 h-14 transform transition duration-300 group-hover:scale-110 group-hover:rounded-full"
            />
            <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-opacity duration-300">
              CSS
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={jsIcon}
              alt="JavaScript"
              className="w-14 h-14 transform transition duration-300 group-hover:scale-110 group-hover:rounded-full"
            />
            <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-opacity duration-300">
              JavaScript
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={cppIcon}
              alt="C++"
              className="w-14 h-14 transform transition duration-300 group-hover:scale-110 group-hover:rounded-full"
            />
            <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-opacity duration-300">
              C++
            </span>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="Tools">
        <h2 className="text-xl font-semibold text-start text-blue-500 mb-6">Tools & Libraries</h2>
        <div className="flex justify-around space-x-6">
          <div className="flex flex-col items-center group">
            <img
              src={reactIcon}
              alt="React"
              className="w-14 h-14 transform transition duration-300 group-hover:scale-110 group-hover:rounded-full"
            />
            <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-opacity duration-300">
              React
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={gitIcon}
              alt="Git"
              className="w-14 h-14 transform transition duration-300 group-hover:scale-110 group-hover:rounded-full"
            />
            <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-opacity duration-300">
              Git
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-14 h-14 transform transition duration-300 group-hover:scale-110 group-hover:rounded-full"
            />
            <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-opacity duration-300">
              GitHub
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={tailwindIcon}
              alt="Tailwind CSS"
              className="w-14 h-14 transform transition duration-300 group-hover:scale-110 group-hover:rounded-full"
            />
            <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-opacity duration-300">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
