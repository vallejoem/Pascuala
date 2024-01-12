'use client'
import { Norican, Borel } from 'next/font/google'
import { Product } from '../app/types/types';
import { useState, useEffect } from 'react';
import { Carousel } from 'flowbite-react';


const norican = Norican({
  subsets: ['latin'],
  weight: '400'
})

const borel = Borel({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  


  return (
    <div className='bg-gray-100 mt-48 md:mt-40'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className={`${borel.className} pt-3 text-3xl font-bold text-fuchsia-950`}>Colecciones Primavera-Verano</h2>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img className='object-cover w-full h-full' src="http://localhost:3500/public/carousel/slide1.png" alt="..." />
        <img className='object-cover w-full h-full' src="http://localhost:3500/public/carousel/slide2.jpg" alt="..." />
        <img className='object-cover w-full h-full' src="http://localhost:3500/public/carousel/slide3.jpg" alt="..." />
      </Carousel>
    </div>

          

        </div>
      </div>
      

    </div>
  )
}
