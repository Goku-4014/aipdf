import React from 'react'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-md'>
    <img src='/ghost.png' alt='logo' width={30} height={30} className='right-0'/>
     <p className='text-center items-center'><span className='text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-900 to-pink-500 bg-clip-text text-transparent '>AI-PDF</span></p>
      <UserButton className =""/>
    </div>
  )
}

export default Header
