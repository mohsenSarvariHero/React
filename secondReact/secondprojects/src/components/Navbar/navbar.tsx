"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()

    const navs=[
        {
            title:"Home",
            link : "/"
        },
        {
            title:"About",
            link : "/About"
        },
        {
            title:"Login",
            link : "/Login"
        },
    ]
    const handleclick = ()=>{
        router.forward()
    }
  return (
    <div className='flex '>
      <ul className="flex p-4 gap-4">
        {navs.map((item)=>(
                    <li className='font-bold'>
                    <Link href={item.link} className={pathname === item.link ? "text-blue-800 bg-red-200 p-3" : "text-gray-900" } >{item.title}</Link>
                </li>
        ))}
    
      </ul>
      <button onClick={handleclick} className=" border-spacing-2 bg-blue-200 text-red-600 p-4 rounded ml-[120px] ">Click me</button>
    </div>
  )
}

export default Navbar
