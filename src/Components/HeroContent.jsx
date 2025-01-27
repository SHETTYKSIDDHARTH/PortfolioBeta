import React, { useState } from "react";
import { LuShieldCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const HeroContent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[45%] mt-6 sm:mt-[-5%] md:mt-[-5%] lg:mt-0 xl:mt-[-3%] text-black relative">
      {/* Name and Pronouns */}
      <h1 className="flex flex-wrap items-center text-xl sm:text-2xl lg:text-3xl font-semibold mt-3">
        Siddharth K Shetty
        <span className="ml-2">
          <LuShieldCheck />
        </span>
        <p className="font-thin text-[8px] sm:text-[10px] ml-1">(He/Him)</p>
      </h1>

      {/* About Section */}
      <h3 className="font-normal text-sm sm:text-base lg:text-lg mt-2">
        Undergraduate Engineering Student at SIT, Tumakuru | C++ Enthusiast <br />
        | Exploring Web Development & Building Tomorrow's Solutions
      </h3>

      {/* Location and Contact */}
      <p className="font-thin text-[10px] sm:text-[12px] text-gray-400 mt-2">
        Bengaluru, Karnataka, India
        <span
          onClick={openModal}
          className="font-thin text-blue-600 ml-1 cursor-pointer"
        >
          Contact info
        </span>
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-start items-center gap-2 sm:gap-4 mt-4">
      <a 
  href="https://github.com/SHETTYKSIDDHARTH" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-full xs:w-[48%] sm:w-[30%] lg:w-[25%]"
>
  <button className="bg-transparent border border-blue-500 text-blue-500 px-3 py-2 sm:px-4 sm:py-2 rounded-3xl hover:bg-blue-600 hover:text-white transition duration-500 hover:border-black w-full">
    GitHub
  </button>
</a>

        <a 
  href="https://www.linkedin.com/in/siddharth-k-shetty/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-full xs:w-[48%] sm:w-[30%] lg:w-[25%]"
>
  <button className="bg-transparent border border-blue-500 text-blue-500 px-3 py-2 sm:px-4 sm:py-2 rounded-3xl hover:bg-blue-600 hover:text-white transition duration-500 hover:border-black w-full">
    LinkedIn
  </button>
</a>

<a 
  href="https://leetcode.com/u/Semiconductor1/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-full xs:w-[48%] sm:w-[30%] lg:w-[25%]"
>
  <button className="bg-transparent border border-blue-500 text-blue-500 px-3 py-2 sm:px-4 sm:py-2 rounded-3xl hover:bg-blue-600 hover:text-white transition duration-500 hover:border-black w-full">
    LeetCode
  </button>
</a>

      </div>

      {/* Modal */}
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] bg-white rounded-lg p-6 shadow-lg z-50 transition-all duration-500 ${
          isModalOpen ? "top-[40%]" : "-top-full"
        }`}
        style={{ zIndex: 1050 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition duration-300 hover:cursor-pointer"
          onClick={closeModal}
        >
          <AiOutlineClose size={20} />
        </button>

        {/* Modal Content */}
        <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
        <div className="space-y-4">
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/siddharth-k-shetty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              linkedin.com/in/siddharth-k-shetty
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:shettysiddharth2k05@gmail.com"
              className="text-blue-600 underline"
            >
              shettysiddharth2k05@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Background Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40" // Slightly transparent black using Tailwind's utility
          onClick={closeModal}
        ></div>
      )}
    </div>
  );
};

export default HeroContent;
