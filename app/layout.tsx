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
      <body className='relative'>
        <div className='fixed top-0 right-0 left-0 z-10'>
          <nav className='grid grid-cols-1 md:grid-cols-3 md:h-[100px] bg-teal-700 border-b border-black nav1'>
            <div className='col-span-2 py-3 md:col-auto flex pt-2 items-center justify-center md:pt-0'>
              <Link className='w-auto flex items-center ' href='/'>
                <Image
                  src="/images/logomolina.png"
                  alt="Nombre de la imagen"
                  width={80}
                  height={60}
                  objectFit="cover"
                />
                <span className={roboto.className + ' pl-3 text-teal-200'}>AGENCIA DE USADOS</span>

              </Link>
            </div>
          </nav>
          <nav className='h-[60px] flex items-center justify-start md:justify-center bg-teal-600 rounded-b-3xl shadow-teal-700/50 nav2 '>
            <div className='flex ps-4 md:hidden'>
              <button
                id='bars'
                className='flex px-3 py-2 border rounded border-teal-200 text-teal-200 hover:text-teal-300'
                onClick={toggleMenu} // Llamar a la función cuando se hace clic
              >
                <FontAwesomeIcon icon={faBars} />
                <title>Menu</title>
              </button>
              {isMenuVisible && (
                <div
                  id='menu'
                  className='absolute left-0 mt-11 z-50 bg-teal-600 border border-teal-200 rounded-md shadow-md'
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
                      Acerca de
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
            <div className='hidden h-full md:flex bg-teal-600 h-full items-center justify-center'>
              <div className='flex h-full items-center ' >
                <a className={`${raleway.className} flex h-full px-3 pt-4 pb-1 text-xl text-teal-200 hover:bg-teal-300 hover:text-teal-700`} href='/'>
                  Home
                </a>
              </div>
              <div className='flex h-full items-center ' >
                <a
                  className={`${raleway.className} flex h-full px-3 py-4 text-xl text-teal-200 hover:bg-teal-300 hover:text-teal-700`}
                  href='/about'
                >
                  Acerca de
                </a>
              </div>
              <div className='flex h-full items-center ' >
                <a
                  className={`${raleway.className} flex h-full px-3 py-4 text-xl text-teal-200 hover:bg-teal-300 hover:text-teal-700`}
                  href='/products'
                >
                  Autos
                </a>
              </div>
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
          <div className="grid h-full md:grid-cols-3 md:grid-rows-1 bg-teal-600 flex p-3 h-64 rounded-t-3xl content-center w-full">
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
            <p>&copy Grupo C4</p>
          </div>
        </footer>
      </body >
    </html >
  )
}
