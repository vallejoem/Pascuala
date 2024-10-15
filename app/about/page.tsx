'use client'
import Image from 'next/image'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
    subsets: ['latin'],
    weight: '400'
})

export default function About() {
    return (
        <div className='mt-48 md:mt-44'>
            <div className='flex  bg-slate-100'>
                <div className="flex flex-col items-center justify-center shadow-xl">
                    <h1 className={`${roboto.className} text-3xl text-slate-800 py-8`}>Nuestra historia</h1>
                    <div className='relative md:w-4/5 bg-slate-300 mb-10 rounded-lg h-full'>
                        <Image
                            className='float-none md:float-right p-5'
                            src="/images/american.jpeg" 
                            alt="american-girl"
                            width={400}
                            height={240}
                            objectFit="cover"
                        />
                        <div>
                            <h1 className={`${roboto.className} text-3xl text-slate-800 px-5 pt-8 pb-2`}> Pascuala pequeñas costuras</h1>
                            <h2 className={`${roboto.className} text-slate-800 px-5 py-1`}>Mar del Plata, Buenos Aires</h2>
                            <p className={`${roboto.className} text-slate-800 px-5 py-1`}>Por Gabriela Viviana Díaz</p>
                            <p className={`${roboto.className} text-lg text-slate-800 px-5 pt-1 pb-5`}>Gabriela confecciona ropa para muñecas
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



