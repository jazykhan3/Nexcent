import React from "react";
import "./index.css";
function Hero() {
  return (
      <div className="w-4/5 flex flex-col gap-[2rem] items-center md:items-start justify-center md:justify-start  mx-auto pb-[4rem] pt-[14.25rem]">
        <p className="md:w-[48rem] text-center   font-medium text-3xl md:text-6xl">
        Start your journey to money freedom        </p>
        <p className="md:w-[48rem] text-center  text-[#263238] text-base font-normal">
        Check out our money calculator that can help you save money and help you reach your financial problems
        </p>
        <button
          style={{ borderRadius: 50 }}
          className="text-black text-base border-radius-50 py-3 px-8 bg-white "
        >
          Read More
        </button>
      </div>
  );
}

export default Hero;
