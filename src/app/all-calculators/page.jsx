import AlphabeticalLinks from "@/components/alphabeticalLink";
import Pagination from "@/components/pagination";
import { Input } from "antd";
import Image from "next/image";
import React from "react";

const CalculatorSection = () => {
  const content = Array.from({ length: 10 }, (_, index) => (
    <div key={index} >
      <p className="text-xl md:text-3xl font-avenir font-extrabold mb-3">All calculators</p>
      <p className="font-avenir font-normal text-base md:text-2xl mb-5">
        Mortgages are some of the biggest commitments you’ll make in your financial life.
        And with all the options, it can be hard to work out what they’ll cost you.
        Our mortgage calculator can help.
      </p>
    </div>
  ));

  return <>{content}</>;
};
function ReviewDetailPage() {
  return (
    <div className="mx-auto w-10/12">
    <div className="my-[50px] mx-[0rem] md:mx-[2.5rem] flex flex-col items-center">
      <p className="text-xl md:text-4xl font-avenir font-semibold mb-4 text-center">All Calculators and tools</p>
      <p className="font-avenir font-normal text-base md:text-2xl text-center ">
        Mortgages are some of the biggest commitments you’ll make in your
        financial life. And with all the options, it can be hard to work out
        what they’ll cost you. Our mortgage calculator can help.
      </p>
      <span className="searchBar md:w-[34rem] my-[3.375rem]" ><Input
      placeholder="Search any calculator"
      prefix={<Image src={'/searchIcon.png'} height={18} width={18} alt=""/>}
      suffix={
        <span className="w-[3.375rem] h-[2.875rem] bg-[#D9D9D9] rounded-sm flex items-center justify-center">
          <Image src={'/rightArrow.png'} height={18} width={18} alt=""/>
        </span>
      }
    /></span>
</div>
<span className="hidden md:block"><AlphabeticalLinks/></span><div className="my-[3.375rem]">
<CalculatorSection />
</div>
<div className="my-[7rem] flex justify-center"><Pagination/></div>
   
  </div>
  );
}

export default ReviewDetailPage;
