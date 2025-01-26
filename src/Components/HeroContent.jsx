import React from "react";
import { LuShieldCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[45%] mt-6 sm:mt-8 md:mt-[10%] lg:mt-0 xl:mt-[-3%] text-black">
      {/* Name and Pronouns */}
      <h1 className="flex flex-wrap items-center text-xl sm:text-2xl lg:text-3xl font-semibold">
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
        <Link to={"/contact"} className="font-thin text-blue-600 ml-1">
          Contact info
        </Link>
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-start items-center space-x-2 sm:space-x-4 mt-4">
        <button className="bg-transparent border border-blue-500 text-blue-500 px-3 py-2 sm:px-4 sm:py-2 rounded-3xl hover:bg-blue-600 hover:text-white transition duration-500 hover:border-black w-[45%] sm:w-[30%] lg:w-[25%]">
          Github
        </button>
        <button className="bg-transparent border border-blue-500 text-blue-500 px-3 py-2 sm:px-4 sm:py-2 rounded-3xl hover:bg-blue-600 hover:text-white transition duration-500 hover:border-black w-[45%] sm:w-[30%] lg:w-[25%]">
          LinkedIn
        </button>
        <button className="bg-transparent border border-blue-500 text-blue-500 px-3 py-2 sm:px-4 sm:py-2 rounded-3xl hover:bg-blue-600 hover:text-white transition duration-500 hover:border-black w-[45%] sm:w-[30%] lg:w-[25%]">
          LeetCode
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
