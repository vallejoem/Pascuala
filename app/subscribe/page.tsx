'use client'
import { Borel } from 'next/font/google'
import { useState, useEffect } from 'react';

const borel = Borel({
    subsets: ['latin'],
    weight: '400'
})

export default function subscribe() {
    return (
        <section className={`${borel.className} mt-48 md:mt-44`}>
            <div className='flex flex-col justify-center place-content-evenly bg-fuchsia-300 h-5/6 w-auto md:mx-10 md:my-10 md:rounded-xl'>
                <div>
                    <h1 className='text-center text-fuchsia-700 text-3xl my-5 py-3'>Suscribite a las novedades</h1>
                </div>
                <div className='flex flex-col w-auto'>
                    <form className='flex flex-col items-center' action="">
                        <label  className='flex w-3/4 text-left text-fuchsia-900 pt-2' htmlFor="">Nombre:</label>
                        <input  className='flex w-3/4 my-1 py-1' type="text" />
                        <label  className='flex w-3/4 text-left text-fuchsia-900 pt-2' htmlFor="">Apellido:</label>
                        <input  className='flex w-3/4 my-1 py-1' type="text" />
                        <label  className='flex w-3/4 text-left text-fuchsia-900 pt-2' htmlFor="">Correo Electronico:</label>
                        <input  className='flex w-3/4 my-1 py-1' type="text" />
                        <label  className='flex w-3/4 text-left text-fuchsia-900 pt-2' htmlFor="">Telefono:</label>
                        <input  className='flex w-3/4 my-1 py-1' type="number" />
                        <button className='text-center text-fuchsia-200 mt-3 mb-8 bg-fuchsia-500 w-3/4 rounded-lg pt-3 pb-2 hover:text-fuchsia-900 hover:bg-fuchsia-400' >Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}