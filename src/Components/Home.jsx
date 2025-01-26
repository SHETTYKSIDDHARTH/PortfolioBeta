import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="mt-25 w-full max-w-screen-lg mx-auto h-fit text-black border-2 overflow-x-hidden px-4 py-2 sm:px-4 bg-white rounded-sm mb-2.5"> 
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
