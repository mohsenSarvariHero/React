import React from 'react'
import style from"./portfolio.module.css"
import Image from 'next/image'
import imgfirst from "@/public/apps.jpg"
import imgsecond from "@/public/illustration.png"
import imgthird from "@/public/websites.jpg"
import Link from 'next/link'
const Portfolio = () => {
  return (
    <div  className={style.container}>
      
      <br />
      <h3 className={style.desc}>Choose a Gallary</h3>
      <br/>
      <div className={style.picture}>
        <div>
          <Link href='/portfolio/applications'><div className={style.imgcontainer}>
<<<<<<< HEAD
             <Image alt='123' src = {imgfirst} width={250} height={350}  />  
=======
             <Image src = {imgfirst} width={250} height={350}  />  
>>>>>>> 91eb025d213b349f0940b74f78dae0b98895365a
             
          </div>
             <h1 className={style.caption}>Applications</h1>
             </Link>
          
        </div>
    
        <div>
          <Link href="/portfolio/illustrations" >
          <div className={style.imgcontainer}>
<<<<<<< HEAD
            <Image alt='123' src = {imgsecond} width={250} height={350}  />
=======
            <Image src = {imgsecond} width={250} height={350}  />
>>>>>>> 91eb025d213b349f0940b74f78dae0b98895365a
          </div>
          
          <h1 className={style.caption} >Illustrations</h1>
          </Link>
        </div>
    
        <div>
<<<<<<< HEAD
          <Link href="/portfolio/websites">
          <div className={style.imgcontainer}>
            <Image src = {imgthird} width={250}  height={350} alt='123'/>
=======
          <Link href="/portfolio/website">
          <div className={style.imgcontainer}>
            <Image src = {imgthird} width={250}  height={350}/>
>>>>>>> 91eb025d213b349f0940b74f78dae0b98895365a
          </div>
          
          <h1 className={style.caption}>WebSites</h1>
          </Link>
        </div>
    
      </div>
    </div>
  )
}

export default Portfolio
