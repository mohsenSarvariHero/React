import React from "react";
import style from "./blog.module.css";
import Image from "next/image";
import imgtest from "@/public/websites.jpg"
import Link from "next/link";
<<<<<<< HEAD

async function getData() {
  
  const res = await fetch("http://localhost:3000/api/posts",{
    cache : "no-store"
  });
  

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


const Blog =async () => {

  const data = await getData()
  console.log("isssssss",data)
  return (
      <div className={style.maincontainer}> 
      {data.map((item) =>(
             <Link href={`/blog/${item.id}`} className={style.container} key={item._id}>
        
             <div className={style.imgcontainer}>
              
               <Image className={style.img} src={item.img} width={400} height={250} />
              
             </div>
             <div className={style.textsection}>
               <h1 className={style.title}>{item.title}</h1>
               <p className={style.desc}>{item.desc}</p>
               
             </div>
          
           </Link>
      ))}
 
=======
const Blog = () => {
  return (
      <div className={style.maincontainer}> 
      <Link href="/blog/1" className={style.container}>
        
          <div className={style.imgcontainer}>
           
            <Image className={style.img} src={imgtest} width={400} height={250} />
           
          </div>
          <div className={style.textsection}>
            <h1 className={style.title}>title</h1>
            <p className={style.desc}>description</p>
            
          </div>
       
        </Link>
      <Link href="/blog/1" className={style.container}>
        
          <div className={style.imgcontainer}>
           
            <Image src={imgtest} width={400} height={250} />
           
          </div>
          <div className={style.textsection}>
            <h1 className={style.title}>title</h1>
            <p className={style.desc}>description</p>
            
          </div>
       
        </Link>
      <Link href="/blog/1" className={style.container}>
        
          <div className={style.imgcontainer}>
           
            <Image src={imgtest} width={400} height={250} />
           
          </div>
          <div className={style.textsection}>
            <h1 className={style.title}>title</h1>
            <p className={style.desc}>description</p>
            
          </div>
       
        </Link>
      <Link href="/blog/1" className={style.container}>
        
          <div className={style.imgcontainer}>
           
            <Image src={imgtest} width={400} height={250} />
           
          </div>
          <div className={style.textsection}>
            <h1 className={style.title}>title</h1>
            <p className={style.desc}>description</p>
            
          </div>
       
        </Link>
>>>>>>> 91eb025d213b349f0940b74f78dae0b98895365a
      </div>
  )
 
};

export default Blog;
