import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Track active section
  const menuRef = useRef(null);

  // Section refs
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Sections object to match active state
  const sections = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  // IntersectionObserver to track which section is in view
  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section based on id
        }
      });
    }, options);

    Object.values(sections).forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => {
      // Clean up observer when component unmounts
      Object.values(sections).forEach((sectionRef) => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      });
    };
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-black overflow-x-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold text-black">
            <span className="text-blue-500 name">.</span><h4 className="inline text-[25px]">S I D</h4>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-black transition-colors duration-300 ${
                  activeSection === link.href.slice(1) ? 'text-blue-500' : 'text-gray-500'
                }`}
                onClick={(e) => {
                  setActiveSection(link.href.slice(1));
                  e.preventDefault();
                  document.querySelector(link.href).scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                    activeSection === link.href.slice(1) ? 'bg-blue-500 w-full' : 'bg-transparent'
                  }`}
                />
              </a>
            ))}
            {/* Uncomment if you want to add Resume button */}
            {/* <a href="/resume" className="flex items-center bg-white border border-black text-black px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-800">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a> */}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-purple-500 transition-colors duration-300 z-50 relative"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="overflow-hidden transition-all duration-500 ease-in-out" style={{ height: `${isMenuOpen ? 'auto' : 0}` }}>
        <div ref={menuRef} className="bg-white text-black">
          <div className="flex flex-col items-center py-8 space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block text-2xl hover:text-purple-500 transition-colors duration-300 transform hover:scale-110 border-b border-gray-500 py-2 ${
                  activeSection === link.href.slice(1) ? 'text-blue-500' : 'text-gray-500'
                }`}
                onClick={(e) => {
                  setActiveSection(link.href.slice(1));
                  e.preventDefault();
                  document.querySelector(link.href).scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {link.label}
              </a>
            ))}
            {/* Uncomment if you want to add Resume button */}
            {/* <a href="/resume" className="flex items-center justify-center text-2xl hover:text-purple-500 transition-colors duration-300 transform hover:scale-110 border-b border-gray-500 py-2">
              <Download className="mr-4 h-6 w-6" />
              Resume
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
