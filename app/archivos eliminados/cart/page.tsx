'use client'
import Image from 'next/image'
import { Borel } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const borel = Borel({
    subsets: ['latin'],
    weight: '400'
})

export default function Cart() {
    return (
        <div className='mt-48 md:mt-44'>
            <div className='flex  bg-fuchsia-100'>
                <div className="flex flex-col items-center justify-center shadow-xl w-full">
                    <h1 className={`${borel.className} text-3xl text-fuchsia-800 py-8`}>Carrito</h1>
                    <div className='relative md:w-4/5 bg-fuchsia-300 mb-10 rounded-lg h-full'>
                        <table className="w-full text-gray-500">
                            <thead className="bg-gray-50 text-gray-700 uppercase">
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio unitario</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listProducts.map((product, index) => (
                                        <>
                                            <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                                <td className="px-6 py-4">{product.dni}</td>
                                                <td className="px-6 py-4">{product.firstName}</td>
                                                <td className="px-6 py-4">{product.lastName}</td>
                                                <td className="px-6 py-4">{product.email}</td>
                                                <td className="px-6 py-4">{product.phone}</td>
                                                <td className="px-6 py-4">
                                                    <button type="button" onClick={() => { handleDeleteContact(contact.dni) }} className="rounded-md bg-red-600 px-3 py-2  m-1"><FontAwesomeIcon icon={faTrashCan} className="h-6 w-6 text-white" /></button>
                                                </td>
                                            </tr>
                                        </>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )

}



