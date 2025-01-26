// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, Download } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [menuHeight, setMenuHeight] = useState(0);
//   const menuRef = useRef(null);

//   const navLinks = [
//     { href: '/', label: 'Home' },
//     { href: '/about', label: 'About' },
    
//     { href: '/skill', label: 'Skills' },
//     { href: '/project', label: 'Projects' },
//     { href: '/contact', label: 'Contact' }
//   ];

//   // Calculate menu height dynamically
//   useEffect(() => {
//     if (isMenuOpen && menuRef.current) {
//       setMenuHeight(menuRef.current.scrollHeight); // Set to the actual height of the content
//     } else {
//       setMenuHeight(0); // Collapse the menu
//     }
//   }, [isMenuOpen]);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 border-2 border-white bg-white text-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative py-4 flex items-center justify-between">
//           {/* Logo */}
//           <div className="text-3xl font-bold text-black">
//             <span className="text-purple-500">.</span>dev
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8 items-center">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 className="text-gray-300 hover:text-black transition-colors duration-300 relative group"
//               >
//                 {link.label}
//                 <span
//                   className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"
//                 />
//               </Link>
//             ))}
//             <Link
//               to="/resume"
//               className="flex items-center bg-purple-500 text-black px-4 py-2 rounded-full hover:bg-purple-600 transition-colors duration-300"
//             >
//               <Download className="mr-2 h-4 w-4" />
//               Resume
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-black hover:text-purple-500 transition-colors duration-300 z-50 relative"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu with Line Between Items */}
//       <div
//         className="overflow-hidden transition-all duration-500 ease-in-out"
//         style={{ height: `${menuHeight}px` }}
//       >
//         <div ref={menuRef} className="bg-white text-black">
//           <div className="flex flex-col items-center py-8 space-y-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 className="block text-2xl hover:text-purple-500 transition-colors duration-300 transform hover:scale-110 border-b border-gray-500 py-2"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link
//               to="/resume"
//               className="flex items-center justify-center text-2xl hover:text-purple-500 transition-colors duration-300 transform hover:scale-110 border-b border-gray-500 py-2"
//             >
//               <Download className="mr-4 h-6 w-6" />
//               Resume
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Download } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [menuHeight, setMenuHeight] = useState(0);
//   const menuRef = useRef(null);
//   const location = useLocation(); // To get the current location/path

//   const navLinks = [
//     { href: '/', label: 'Home' },
//     { href: '/about', label: 'About' },
//     { href: '/skill', label: 'Skills' },
//     { href: '/project', label: 'Projects' },
//     { href: '/contact', label: 'Contact' }
//   ];

//   // Calculate menu height dynamically
//   useEffect(() => {
//     if (isMenuOpen && menuRef.current) {
//       setMenuHeight(menuRef.current.scrollHeight); // Set to the actual height of the content
//     } else {
//       setMenuHeight(0); // Collapse the menu
//     }
//   }, [isMenuOpen]);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 border-2 border-black bg-white text-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative py-4 flex items-center justify-between">
//           {/* Logo */}
//           <div className="text-3xl font-bold text-black">
//             <span className="text-blue-500">.</span>dev
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8 items-center">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 className={`text-black  transition-colors duration-300 relative group ${
//                   location.pathname === link.href ? 'text-black' : 'text-slate-400'
//                 }`}
//               >
//                 {link.label}
//                 <span
//                   className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"
//                 />
//               </Link>
//             ))}
//             <Link
//               to="/resume"
//               className="flex items-center bg-white border border-black text-black px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-800"
//             >
//               <Download className="mr-2 h-4 w-4" />
//               Resume
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-black hover:text-purple-500 transition-colors duration-300 z-50 relative"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu with Line Between Items */}
//       <div
//         className="overflow-hidden transition-all duration-500 ease-in-out"
//         style={{ height: `${menuHeight}px` }}
//       >
//         <div ref={menuRef} className="bg-white text-black">
//           <div className="flex flex-col items-center py-8 space-y-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 className={`block text-2xl hover:text-purple-500 transition-colors duration-300 transform hover:scale-110 border-b border-gray-500 py-2 ${
//                   location.pathname === link.href ? 'text-black' : 'text-slate-400'
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link
//               to="/resume"
//               className="flex items-center justify-center text-2xl hover:text-purple-500 transition-colors duration-300 transform hover:scale-110 border-b border-gray-500 py-2"
//             >
//               <Download className="mr-4 h-6 w-6" />
//               Resume
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef(null);

  // Calculate menu height dynamically
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight); // Set to the actual height of the content
    } else {
      setMenuHeight(0); // Collapse the menu
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-2 border-black bg-white text-black overflow-x-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold text-black">
            <span className="text-blue-500">.</span>dev
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-black hover:text-blue-500 transition-colors duration-300">Home</a>
            <a href="#about" className="text-black hover:text-blue-500 transition-colors duration-300">About</a>
            <a href="#skills" className="text-black hover:text-blue-500 transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-black hover:text-blue-500 transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-black hover:text-blue-500 transition-colors duration-300">Contact</a>
            <a href="/resume" className="flex items-center bg-white border border-black text-black px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-800">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
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

      {/* Mobile Menu with Line Between Items */}
      <div className="overflow-hidden transition-all duration-500 ease-in-out" style={{ height: `${menuHeight}px` }}>
        <div ref={menuRef} className="bg-white text-black">
          <div className="flex flex-col items-center py-8 space-y-8">
            <a href="#home" className="block text-2xl hover:text-purple-500 transition-colors duration-300">Home</a>
            <a href="#about" className="block text-2xl hover:text-purple-500 transition-colors duration-300">About</a>
            <a href="#skills" className="block text-2xl hover:text-purple-500 transition-colors duration-300">Skills</a>
            <a href="#projects" className="block text-2xl hover:text-purple-500 transition-colors duration-300">Projects</a>
            <a href="#contact" className="block text-2xl hover:text-purple-500 transition-colors duration-300">Contact</a>
            <a href="/resume" className="flex items-center justify-center text-2xl hover:text-purple-500 transition-colors duration-300">
              <Download className="mr-4 h-6 w-6" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
