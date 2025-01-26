import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';


const App = () => {
  return (
    <>
    <Router>
      <div className="flex flex-col items-center min-h-[100vh] w-[100vw]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/skill" element={<div>Services Page</div>} />
          <Route path="/projects" element={<div>Profile Page</div>} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;
