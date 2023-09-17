'use clilent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareWhatsapp, faSquareInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { Norican, Borel } from 'next/font/google'

const callouts = [
  {
    name: 'American-Boy',
    description: 'American-boy media estacion',
    imageSrc: 'images/productos/IMG_20221202_130159175.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'American-girl',
    description: 'American-girl Jardinero rosa mas pulover',
    imageSrc: 'images/productos/IMG_20230519_152819448.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Barbie',
    description: 'Barbie morocha primavera-verano',
    imageSrc: 'images/productos/IMG_20230418_134839646.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

const norican = Norican({ 
  subsets: ['latin'],
  weight:'400' })

const borel = Borel({ 
    subsets: ['latin'],
    weight:'400' })

export default function Home() {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Colecciones Primavera-Verano</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className={borel.className + ' flex content-center'} >
        <div className="grid grid-cols-3 bg-fuchsia-600 flex p-3 h-64 content-center">
          <div className="flex flex-col p-5">
            <ul>
              <li className="list-group-item">
                <a href="./index.html" className="text-fuchsia-200 text-xl">Inicio</a>
              </li>
              <li className="list-group-item">
                <a href="#" className="text-fuchsia-200 text-xl">Preguntas frecuentes</a>
              </li>
              <li className="list-group-item">
                <a href="#" className="text-fuchsia-200 text-xl">Contactanos</a>
              </li>
              <li className="list-group-item">
                <a href="#" className="text-fuchsia-200 text-xl">Suscribite!!!</a>
              </li>
              <li className="list-group-item">
                <a href="#" className="text-fuchsia-200 text-xl">Medios de pago</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center w-max ">
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
    </div>
  )
}
