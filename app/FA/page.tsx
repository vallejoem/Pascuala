'use client'
import { Borel } from 'next/font/google'

const borel = Borel({
    subsets: ['latin'],
    weight: '400'
})

export default function FA() {
    return (
        <section className={`${borel.className} mt-60 md:mt-44`}>
            <div className='flex flex-col justify-center place-content-evenly bg-fuchsia-300 h-5/6 w-auto md:mx-10 md:my-10 md:rounded-xl'>
                <div>
                    <h1 className='text-center text-fuchsia-700 text-3xl my-5 py-3'>Como comprar </h1>
                </div>
                <div className='flex flex-col ms-10 mb-5 w-auto'>
                    <ol className='text-fuchsia-950 list-decimal'>
                        <li><p>Elegí el producto que deseás comprar.</p></li>
                        <li><p>Hacé clic en el botón de "Agregar al carrito". Esto agregará el producto a tu carrito y te llevará al mismo.</p></li>
                        <li><p>Podés seguir agregando otros productos al carrito o sino haz clic en "Iniciar Compra".</p></li>
                        <li><p>Completá tus datos de contacto y hacé clic en "Continuar".</p></li>
                        <li><p>Ingresá la dirección a donde deseas recibir el producto. Luego hacé clic en "Continuar".</p></li>
                        <li><p>Eligí el medio de pago. Una vez que hayas hecho, haz clic en "Continuar".</p></li>
                        <li><p>Finalmente en la página de Confirmación de compra podés revisar toda la información de la compra. Luego, clic en "Continuar".</p></li>
                        <li><p>Ahí serás redirigido a otra pantalla para que completes los datos sobre la forma de pago elegida. Después de confirmar la compra recibirás un correo de nuestra parte, ese no será un comprobante de pago.</p></li>
                        <li><p>Una vez acreditado el pago, haremos el envío correspondiente de los productos que hayas comprado.</p></li>
                        
                    </ol>
                </div>
            </div>
        </section>
    )
}