"use client"
import React, { useState } from 'react'
import man1 from "../public/man.png";
import spiner from "../public/loading-indicator.png";
import Image from 'next/image';
import Upload from "./Upload"
const Form = () => {
  const[title , setTitle] = useState();
  const[desc , setDesc] = useState();
  const[link , setLink] = useState();
  const[file , setFile] = useState();
  const[show , setShow] = useState(false);
  const [loading , setLoading] = useState(false)
  const onSave = ()=>{
    setShow((prev) => !prev )
    setLoading(true)
    console.log(  "title :",title , " ", "decsription :",desc , " " , "Link : ",link)
    console.log("file is : " , file)
  }
  return (
    <div className='bg-white p-16 rounded-2xl'>
        <div className='flex justify-end mb-6'>
            <button onClick={() => onSave()} className=' text-white bg-red-500 p-2 rounded-lg px-3'>
              {loading? <Image src={spiner} width={30} height={30} alt='spiner' className='animate-spin' />:
              <span>Save</span>}</button> 
        </div>
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10'>
            
                <Upload setFile={(file)=>setFile(file)} />
            
            <div className='   col-span-2 '>
                <div className='w-[100%]'>
                    <input onChange={(e)=> setTitle(e.target.value)} class="placeholder-gray-400 text-[35px] outline-none font-bold  border-b-[2px] border-gray-400 w-full" type='text' placeholder='Add your title' />
                    <p className='text-[12px] w-full text-gray-400'>The first 40 charaters are what usually show up in feeds</p>
                <div className='flex '>
                  <div>  
                    <Image src={man1} width={80} height={80} alt='logo' />
                  </div>  
                  <div className='mt-4 ml-2'>
                    <h3 className='font-semibold'>Game Play</h3>
                    <h4 className='font-[40px]'>exampleemail@gmail.com</h4>
                  </div>
                </div>
               
             
                    <textarea type="text" onChange={(e)=>setDesc(e.target.value)} placeholder='Tell everyone what your pin is about'  className='w-full border-b-[2px] border-gray-400 placeholder-gray-400 outline-none' />
                
                    <input type='text' onChange={(e)=>setLink(e.target.value)} placeholder='Add a Destination Link'  className='w-full border-b-[2px] border-gray-400 outline-none pb-4 mt-[90px] placeholder-gray-400' />
                    {show && <div  className='bg-red-200 text-green-800 p-4 m-4 rounded'>
                      <h2>your title is : {title}</h2>
                      <h2>your description is : {desc}</h2>
                      <h2>your link is : {link}</h2>
             
                     
                    </div>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form
