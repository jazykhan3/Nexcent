"use client"
import Image from 'next/image';
import React, { ReactNode, useState } from 'react';

interface CustomCollapseProps {
  title: string;
  children: ReactNode;
}

const CustomCollapse: React.FC<CustomCollapseProps> = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="md:w-[56rem] border border-black p-10">
      <div
      className='cursor-pointer pb-2 mb-2 flex justify-between'
        onClick={handleToggleCollapse}
      >
        <h3 className='text-2xl font-medium font-avenir' > {title}</h3>
        <span>{isCollapsed ? <Image src={'/notCollapsed.png'} alt='' width={17} height={9} /> :<Image src={'/collapsed.png'} alt='' width={51} height={51} />}</span>
      </div>
      {!isCollapsed && <div className='text-lg font-normal text-[#263238]'>{children}</div>}
    </div>
  );
};

export default CustomCollapse;
