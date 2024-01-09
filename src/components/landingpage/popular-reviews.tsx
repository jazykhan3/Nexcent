"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Review {
  imageSrc: string;
  title: string;
  content: string;
}
const ReviewCard: React.FC<Review> = ({ imageSrc, title, content }) => (
  <div className=" md:w-[22.75rem] flex flex-col items-center border border-solid border-[#25314640]">
    <Image alt="" src={imageSrc} height={280} width={400} />
   <p className="text-[#000000] my-2 font-medium text-base">
      {title}
    </p>
    <p className="font-avenir px-3 text-[#263238] text-sm font-normal my-2">
      {content}
    </p>
  </div>
);

const PopularReviews: React.FC = () => {
  const router = useRouter();
  const reviews: Review[] = [
    {
      imageSrc: "/blog1.png",
      title: "Managing your money with a budget",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imageSrc: "/blog2.png",
      title: "Managing your money with a budget",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        imageSrc: "/blog3.png",
        title: "Managing your money with a budget",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      }
  ];

  return (
    <div className="w-10/12 mx-auto flex items-center flex-col mb-20">
      <p className="text-center  text-4xl font-medium">
      Check out our feature blog post      </p>
      <p className="text-base font-normal text-center md:w-[40rem] mt-[1rem]">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>

      <div className="my-10 flex flex-wrap gap-[30px] justify-between">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      <button
          className="text-white rounded text-xl font-normal font-avenir py-3 px-8 bg-black "
        >
          Read More Blog Posts
        </button>
    </div>
  );
};

export default PopularReviews;
