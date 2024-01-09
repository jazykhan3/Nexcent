import Image from "next/image";
import React from "react";
interface FeatureItemProps {
    iconSrc: string;
    text: string;
  }
const FeatureItem = ({ iconSrc, text }: FeatureItemProps) => (
  <div className="w-[15rem] flex flex-col items-center gap-[1.25rem]">
  
      <Image width={107} height={31} src={iconSrc} alt={`Feature icon for ${text}`} />
    <p className="font-avenir text-[#263238] text-center text-sm font-normal">{text}</p>
  </div>
);

function FeaturesSection() {
  const features = [
    { iconSrc: "/spotify-logo.png", text: "“Our membership management software provides full automation”" },
    { iconSrc: "/eNewsLogo.png", text: "“Our membership management software provides full automation”" },
    { iconSrc: "/newsAbcLogo.png", text: "“Our membership management software provides full automation”" },
    { iconSrc: "/spotify-logo.png", text: "“Our membership management software provides full automation”" },
  
  ];

  return (
    <div className="w-5/5 md:w-4/5 px-4 md:px-0 mx-auto my-[1rem] gap-[20px] md:gap-[0px] flex justify-center md:justify-between flex-wrap">
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </div>
  );
}

export default FeaturesSection;
