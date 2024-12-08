import Allhero from '@/components/Allhero'
import Navbar from '@/components/Navbar'
import React from 'react'
import backgroundimage from '@/public/assets/Rectangle 1.png'

const page = () => {
  return (
    <>
    <Navbar/>
    <Allhero src={backgroundimage} page='Blog'/>

    <div>page</div>
    </>
  )
}

export default page