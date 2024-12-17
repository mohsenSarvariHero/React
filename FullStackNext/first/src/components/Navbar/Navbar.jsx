"use client"
import Link from 'next/link'
import React from 'react'
import style from "./navbar.module.css"
import Darkmode from '../DarkMode/Darkmode'
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
    <div className={style.container}>
      <div className={style.logo}>
        <Link href="/">Mohsen</Link>

      </div>
      <div className={style.links}>
        <Darkmode />
      {links.map((link)=>(
        <Link className={style.link} href={link.url} key={link.id}>{link.title}</Link>
      ))}
      <button  className={style.logout} onClick={()=>console.log("logged out click")}>Log Out</button>
      </div>
      
    </div>
  )
}

export default Navbar
