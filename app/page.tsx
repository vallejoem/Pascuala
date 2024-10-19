'use client'
import { Roboto, Raleway } from 'next/font/google';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {



  return (
    <div className='bg-gray-100 mt-16 md:mt-40'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-16">
          <h2 className={`${roboto.className} pt-3 pb-4 text-3xl font-bold text-fuchsia-950`}>Nuevos Ingresos</h2>
          <div className="h-full">
            <Carousel
              showArrows={true}
              showThumbs={false}
              autoPlay={true}
              interval={5000}
              infiniteLoop={true}
            >
              <div>
                <img className='object-cover w-full h-full' src="http://localhost:3500/public/carousel/slide1.jpg" alt="honda" />
              </div>
              <div>
                <img className='object-cover w-full h-full' src="http://localhost:3500/public/carousel/slide2.jpeg" alt="mercedes" />
              </div>
              <div>
                <img className='object-cover w-full h-full' src="http://localhost:3500/public/carousel/slide3.jpeg" alt="toyota" />
              </div>
            </Carousel>
          </div>



        </div>
      </div>


    </div>
  )
}
