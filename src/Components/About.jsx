import React from 'react';

const About = () => {
  return (
    <section className="bg-white text-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md max-w-full sm:max-w-4xl mx-auto my-10 border border-gray-300 overflow-hidden min-w-full">
      <div className="flex justify-start">
      <h2 className="text-3xl sm:text-3xl md:text-3xl font-semibold mb-4 text-center text-gray-900 inline-block border-b-2 border-blue-300 relative pl-3 group">
  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 w-2.5 h-2.5 rounded-full group-hover:scale-110 group-hover:bg-green-500 transition-all duration-300"></div>
  ABOUT ME
</h2>


</div>

      <p className="text-base sm:text-lg md:text-xl leading-relaxed">
        Hi there! I'm <span className="font-medium text-blue-500">SIDDHARTH K SHETTY</span>, a passionate and curious engineering student who loves turning ideas into reality through technology. Whether it’s coding efficient algorithms, building innovative projects, or exploring new tools, I’m always eager to learn and grow.
      </p>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-4">
        My interests span <span className="font-medium">web development, problem-solving,</span> and emerging technologies like <span className="font-medium">AI</span>. I enjoy creating projects that not only solve real-world problems but also have a lasting impact. Along the way, I’ve gained hands-on experience with tools like C++, Python, and React, and I’m constantly pushing myself to improve.
      </p>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-4">
        I believe in <span className="font-medium">continuous learning</span> and <span className="font-medium">collaboration</span>, striving to make a difference through creativity and innovation.
      </p>
    </section>
  );
};

export default About;
