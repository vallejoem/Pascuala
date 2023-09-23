'use client'
import Image from 'next/image'
import { Borel } from 'next/font/google'


const borel = Borel({
    subsets: ['latin'],
    weight: '400'
})

export default function About() {
    return (
        <div className='mt-48 md:mt-44'>
            <div className='flex  bg-fuchsia-100'>
                <div className="flex flex-col items-center justify-center shadow-xl">
                    <h1 className={`${borel.className} text-3xl text-fuchsia-800 py-8`}>Nuestra historia</h1>
                    <div className='relative md:w-4/5 bg-fuchsia-300 mb-10 rounded-lg h-full'>
                        <Image
                            className='float-none md:float-right p-5'
                            src="/images/american.jpeg" 
                            alt="american-girl"
                            width={400}
                            height={240}
                            objectFit="cover"
                        />
                        <div>
                            <h1 className={`${borel.className} text-3xl text-fuchsia-800 px-5 pt-8 pb-2`}> Pascuala pequeñas costuras</h1>
                            <h2 className={`${borel.className} text-fuchsia-800 px-5 py-1`}>Mar del Plata, Buenos Aires</h2>
                            <p className={`${borel.className} text-fuchsia-800 px-5 py-1`}>Por Gabriela Viviana Díaz</p>
                            <p className={`${borel.className} text-lg text-fuchsia-800 px-5 pt-1 pb-5`}>Gabriela confecciona ropa para muñecas
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
            
        </div>
    )

}



