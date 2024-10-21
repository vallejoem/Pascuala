'use client'
import Image from 'next/image'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
    subsets: ['latin'],
    weight: '400'
})

export default function About() {
    return (
        <div className='mt-20 md:mt-44'>
            <div className='flex  bg-slate-100'>
                <div className="flex flex-col items-center justify-center shadow-xl">
                    <h1 className={`${roboto.className} text-3xl text-slate-800 py-8`}>Nuestra historia</h1>
                    <div className='relative md:w-4/5 bg-slate-300 mb-10 rounded-lg h-full'>
                        <Image
                            className='float-none md:float-right p-5'
                            src="/images/about.jpg" 
                            alt="molina"
                            width={400}
                            height={240}
                            objectFit="cover"
                        />
                        <div>
                            <h1 className={`${roboto.className} text-3xl text-slate-800 px-5 pt-8 pb-2`}> Molina Usados seleccionados</h1>
                            <h2 className={`${roboto.className} text-slate-800 px-5 py-1`}>Mar del Plata, Buenos Aires</h2>
                            <p className={`${roboto.className} text-slate-800 px-5 py-1`}>Por Molina Diego</p>
                            <p className={`${roboto.className} text-lg text-slate-800 px-5 pt-1 pb-5`}>Diego, Gastón y Maxi tienen una agencia de autos usados en Mar del Plata, ubicada en la calle Primera Junta 2000. Se especializan en la venta de vehículos en excelente estado, con revisiones mecánicas completas y garantía incluida. Ofrecen distintas opciones de financiación para facilitar la compra, adaptándose a las necesidades de cada cliente. Además, brindan un servicio integral de asesoramiento en gestoría, acompañando a los compradores en todos los trámites necesarios. Gracias a su compromiso y confianza, la agencia se ha ganado una excelente reputación en la ciudad y sigue creciendo cada día.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )

}



