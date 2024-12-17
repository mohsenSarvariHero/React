import React from 'react'
import style from "../Contact/contact.module.css"
import Image from 'next/image'
import contactimage from "@/public/contact.png"
import Button from '@/components/Button/Button'
const Contact = () => {
  return (
    <div className={style.contact}>
        <h1 className={style.title}>
          LET"s KIPE IN TOUCH
        </h1>
      <div className={style.content}>
        <div className={style.imagecontainer}>
           <Image src={contactimage} width={500} height={500} alt='contact' />
        </div>
        
          <form className={style.form}>
            <input className={style.input} type='text' placeholder='Name' />
            <input className={style.input} type='email' placeholder='E-mail' />
            <textarea className={style.input} rows={10} cols={8} placeholder='message'></textarea>
            <Button className={style.button} url="" text="send" />
          </form>
        
       
      </div>
 
    </div>
  )
}

export default Contact
