import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "PrepVerse",
      description: "A comprehensive campus placement platform built with MERN stack that connects students, alumni, and the Training & Placement department.",
      url: "https://github.com/SHETTYKSIDDHARTH/PrepVerse",
      tech: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      title: "IdEEEas 2k25",
      description: "Event registration website developed for IEEE participants using ReactJS and NodeJS. Provides smooth functionality and responsive design for easy event registration and management.",
      url: "http://ideeeas2k25.s3-website.ap-south-1.amazonaws.com/",
      tech: ["ReactJS", "NodeJS", "AWS"]
    },
    {
      title: "WIE Code 2k24",
      description: "Registration platform for a national level 12-hour hackathon conducted by IEEE SIT Student Branch. Built with ReactJS frontend and NodeJS backend ensuring optimal performance and user experience.",
      url: "https://wiecode2024-25.netlify.app/",
      tech: ["ReactJS", "NodeJS", "Netlify"]
    }
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-16 xl:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 lg:p-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group relative min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[420px] flex flex-col"
              onClick={() => window.open(project.url, '_blank')}
            >
              <div className="flex-1 flex flex-col">
                {/* Project Title */}
                <h3 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-black group-hover:text-blue-500 transition-colors duration-300 mb-2 sm:mb-3 md:mb-4">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Sleek Minimalist Button */}
                <button
                  className="w-full py-2 sm:py-3 md:py-4 bg-transparent border border-gray-300 text-gray-700 text-sm sm:text-base md:text-lg font-light rounded-md hover:border-blue-500 hover:text-blue-500 transition-all duration-300 hover:bg-blue-50 mt-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.url, '_blank');
                  }}
                >
                  View Project
                </button>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;