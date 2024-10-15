'use client'
import { Roboto } from 'next/font/google';
import SubscribeForm from '../components/subcribeForm';


const roboto = Roboto({
    subsets: ['latin'],
    weight: '400'
})

export default function subscribe() {
    return (
        <section className={`${roboto.className} mt-48 md:mt-44`}>
            <div className='flex flex-col justify-center place-content-evenly bg-fuchsia-300 h-5/6 w-auto md:mx-10 md:my-10 md:rounded-xl'>
                <div>
                    <h1 className='text-center text-fuchsia-700 text-3xl my-5 py-3'>Suscribite a las novedades</h1>
                </div>
                <div className='flex flex-col w-auto'>
                    <SubscribeForm />
                </div>
                
            </div>
        </section>
    )
}