"use client";
import Image from "next/image";
import React, { useReducer, useState } from "react";
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Input, Space } from 'antd';
import { useRouter } from "next/navigation";
import './index.css'

class MenuItem {
  label: React.ReactNode;
  key: string;

  constructor(label: React.ReactNode, key: string) {
    this.label = label;
    this.key = key;
  }
}

function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const items: MenuProps['items'] = [
    new MenuItem(<a href="https://www.antgroup.com">1st menu item</a>, '0'),
    new MenuItem(<a href="https://www.aliyun.com">2nd menu item</a>, '1'),
    { type: 'divider' },
    new MenuItem('3rd menu item', '3'),
  ];

  const dropdowns = [
    { text: 'Banking & Savings', icon: <img src="/arrow-down.png" width={16} height={16} alt="arrown-down" className="text-sm mt-1" /> },
    { text: 'Investing', icon: <img src="/arrow-down.png" width={16} height={16} alt="arrown-down" className="text-sm mt-1" />  },
    { text: 'Offers', icon: <img src="/arrow-down.png" width={16} height={16} alt="arrown-down" className="text-sm mt-1" />   },
    { text: 'Get Free Stocks', icon: <img src="/arrow-down.png" width={16} height={16} alt="arrown-down" className="text-sm mt-1" /> },
  ];

  return (
    <div className="w-5/5 border-b border-[#00000026]"><div className="h-[5.25rem] m-auto w-10/12 flex items-center  justify-between">
    <Image
      src={"/logo.png"}
      className=" cursor-pointer"
      width={155}
      height={24}
      priority
      alt="logo"
      onClick={()=>{router.push('/')}}
    />

  <div className="lg:hidden flex items-center " >
      <button
        onClick={toggleMobileMenu}
        className="flex items-center justify-center p-2"
      >
    <Image src={'/menu.png'} height={20} width={20} alt=""/>
      </button>
    </div>

    <ul className=" hidden lg:flex items-center gap-[50px] ">
      <li className="text-[#18191F] text-base font-medium cursor-pointer" onClick={()=>{router.push('/')}}>All Calculators</li>
      <li className="text-[#18191F] text-base font-medium cursor-pointer" onClick={()=>{router.push('/')}}>Blog</li>
      <li className="text-[#18191F] text-base font-medium cursor-pointer" onClick={()=>{router.push('/')}}>FAQs</li>
      <li className="text-[#18191F] text-base font-medium cursor-pointer" onClick={()=>{router.push('/')}}>Terms</li>
      <li className="text-[#18191F] text-base font-medium cursor-pointer" onClick={()=>{router.push('/')}}>Privicy Policy</li>

    </ul>
    {isMobileMenuOpen && (
    <div className="lg:hidden z-[2] absolute top-16 right-4 bg-white shadow-md rounded-md p-4">
   <ul className=" items-center gap-[30px]">
      <li className="text-[#18191F] text-base cursor-pointer" onClick={()=>{router.push('/')}}>All Calculators</li>
      <li className="text-[#18191F] text-base cursor-pointer" onClick={()=>{router.push('/')}}>Blog</li>
      <li className="text-[#18191F] text-base cursor-pointer" onClick={()=>{router.push('/')}}>FAQs</li>
      <li className="text-[#18191F] text-base cursor-pointer" onClick={()=>{router.push('/')}}>Terms</li>
      <li className="text-[#18191F] text-base cursor-pointer" onClick={()=>{router.push('/')}}>Privicy Policy</li>

    </ul>
    </div>
  )}
  </div></div>
  );
}

export default Navbar;
