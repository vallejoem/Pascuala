'use client'
import './globals.css'
import { Roboto, Raleway } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSquareWhatsapp, faSquareInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: '400'
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const [openModal, setOpenModal] = useState<string | undefined>();
  const emailInputRef = useRef<HTMLInputElement>(null)

  return (
    <html lang="en">
      <head>
        {/*<link rel="icon" href="/favicon.png" />*/}
        {/* Si el favicon está en formato PNG, podés usar esta opción */}
         <link rel="icon" type="image/png" href="/favicon.png" /> 
        <title>Molina</title>
      </head>
      <body className='relative bg-white'>
        <div className='fixed top-0 right-0 left-0 z-10'>
          <nav className='grid grid-cols-2 md:grid-cols-3 md:h-[160px] bg-teal-700 items-center'>
            <div className='col-span-1 flex items-center justify-center'>
              <Link className='w-auto flex items-center ' href='/'>
                <Image
                  src="/images/logomolina.png"
                  alt="Logo"
                  width={80}
                  height={60}
                  objectFit="cover"
                />
                <span className={roboto.className + ' pl-3 text-teal-200'}>AGENCIA DE USADOS</span>

              </Link>
            </div>
            {/* Botón para el menú en pantallas pequeñas */}
            <div className='flex justify-end pr-4 md:hidden'>
              <button
                id='bars'
                className='flex px-3 py-3 text-teal-200 hover:text-teal-300'
                onClick={toggleMenu} // Llamar a la función cuando se hace clic
              >
                <FontAwesomeIcon icon={faBars} size='2x'/>
              </button>
              {isMenuVisible && (
                <div
                  id='menu'
                  className='absolute right-0 mt-16 z-50 bg-teal-700 shadow-md'
                >
                  <div>
                    <a className={`${raleway.className} block px-3 pt-4 pb-1 text-xl text-teal-200 hover:bg-teal-300 hover:text-teal-700`} href='/'>
                      Home
                    </a>
                  </div>
                  <div>
                    <a
                      className={`${raleway.className} block px-3 py-2 text-xl text-teal-200 hover:bg-teal-300 hover:text-teal-700`}
                      href='/about'
                    >
                      Nosotros
                    </a>
                  </div>
                  <div>
                    <a
                      className={`${raleway.className} block px-3 py-2 text-xl text-teal-200 hover:bg-teal-300 hover:text-teal-700`}
                      href='/products'
                    >
                      Autos
                    </a>
                  </div>
                </div>
              )}
            </div>
            {/* Menú en pantallas grandes en la tercera columna */}
            <div className='hidden md:flex md:col-span-2 md:col-start-3 bg-teal-700 h-full items-end justify-center'>
              <a className={`${raleway.className} px-3 pb-4 text-xl text-teal-200 hover:text-teal-400`} href='/'>
                Home
              </a>
              <a
                className={`${raleway.className} px-3 pb-4 text-xl text-teal-200 hover:text-teal-400`}
                href='/about'
              >
                Nosotros
              </a>
              <a
                className={`${raleway.className} px-3 pb-4 text-xl text-teal-200 hover:text-teal-400`}
                href='/products'
              >
                Autos
              </a>
            </div>
          </nav>
        </div>
        {children}
        <div className='hidden md:flex fixed top-44 right-16 z-20'>
          <a className=" text-center " href="https://api.whatsapp.com/send?phone=5492233023017" target='_blank'>
            <FontAwesomeIcon className='text-green-400 hover:text-green-600 p-1' size='4x' icon={faSquareWhatsapp} />
          </a>
        </div>
        <section className={raleway.className + ' flex content-center '} >
          <div className="grid h-full md:grid-cols-3 md:grid-rows-1 bg-teal-600 flex p-3 h-64 content-center w-full">
            <div className="flex flex-col p-5">
              <ul>
                <li className="list-group-item">
                  <a href="./" className="text-teal-200 text-xl">Inicio</a>
                </li>
                <li className="list-group-item">
                  <a href="./contacts" className="text-teal-200 text-xl">Contactanos</a>
                </li>
                <li className="list-group-item">
                  <a href="./subscribe" className="text-teal-200 text-xl">Suscribite!!!</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:col-span-2 items-center ">
              <h2 className="text-teal-200 text-3xl m-3 py-3">Seguinos en nuestras redes !!!</h2>
              <div className="flex pb-3">
                <a className="link-redes" href="https://www.facebook.com/pascuala.pequenascosturas" target="_blank">
                  <FontAwesomeIcon className='text-teal-200 p-2' size='3x' icon={faFacebook} />
                </a>
                <a className="link-redes" href="https://www.instagram.com/pascuala2012/" target="_blank">
                  <FontAwesomeIcon className='text-teal-200 p-2' size='3x' icon={faSquareInstagram} />
                </a>
                <a className="link-redes" href="mailto:" target="_blank">
                  <FontAwesomeIcon className='text-teal-200 p-2' size='3x' icon={faAt} />
                </a>
                <a className="link-redes" href="https://api.whatsapp.com/send?phone=5492233023017" target="_blank">
                  <FontAwesomeIcon className='text-teal-200 p-2' size='3x' icon={faSquareWhatsapp} />
                </a>
              </div>
            </div>

          </div>
        </section>
        <footer>
          <div className="bg-teal-700 p-3">
            <p>© Emiliano Vallejo</p>
          </div>
        </footer>
      </body >
    </html >
  )
}
