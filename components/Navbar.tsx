"use client";

import Image from "next/image";
import React, { useState } from "react";

import { app_logo } from "@/assets";
import { navLinks } from "@/constants";
import { useAppContext } from "@/hooks/useAppContext";
import JobFilters from "./JobFilters";

const Navbar = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { isModalOpen, setIsModalOpen } = useAppContext();

  return (
    <>
      <div className="w-full flex items-center justify-center">
        <nav className="flex items-center justify-between px-5 py-3 bg-white rounded-[122px] w-full max-w-[890px] h-[80px] shadow-lg mt-[21px]">
          <Image src={app_logo} width={44} height={44} alt="logo" />
          <ul className="flex items-center justify-center flex-1">
            {navLinks?.map((item, index) => (
              <li
                key={item}
                className="text-navbar font-[600] px-[24px] py-[8px] rounded-[12px] p-5 hover:shadow-lg hover:translate-x-1 hover:translate-y-1 duration-300 cursor-default"
              >
                {item}
              </li>
            ))}
          </ul>

          <button
            className="linear_gradient py-[8px] px-[24px] rounded-[30px] text-white text-[16px] font-bold min-w-[140px]"
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            onClick={() => setIsModalOpen((prev) => !prev)}
          >
            {isMouseOver ? "Login" : "Create Jobs"}
          </button>
        </nav>
      </div>
      <JobFilters />
    </>
  );
};

export default Navbar;
