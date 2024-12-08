import Image from 'next/image'
import React from 'react'
import diningimage from '@/public/assets/dining.png'
import livingimage from '@/public/assets/Image-living room.png'
import bedroomimage from '@/public/assets/Mask Group (1).png'

const Range = () => {
  return (
    <>
    <div className='w-full justify-center my-10  items-center container mx-auto '>
        <div className='justify-center p-5 my-10 text-center items-center '>
            <h1 className='text-3xl font-bold'>Browse The Range
            
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        <div className='flex justify-between'>
           <div className='items-center text-center'>
            <Image src={diningimage} width={381} height={480} alt='dining'/>
            <h3 className='p-5 text-xl font-semibold'>Dining</h3>

           </div>

           <div className='items-center text-center'>
            <Image src={livingimage} width={381} height={480} alt='dining'/>
            <h3 className='p-5 text-xl font-semibold'>Living</h3>

           </div>


           <div className='items-center text-center'>
            <Image src={bedroomimage} width={381} height={480} alt='dining'/>
            <h3 className='p-5 text-xl font-semibold'>Bedroom</h3>

           </div>
        </div>
    </div>
    
    </>
  )
}

export default Range