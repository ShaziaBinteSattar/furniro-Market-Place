import Allhero from '@/components/Allhero'
import Navbar from '@/components/Navbar'
import React from 'react'
import backgroundimage from '@/public/assets/Rectangle 1.png'
import Cards from '@/components/Cards'

import vecter1 from '@/public/assets/Vector (5).png'
import vecter2 from '@/public/assets/Vector (4).png'
import vecter3 from '@/public/assets/bi_view-list.png'


import image1 from '@/public/assets/Images (1).png'
import image2 from '@/public/assets/Images.png'
import image3 from '@/public/assets/image 1.png'
import image4 from '@/public/assets/Images (2).png'
import image5 from '@/public/assets/image 6.png'
import image6 from '@/public/assets/image 8.png'
import Footer from '@/components/Footer'
import Image from 'next/image'




const page = () => {

    interface Product {
        id: number;
        name: string;
        description: string;
        price: number;
        originalPrice?: number;
        discount?: number;
        image?: string ;
        isNew?: boolean;
      }
      
      const products: Product[] = [
        {
          id: 1,
          name: 'Slytherine',
          description: 'Stylish cafe chair',
          price: 2500000,
          originalPrice: 3500000,
          discount: 30,
          image: image1.src,
        },
        {
          id: 2,
          name: 'Leviosa',
          description: 'Stylish cafe chair',
          price: 2500000,
          image: image2.src,
        },
        {
          id: 3,
          name: 'Lolito',
          description: 'Luxury big sofa',
          price: 7000000,
          originalPrice: 14000000,
          discount: 50,
          image: image3.src,
        },
        {
          id: 4,
          name: 'Respira',
          description: 'Outdoor bar table and stool',
          price: 500000,
          isNew: true,
          image: image4.src,
        },
      
        
        {
          id: 5,
          name: 'Lolito',
          description: 'Luxury big sofa',
          price: 7000000,
          originalPrice: 14000000,
          discount: 50,
          image: image5.src,
        },
        {
            id: 6,
            name: 'Slytherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            originalPrice: 3500000,
            discount: 30,
            image: image6.src,
          },
          {
            id: 7,
            name: 'Leviosa',
            description: 'Stylish cafe chair',
            price: 2500000,
            image: image2.src,
          },
          {
            id: 8,
            name: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 500000,
            isNew: true,
            image: image3.src,
          },
          {
            id: 6,
            name: 'Slytherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            originalPrice: 3500000,
            discount: 30,
            image: image6.src,
          },
          {
            id: 7,
            name: 'Leviosa',
            description: 'Stylish cafe chair',
            price: 2500000,
            image: image2.src,
          },
          {
            id: 8,
            name: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 500000,
            isNew: true,
            image: image3.src,
          },
        {
          id: 6,
          name: 'Slytherine',
          description: 'Stylish cafe chair',
          price: 2500000,
          originalPrice: 3500000,
          discount: 30,
          image: image6.src,
        },
        {
          id: 7,
          name: 'Leviosa',
          description: 'Stylish cafe chair',
          price: 2500000,
          image: image2.src,
        },
        {
          id: 8,
          name: 'Respira',
          description: 'Outdoor bar table and stool',
          price: 500000,
          isNew: true,
          image: image3.src,
        },
      
        // Add other products...
      ];

  return (
    <>
    <Navbar/>
    <Allhero src={backgroundimage} page='Shop'/>

    <div className='container p-10 bg--100 flex '>
        <div className='w-1/2 flex gap-5 items-center'>
        <div className='flex justify-between space-x-4'>

        <Image src={vecter1}  width={20} height={20} alt='filter'/>
        <p>Filter</p>
        <Image src={vecter2}  width={20} height={20} alt='filter'/>
        <Image src={vecter3}  width={20} height={20} alt='filter'/>

        </div>
        <div className='border-l-2 px-5'>
            <p>Showing 1 to 16 of 32 result</p>

        </div>
        </div>


        <div className='justify-end flex items-center'>

            <div>
                <p>Show</p>
                <input type="text" width={50} />

            </div>
            <div>
            <p>Short By</p>
            <input type="text" width={80} className='w-32' />

            </div>


        </div>

    </div>

<Cards products={products}/>
<Footer/>
    <div>
        
    </div>
    </>
  )
}

export default page