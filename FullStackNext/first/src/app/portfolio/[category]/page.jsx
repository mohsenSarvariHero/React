import React from 'react'
import styles from "../[category]/category.module.css"
import Button from '@/components/Button/Button'
import first from "@/public/illustration.png"
import Image from 'next/image'
<<<<<<< HEAD
import {items} from "./data.js"
import {notFound} from "next/navigation"

const getData = (cat)=>{
  const data  = items[cat]
  if (data) {
    return data;
  }else{
    return notFound();

  }

}


const PortfolioCategory = ({params}) => {
  const data = getData(params.category);
  console.log(data)
  return (
    <div>
      123
  
        {/* <h1 className={styles.title}></h1> */}

        {data.map((item) => (
         <div className={styles.content} key={item.id}>
           <div className={styles.left}>
             <h1 className={styles.head}>{item.title}</h1>
             <p className={styles.desc}>{item.desc}</p>
             <Button text="see more" url="#" />
           </div>
           <div className={styles.right}>
             <Image src={item.image} width={500} height={500} alt="illustrative" />
            </div>
         </div>
        ))}
        
        </div>
=======
const PortfolioCategory = ({params}) => {
  console.log(params)
  return (
    <div>
        <h1 className={styles.title}>{params.category}</h1>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.head}>Creative Portfolio</h1>
            <p className={styles.desc}>write the description of {params.category}</p>
            <Button text="see more" url="#" />
          </div>
          <div className={styles.right}>
            <Image src={first} width={500} height={500} alt="illustrative" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.head}>Creative Portfolio</h1>
            <p className={styles.desc}>write the description of {params.category}</p>
            <Button text="see more" url="#" />
          </div>
          <div className={styles.right}>
            <Image src={first} width={500} height={500} alt="illustrative" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.head}>Creative Portfolio</h1>
            <p className={styles.desc}>write the description of {params.category}</p>
            <Button text="see more" url="#" />
          </div>
          <div className={styles.right}>
            <Image src={first} width={500} height={500} alt="illustrative" />
          </div>
        </div>
    </div>
>>>>>>> 91eb025d213b349f0940b74f78dae0b98895365a
  )
}

export default PortfolioCategory
