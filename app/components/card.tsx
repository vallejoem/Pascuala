import ButtonBuy from './button';
import AddCart from './addCart';
import React, { useState } from 'react';
import { Product } from '../types/types';


type CardProps = {
    product: Product;
    onClose: () => void;
}


export default function Card({ product, onClose }: CardProps) {
    // Estado para manejar la imagen seleccionada
    const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);

    // Función que actualiza la imagen principal cuando se hace clic en una miniatura
    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    }
    return (
        <div className="z-30 bg-white fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
            <div className="p-8 max-w-md md:max-w-none bg-gray-100 rounded-lg">
                <button className="absolute top-2 right-2 text-md text-gray-500 hover:text-gray-700" onClick={onClose}>
                    Cerrar
                </button>
                <h2 className="text-3xl mt-16 font-bold text-gray-900 md:hidden ">Detalles del Producto</h2>

                <div className="mt-3 md:mt-16 mb-6 md:grid md:grid-cols-6 ">
                    <div className='hidden md:flex flex-col items-center'>
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={`http://localhost:3500/public/products/${image}`}
                                alt={`${product.name} - Image ${index + 1}`}
                                className="mt-4 h-52 w-full w-5/6 object-contain object-center cursor-pointer"
                                onClick={() => handleImageClick(image)}  // Al hacer clic se actualiza la imagen principal
                            />
                        ))}
                    </div>
                    <div className='flex flex-col col-span-3 justify-center items-center'>
                        <h3 className="w-full text-xl font-semibold text-gray-900 md:hidden ">{product.name}</h3>
                        <img
                            src={`http://localhost:3500/public/products/${selectedImage}`}  // Muestra la primera imagen en la sección principal
                            alt={`${product.name} - Main Image`}
                            className="mt-4 h-full md:h-full w-full md:w-3/4 object-contain object-center"
                        />
                    </div>
                    <div className='md:mt-5 flex flex-col col-span-2'>
                        <h3 className="hidden md:block w-full text-xl font-semibold text-gray-900">{product.name}</h3>
                        <div className='w-full py-3 grid grid-rows-1 gap-2'>

                            
                            <ButtonBuy label="Consultar" linkTo="https://api.whatsapp.com/send?phone=5492233023017" />
                            

                        </div>
                        <h2 className="text-lg py-2 font-bold text-gray-900">Descripcion</h2>
                        <p className="text-sm text-gray-500">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

