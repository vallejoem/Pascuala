'use client'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: '400'
})

export default function contacts() {
    return (
        <section className={`${roboto.className} mt-48 md:mt-44`}>
            <div className='flex flex-col items-center justify-center place-content-evenly bg-slate-300 h-5/6 w-auto md:mx-10 md:my-10 md:rounded-xl'>
                <div className='flex flex-col w-3/4 justify-center'>
                    <h1 className='text-center text-slate-700 text-3xl my-5 py-3'>Contactanos</h1>
                    <p className={`${roboto.className}  text-center text-slate-700 text-xl my-5 px-10 py-3 w-full`}>Estaremos encantados de solucionarte cualquier duda o incidencia. Puedes escribirnos a través de este formulario y a la mayor brevedad posible nos pondremos en contacto contigo. También puedes llamarnos por teléfono.</p>
                </div>
                <div className='flex flex-col w-full'>
                    <form className='flex flex-col items-center' action="">
                        <label  className='flex w-3/4 text-left text-slate-900 pt-2' htmlFor="">Nombre:</label>
                        <input  className='flex w-3/4 my-1 py-1' type="text" />
                        <label  className='flex w-3/4 text-left text-slate-900 pt-2' htmlFor="">Correo Electronico:</label>
                        <input  className='flex w-3/4 my-1 py-1' type="text" />
                        <label  className='flex w-3/4 text-left text-slate-900 pt-2' htmlFor="">Comentarios:</label>
                        <textarea  className='flex w-3/4 my-1 py-1' />
                        <button className='text-center text-slate-200 mt-3 mb-8 bg-slate-500 w-3/4 rounded-lg pt-3 pb-2 hover:text-slate-900 hover:bg-slate-400' >Enviar</button>
                    </form>
                </div>
                <div>
                    <h1 className='text-left px-10 text-slate-700 text-xl my-5'>Diego Martin Molina</h1>
                    <h1 className='text-left px-10 text-slate-700 text-xl my-5'>Direccion: ????????</h1>
                    <h1 className='text-left px-10 text-slate-700 text-xl my-5 pb-10'>Telefonos: (0223) 4755473 / (223) 3023017</h1>
                </div>
            </div>
        </section>
    )
}