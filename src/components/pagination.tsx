import Image from 'next/image';
import React from 'react';

const Pagination = () => {
  const totalPages = 9; // Set the total number of pages here
  const activePage = 1; // Set the currently active page here

  return (
    <div className="flex ">
      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index}
          className={`w-9 h-10 font-normal font-avenir text-2xl flex items-center justify-center border border-[#121413] ${
            index + 1 === activePage
              ? 'bg-black text-white' // Active page style
              : 'text-black '
          }`}
        >
          {index + 1}
        </div>
      ))}
       <div className="w-9 h-10 flex items-center justify-center border border-[#121413] ">
        ...
      </div>
      <div className="w-9 h-10 flex items-center justify-center border border-[#121413] ">
        <Image src="/doubleRight.png"  height={24} width={24} alt=''/>
      </div>
    </div>
  );
};

export default Pagination;
