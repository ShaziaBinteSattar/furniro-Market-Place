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

        <div className={`${isMenuOpen ? 'flex  bg-zinc-300' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-2/3 justify-around px-10 gap-4 md:gap-0`}>
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </div>
       

        <div className='flex justify-center md:justify-between w-full md:w-1/3 px-4 md:px-10 gap-6 md:gap-0'>
          <div>
            <Image src={acounticon} width={25} height={30} alt='account'/>
          </div>
          <div>
            <Image src={searchicon} width={25} height={30} alt='search'/>
          </div>
          <div>
            <Image src={hearticon} width={25} height={30} alt='favorites'/>
          </div>
          <div>
            <Image src={carticon} width={25} height={30} alt='cart'/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar