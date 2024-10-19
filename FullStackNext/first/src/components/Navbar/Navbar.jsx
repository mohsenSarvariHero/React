"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const links = [

        {
            id : 1 ,
            title : "Home",
            url : "/"
        },
        {
            id : 2 ,
            title : "About",
            url : "/About"
        },
        {
            id : 3 ,
            title : "Blog",
            url : "/blog"
        },
        {
            id : 4 ,
            title : "Contact",
            url : "/Contact"
        },
        {
            id : 5 ,
            title : "Dashboard",
            url : "/dashboard"
        },
        {
            id : 6 ,
            title : "Portfolio",
            url : "/portfolio"
        },
    ]
  return (
    <div>
      {links.map((link)=>(
        <Link href={link.url} key={link.id}>{link.title}</Link>
      ))}
      <button onClick={()=>console.log("logged out click")}>Log Out</button>
    </div>
  )
}

export default Navbar
