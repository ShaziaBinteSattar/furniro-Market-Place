"use client"
import Footer from '@/components/Footer'
import FuniroFurniture from '@/components/FuniroFurniture'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import Range from '@/components/Range'
import RoomIspirations from '@/components/RoomIspirations'
import React from 'react'
import { Provider } from 'react-redux'
import store from './reduxconfig/store/store'

const page = () => {
  return (
    <>
            <Provider store={store}>

    <Navbar/>
    <Hero/>
    <Range/>
    <Products/>
    <RoomIspirations/>
    <FuniroFurniture/>
    <Footer/>
              </Provider>
    </>
  )
}

export default page