"use client"
import Image from "next/image";
import React from "react";
import { Si2K } from "react-icons/si";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import {useRouter} from "next/navigation";
import "../components/header.css";
import man1 from "../public/man.png";
const Header = () => {
  const router = useRouter()
  return (
    <div className="flex items-center g-3 p-6 md:gap-2">
      <Si2K
        className="hover:bg-gray-300 w-10 h-10 m-2 rounded-full cursor-pointer"
        width={50}
        height={50}
        onClick={()=>router.push("/")}
      />
      <button className="bg-black text-white p-2 rounded-full px-4">
        Home
      </button>
      <button onClick={()=> router.push('/pinbuilder')} className="font-semibold p-2 rounded-full ">Create</button>
      <div className=" align-baseline bg-[#e9e9e9] p-3 items-center gap-3 rounded-full w-full hidden md:flex">
        <IoSearchOutline className="text-[25px] text-gray-500" />
        <input type="text" placeholder="search" className="bg-transparent outline-none text-[20px] " />
      </div>
      <IoSearchOutline className="text-[25px] text-gray-500 md:hidden" />

      <FaRegBell  className="text-[40px] text-gray-500 hover:bg-gray-200 hover:rounded-full hover:cursor-pointer :hover:p-4 "/>
      <IoIosChatbubbles className="text-[40px] text-gray-500 hover:bg-gray-200 hover:rounded-full hover:cursor-pointer :hover:p-4"/>
      {/* <Image
        src={man1}
        alt="145"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer "
      /> */}
            <button className="font-semibold p-2 rounded-full ">Login</button>

    </div>
  );
};

export default Header;
