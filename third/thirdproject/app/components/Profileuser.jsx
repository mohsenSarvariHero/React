"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import man1 from "../public/man.png";
import { useRouter } from 'next/navigation';
import {signOut} from "next-auth/react"

const Profileuser = () => {
  const router = useRouter();
  const onLogout=()=>{
    signOut();
    router.push('/')
  }
  
  return (
   
    <div className='flex flex-col items-center'> 
       
      <Image src={man1} width={100} height={100} alt='user page' />
      <h2 className='text-[30px] font-semibold'>your Name</h2>
      <h4 className='text-gray-400'>your email@gmail.com</h4>
      <div className='flex gap-4'>
              <button className='bg-gray-300 font-semibold px-3 m-2 rounded-full p-2'>share</button>
              <button className='bg-gray-300 font-semibold px-3 m-2 rounded-full p-2' onClick={onLogout}>Logout</button>
      </div>

      
    </div>
  )
}

export default Profileuser
