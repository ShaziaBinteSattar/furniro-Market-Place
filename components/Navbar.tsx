"use client"
import React, { useState } from 'react'
import acounticon from '@/public/assets/mdi_account-alert.png'
import searchicon from '@/public/assets/akar-icons_search.png'
import hearticon from '@/public/assets/akar-icons_heart.png'
import carticon from '@/public/assets/ant-design_shopping-cart-outlined.png'
import logo from '@/public/assets/Frame 168.png'
import { FiAlignRight } from "react-icons/fi";

import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className='p-5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-5'>
        <div className='w-full  md:w-1/3 flex justify-between items-center md:justify-start px-4'>
          <Image src={logo} width={150} height={200} alt='logo'/>
          <button 
            className='flex sm:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiAlignRight className='text-xl'/>
          </button>
        </div>

        <div className={`${isMenuOpen ? 'flex  bg-zinc-300 p-2  rounded-lg shadow-lg' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-2/3 justify-around px-10 gap-4 md:gap-0`}>
          <a href="/" className='hover:underline-offset-4  hover:underline  hover:scale-105'>Home</a>
          <a href="/shop" className='hover:underline-offset-4  hover:underline hover:scale-105 '>Shop</a>
          <a href="/blog" className='hover:underline-offset-4  hover:underline hover:scale-105'>Blog</a>
          <a href="/contect" className='hover:underline-offset-4  hover:underline hover:scale-105'>Contact</a>
        </div>
       

        <div className='flex justify-center md:justify-between w-full md:w-1/3 px-4 md:px-10 gap-6 md:gap-0'>
          <div>
            <Image src={acounticon} className='cursor-pointer hover:scale-105' width={25} height={30} alt='account'/>
          </div>
          <div>
            <Image src={searchicon} className='cursor-pointer hover:scale-105' width={25} height={30} alt='search'/>
          </div>
          <div>
            <Image src={hearticon} className='cursor-pointer hover:scale-105' width={25} height={30} alt='favorites'/>
          </div>
          <div>
            <Image src={carticon} className='cursor-pointer hover:scale-105' width={25} height={30} alt='cart'/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar