"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import './index.css';

function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { label: 'All Calculators', link: '/all-calculators' },
    { label: 'Blog', link: '/' },
    { label: 'FAQs', link: '/' },
    { label: 'Terms', link: '/' },
    { label: 'Privacy Policy', link: '/' },
  ];

  const renderMenuItems = (items: { label: string; link: string }[]) => (
    <ul className={`flex-col md:flex-row lg:flex items-center gap-[50px]`}>
      {items.map((item, index) => (
        <li
          key={index}
          className="text-[#18191F] text-base font-medium cursor-pointer"
          onClick={() => router.push(item.link)}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full border-b border-[#00000026] sticky bg-white z-[1] top-0">
      <div className="h-[5.25rem] mx-auto w-10/12 flex items-center justify-between">
        <Image
          src="/logo.png"
          className="cursor-pointer"
          width={155}
          height={24}
          priority
          alt="logo"
          onClick={() => router.push('/')}
        />

        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="flex items-center justify-center p-2"
          >
            <Image src="/menu.png" height={20} width={20} alt="" />
          </button>
        </div>

       <span className="hidden lg:flex"> {renderMenuItems(menuItems)}</span>

        {isMobileMenuOpen && (
          <div className="lg:hidden z-[2] absolute top-16 right-4 bg-white shadow-md rounded-md p-4">
            {renderMenuItems(menuItems)}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
