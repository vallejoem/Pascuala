'use client'
import { Norican, Borel } from 'next/font/google';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


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
          <div className="h-full">
            <Carousel
              showArrows={true}
              showThumbs={false}
              autoPlay={true}
              interval={5000}
              infiniteLoop={true}
            >
              <div>
                <img className='object-cover w-full h-full' src="http://localhost:3500/public/carousel/slide1.png" alt="..." />
              </div>
              <div>
                <img className='object-cover w-full h-full' src="http://localhost:3500/public/carousel/slide2.jpg" alt="..." />
              </div>
              <div>
                <img className='object-cover w-full h-full' src="http://localhost:3500/public/carousel/slide3.jpg" alt="..." />
              </div>
            </Carousel>
          </div>



        </div>
      </div>


    </div>
  )
}
