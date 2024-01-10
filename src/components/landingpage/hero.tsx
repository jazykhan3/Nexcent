"use client"
import React from "react";
import "./index.css";
import { Input } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
function Hero() {
  const router = useRouter();
  return (
      <div className="w-4/5 flex flex-col gap-[2rem] items-center  justify-center mx-auto pb-[3rem] pt-[1.188rem] md:pt-[5.188rem]">
        <p className="font-lato md:w-[41rem] text-center   font-bold text-3xl md:text-[4rem] leading-[4.75rem]">
        Start your journey to money freedom        </p>
        <p className="font-avenir md:w-[41rem] text-center  text-[#263238] text-2xl font-normal">
        Check out our money calculator that can help you save money and help you reach your financial problems
        </p>
       <span className="searchBar md:w-[34rem]" ><Input
      placeholder="Search any calculator"
      prefix={<Image src={'/searchIcon.png'} height={18} width={18} alt=""/>}
      suffix={
        <span className="w-[3.375rem] h-[2.875rem] bg-[#D9D9D9] rounded-sm flex items-center justify-center">
          <Image src={'/rightArrow.png'} height={18} width={18} alt=""/>
        </span>
      }
    /></span>
    <p className="font-avenir md:w-[41rem] text-center  text-[#263238] text-2xl font-normal flex items-center justify-center gap-[1.25rem] cursor-pointer" onClick={()=>{router.push('/mortgage-calculator')}}> Check all our money tools <Image src={'/rightArrow.png'} height={16} width={16} alt=""/>
</p>
<p className="font-avenir md:w-[41rem] text-center  text-[#263238] text-lg font-normal flex items-center justify-center gap-[3px]"><span className="font-avenir text-[#263238] text-lg font-extrabold">ProTip!</span> Check your net-worth with our Networth Calculator.</p>
      </div>
  );
}

export default Hero;
