'use client'
import './globals.css'
import { Norican, Borel } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSquareWhatsapp, faSquareInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react';

const norican = Norican({
  subsets: ['latin'],
  weight: '400'
})

const borel = Borel({
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
      <body className='relative'>
        <div className='fixed top-0 right-0 left-0 z-10'>
          <nav className='grid grid-cols-1 md:grid-cols-3 md:h-[100px] bg-fuchsia-700 border-b border-black nav1'>
            <div className='col-span-2 py-3 md:col-auto flex pt-2 items-center justify-center md:pt-0'>
              <Link className='w-auto flex items-center ' href='/'>
                <Image
                  src="/images/image1.png"
                  alt="Nombre de la imagen"
                  width={80}
                  height={60}
                  objectFit="cover"
                />
                <span className={norican.className + ' pl-3 text-fuchsia-200'}>Ropa para muñecas</span>

              </Link>
            </div>
            <div className='flex items-center py-3 justify-center grow '>
              <form className=" flex items-center md:w-full search-form">
                <input className='w-full rounded-l-lg p-1' type="text" placeholder=" Buscar" />
                <button className='bg-fuchsia-200  p-1 rounded-r-lg hover:bg-fuchsia-300' type="submit">  Buscar</button>
              </form>
            </div>
          </nav>
          <nav className='h-[60px] flex items-center justify-start md:justify-center bg-fuchsia-600 rounded-b-3xl shadow-fuchsia-700/50 nav2 '>
            <div className='flex ps-4 md:hidden'>
              <button
                id='bars'
                className='flex px-3 py-2 border rounded border-fuchsia-200 text-fuchsia-200 hover:text-fuchsia-300'
                onClick={toggleMenu} // Llamar a la función cuando se hace clic
              >
                <FontAwesomeIcon icon={faBars} />
                <title>Menu</title>
              </button>
              {isMenuVisible && (
                <div
                  id='menu'
                  className='absolute left-0 mt-11 z-50 bg-fuchsia-600 border border-fuchsia-200 rounded-md shadow-md'
                >
                  <div>
                    <a className={`${borel.className} block px-3 pt-4 pb-1 text-xl text-fuchsia-200 hover:bg-fuchsia-300 hover:text-fuchsia-700`} href='/'>
                      Home
                    </a>
                  </div>
                  <div>
                    <a
                      className={`${borel.className} block px-3 py-2 text-xl text-fuchsia-200 hover:bg-fuchsia-300 hover:text-fuchsia-700`}
                      href='/about'
                    >
                      Acerca de
                    </a>
                  </div>
                  <div>
                    <a
                      className={`${borel.className} block px-3 py-2 text-xl text-fuchsia-200 hover:bg-fuchsia-300 hover:text-fuchsia-700`}
                      href='/products'
                    >
                      Productos
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className='hidden h-full md:flex bg-fuchsia-600 h-full items-center justify-center'>
              <div className='flex h-full items-center ' >
                <a className={`${borel.className} flex h-full px-3 pt-4 pb-1 text-xl text-fuchsia-200 hover:bg-fuchsia-300 hover:text-fuchsia-700`} href='/'>
                  Home
                </a>
              </div>
              <div className='flex h-full items-center ' >
                <a
                  className={`${borel.className} flex h-full px-3 py-4 text-xl text-fuchsia-200 hover:bg-fuchsia-300 hover:text-fuchsia-700`}
                  href='/about'
                >
                  Acerca de
                </a>
              </div>
              <div className='flex h-full items-center ' >
                <a
                  className={`${borel.className} flex h-full px-3 py-4 text-xl text-fuchsia-200 hover:bg-fuchsia-300 hover:text-fuchsia-700`}
                  href='/products'
                >
                  Productos
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
        <section className={borel.className + ' flex content-center '} >
          <div className="grid h-full md:grid-cols-3 md:grid-rows-1 bg-fuchsia-600 flex p-3 h-64 rounded-t-3xl content-center w-full">
            <div className="flex flex-col p-5">
              <ul>
                <li className="list-group-item">
                  <a href="./" className="text-fuchsia-200 text-xl">Inicio</a>
                </li>
                <li className="list-group-item">
                  <a href="./contacts" className="text-fuchsia-200 text-xl">Contactanos</a>
                </li>
                <li className="list-group-item">
                  <a href="./subscribe" className="text-fuchsia-200 text-xl">Suscribite!!!</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:col-span-2 items-center ">
              <h2 className="text-fuchsia-200 text-3xl m-3 py-3">Seguinos en nuestras redes !!!</h2>
              <div className="flex pb-3">
                <a className="link-redes" href="https://www.facebook.com/pascuala.pequenascosturas" target="_blank">
                  <FontAwesomeIcon className='text-fuchsia-200 p-2' size='3x' icon={faFacebook} />
                </a>
                <a className="link-redes" href="https://www.instagram.com/pascuala2012/" target="_blank">
                  <FontAwesomeIcon className='text-fuchsia-200 p-2' size='3x' icon={faSquareInstagram} />
                </a>
                <a className="link-redes" href="mailto:" target="_blank">
                  <FontAwesomeIcon className='text-fuchsia-200 p-2' size='3x' icon={faAt} />
                </a>
                <a className="link-redes" href="https://api.whatsapp.com/send?phone=5492233023017" target="_blank">
                  <FontAwesomeIcon className='text-fuchsia-200 p-2' size='3x' icon={faSquareWhatsapp} />
                </a>
              </div>
            </div>

          </div>
        </section>
        <footer>
          <div className="bg-fuchsia-700 p-3">
            <p>&copy; Grupo C4</p>
          </div>
        </footer>
      </body >
    </html >
  )
}
