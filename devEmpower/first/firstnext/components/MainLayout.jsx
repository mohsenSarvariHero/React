import React from "react";
import MainHeader from "./MainHeader";
import { IoIosHome } from "react-icons/io";
import Link from "next/link";
import { GrProjects } from "react-icons/gr";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { SiHelpscout } from "react-icons/si";
import { LuPhoneCall } from "react-icons/lu";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen w-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <aside className="bg-white rounded-lg w-60 p-4">
          <ul>
            <li className="flex m-2 mb-[20px] gap-2 items-center hover:bg-red-950  hover:text-green-200 hover:cursor-pointer hover:rounded-full hover:justify-center hover:p-[8px 10px] " > 
              <IoIosHome />
              <Link href="/">Home</Link>
            </li>
            <li className="flex m-2 mb-[20px] gap-2 items-center hover:bg-red-950  hover:text-green-200 hover:cursor-pointer hover:rounded-full hover:justify-center hover:p-[8px 10px] " > 
              <GrProjects />
              <Link href="/" >Project</Link>
              < IoIosArrowDroprightCircle className="ml-[28px]"  />
            </li>
            <li className="flex m-2 mb-[20px] gap-3 items-center hover:bg-red-950  hover:text-green-200 hover:cursor-pointer hover:rounded-full hover:justify-center hover:p-[8px 10px] " > 
              <FaCheck />
              <Link href="/" >sigule</Link>
              < IoIosArrowDroprightCircle className="ml-[28px]" />
            </li>
            <li className="flex m-2 mb-[20px] gap-3 items-center hover:bg-red-950  hover:text-green-200 hover:cursor-pointer hover:rounded-full hover:justify-center hover:p-[8px 10px] " > 
              <FaCheckDouble />
              <Link href="/" >Complex</Link>
              < IoIosArrowDroprightCircle className="ml-[5px]" />
            </li>
            <li className="flex m-2 mb-[20px] gap-3 items-center hover:bg-red-950  hover:text-green-200 hover:cursor-pointer hover:rounded-full hover:justify-center hover:p-[8px 10px] " > 
              <SiHelpscout />
              <Link href="/About" >About us</Link>
            </li>
            <li className="flex m-2 mb-[20px] gap-3 items-center hover:bg-red-950  hover:text-green-200 hover:cursor-pointer hover:rounded-full hover:justify-center hover:p-[8px 10px] " > 
              <LuPhoneCall />
              <Link href="/Contact" >Contact us</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
