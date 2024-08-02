"use client"
import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/contents/appdata";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900 bg-opacity-80 shadow-lg">
      <div className="container mx-auto px-4 md:px-[10%]">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-white font-bold text-2xl">
            🚘Car🤝Pool🚗
          </Link>
          <div
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="w-5 h-0.5 bg-white"></div>
            <div className="w-5 h-0.5 bg-white"></div>
            <div className="w-5 h-0.5 bg-white"></div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen
            ? "block md:hidden"
            : "hidden md:block"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 bg-opacity-80 text-center py-2">
            {links?.map((link) => (
              <div key={link.link}>
                <Link
                  className={`block text-white hover:bg-gray-800 px-3 py-2`}
                  href={link.link}
                  exact={link.exact}
                >
                  <span>{link.text}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
