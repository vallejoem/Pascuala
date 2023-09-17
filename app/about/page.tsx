'use client'
import Image from 'next/image'
import { Borel } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareWhatsapp, faSquareInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

const borel = Borel({
    subsets: ['latin'],
    weight: '400'
})

export default function About() {
    return (
        <div>
            <div className='flex  bg-fuchsia-100'>
                <div className="flex flex-col items-center justify-center shadow-xl">
                    <h1 className={`${borel.className} text-3xl text-fuchsia-800 py-8`}>Nuestra historia</h1>
                    <div className='w-4/5 bg-fuchsia-300 mb-10 rounded-lg h-full'>
                        <Image
                            className='float-right p-5'
                            src="/images/american.jpeg"
                            alt="american-girl"
                            width={400}
                            height={240}
                            objectFit="cover"
                        />
                        <div>
                            <h1 className={`${borel.className} text-3xl text-fuchsia-800 px-5 pt-5 pb-2`}> Pascuala pequeñas costuras</h1>
                            <h2 className={`${borel.className} text-fuchsia-800 px-5 py-1`}>Mar del Plata, Buenos Aires</h2>
                            <p className={`${borel.className} text-fuchsia-800 px-5 py-1`}>Por Gabriela Viviana Díaz</p>
                            <p className={`${borel.className} text-fuchsia-800 px-5 pt-1 pb-5`}>Gabriela confecciona ropa para muñecas
                                vestidos, carteras, sombreros, salidas de
                                baño, camisas y pantalones. Trabaja con
                                telas de distintas texturas y colores de
                                excelente calidad además de simpáticos
                                accesorios. Ella misma diseña sus propios
                                moldes, corta, cose y arma las prendas a
                                mano. Cada día sus productos tienen más
                                éxito, por eso participó en ferias
                                navideñas y espera pronto poder abrir su
                                propio local.
                            </p>
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



