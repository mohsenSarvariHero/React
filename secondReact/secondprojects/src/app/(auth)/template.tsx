"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const authLayout = ( {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const[input , setInput] = useState("")
  return (
    <div>
      authlayout
      <div className='flex m-5 justify-between'>
        <Link href='/Login'>Login</Link>
      <Link href='/Register'>Register</Link>
      <Link href='/forgetpassword'>forget-password</Link>
      </div>
    <input className='bg-black text-white p-2 text-center mx-auto' onChange={(e)=>setInput(e.target.value)} />
    <h3>{input}</h3>
      {children}
    </div>
  )
}

export default authLayout
