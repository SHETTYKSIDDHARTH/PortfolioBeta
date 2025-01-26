import React from 'react';

const About = () => {
  return (
    <section className="bg-white text-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md max-w-full sm:max-w-4xl mx-auto my-10 border border-gray-300 overflow-hidden min-w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-center text-gray-900">About Me</h2>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed">
        Hi there! I'm <span className="font-medium text-blue-700">SIDDHARTH K SHETTY</span>, a passionate and curious engineering student who loves turning ideas into reality through technology. Whether it’s coding efficient algorithms, building innovative projects, or exploring new tools, I’m always eager to learn and grow.
      </p>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-4">
        My interests span <span className="font-medium">web development, problem-solving,</span> and emerging technologies like <span className="font-medium">AI</span> and <span className="font-medium">IoT</span>. I enjoy creating projects that not only solve real-world problems but also have a lasting impact. Along the way, I’ve gained hands-on experience with tools like <span className="font-medium">C++, Python,</span> and <span className="font-medium">React</span>, and I’m constantly pushing myself to improve.
      </p>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-4">
        I believe in <span className="font-medium">continuous learning</span> and <span className="font-medium">collaboration</span>, striving to make a difference through creativity and innovation.
      </p>
    </section>
  );
};

export default About;
