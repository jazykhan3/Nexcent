import { Input } from "antd";
import React from "react";

function EmaiForm() {
  return (
    <div className="my-[5.50rem] md:w-[40rem] mx-3 md:mx-auto">
      <div className="h-3 bg-black"></div>{" "}
      <div className=" p-[2rem] md:p-[3.75rem] border border-black  flex items-center flex-col gap-[1.25rem]">
        {" "}
        <p className="font-avenir md:w-[33rem] text-center text-[#090909]  font-medium text-xl md:text-3xl md:text-4xl md:leading-[4.75rem]">
          Sign up for our newsletter{" "}
        </p>
        <p className="font-avenir md:w-[33rem] md:text-center  text-[#090909] text-base md:text-xl font-normal">
          If you want relevant updates occasionally, sign up for the private
          newsletter. Your email is never shared.{" "}
        </p>
        <span className="searchBarEmailForm md:w-[34rem]">
          <Input
            placeholder="Enter your email..."
            suffix={
              <span className="w-[8.375rem] h-[3.375rem] bg-black text-white text-xl font-extrabold rounded-sm m-0 flex items-center justify-center">
                Sign up{" "}
              </span>
            }
          />
        </span>
        <p className="md:w-[34rem] text-left  text-black text-sm font-normal ">
          By subscribing you agree to with our Privacy Policy and provide
          consent to receive updates from our company.
        </p>
      </div>
    </div>
  );
}

export default EmaiForm;
