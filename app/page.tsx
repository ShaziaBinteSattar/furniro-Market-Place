import Footer from '@/components/Footer'
import FuniroFurniture from '@/components/FuniroFurniture'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import Range from '@/components/Range'
import RoomIspirations from '@/components/RoomIspirations'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Range/>
    <Products/>
    <RoomIspirations/>
    <FuniroFurniture/>
    <Footer/>
    {/* <Signin/> */}
    {/* <Signup/> */}
    </>
  )
}

export default page