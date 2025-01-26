import React from "react";
import profile from "../assets/img1.jpg"; // Ensure the image path is correct
import bg from "../assets/bg.png"
const Banner = () => {
  return (
    <div className=" border-2 p-3 relative w-full bg-slate-900 h-[20vh] sm:h-[20vh] md:h-[30vh] lg:h-[35vh] flex flex-col text-black" style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "left",
    }}>
      <div
        className="circle border-4 border-white
         h-[100px] w-[100px] rounded-full absolute bottom-[-20%] left-[3%] sm:h-[70px] sm:w-[70px] sm:bottom-[-15%] sm:left-[-3%] md:h-[150px] md:w-[150px] md:bottom-[-15%] md:left-[3%] lg:h-[200px] lg:w-[200px] lg:bottom-[-15%] lg:left-[2%]"
        style={{
          backgroundImage: `url(${profile})`,
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      ></div>
    </div>
  );
};

export default Banner;
