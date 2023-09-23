'use client'
import { Borel } from 'next/font/google'

const borel = Borel({
    subsets: ['latin'],
    weight: '400'
})

export default function contacts() {
    return (
        <section className={`${borel.className} mt-48 md:mt-44`}>
            <div className='flex flex-col items-center justify-center place-content-evenly bg-fuchsia-300 h-5/6 w-auto md:mx-10 md:my-10 md:rounded-xl'>
                <div className='flex flex-col w-3/4 justify-center'>
                    <h1 className='text-center text-fuchsia-700 text-3xl my-5 py-3'>Contactanos</h1>
                    <p className={`${borel.className}  text-center text-fuchsia-700 text-xl my-5 px-10 py-3 w-full`}>Estaremos encantados de solucionarte cualquier duda o incidencia. Puedes escribirnos a través de este formulario y a la mayor brevedad posible nos pondremos en contacto contigo. También puedes llamarnos por teléfono.</p>
                </div>
                <div className='flex flex-col w-full'>
                    <form className='flex flex-col items-center' action="">
                        <label  className='flex w-3/4 text-left text-fuchsia-900 pt-2' htmlFor="">Nombre:</label>
                        <input  className='flex w-3/4 my-1 py-1' type="text" />
                        <label  className='flex w-3/4 text-left text-fuchsia-900 pt-2' htmlFor="">Correo Electronico:</label>
                        <input  className='flex w-3/4 my-1 py-1' type="text" />
                        <label  className='flex w-3/4 text-left text-fuchsia-900 pt-2' htmlFor="">Comentarios:</label>
                        <textarea  className='flex w-3/4 my-1 py-1' />
                        <button className='text-center text-fuchsia-200 mt-3 mb-8 bg-fuchsia-500 w-3/4 rounded-lg pt-3 pb-2 hover:text-fuchsia-900 hover:bg-fuchsia-400' >Enviar</button>
                    </form>
                </div>
                <div>
                    <h1 className='text-left px-10 text-fuchsia-700 text-xl my-5'>Gabriela Viviana Diaz</h1>
                    <h1 className='text-left px-10 text-fuchsia-700 text-xl my-5'>Direccion: Catamarca 1930 local 4</h1>
                    <h1 className='text-left px-10 text-fuchsia-700 text-xl my-5 pb-10'>Telefonos: (0223) 4755473 / (223) 3023017</h1>
                </div>
            </div>
        </section>
    )
}