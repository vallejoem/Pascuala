import React from 'react';
import ButtonBuy from '../components/button';
import AddCart from '../components/addCart';

type Product = {
    id: number;
    name: string;
    color: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
};

type CardProps = {
    product: Product;
    onClose: () => void;
}

export default function Card({ product, onClose }: CardProps) {
    return (
        <div className="z-20 bg-white fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
            <div className="p-8 max-w-md md:max-w-none bg-gray-100 rounded-lg">
                <button className="absolute top-2 right-2 text-md text-gray-500 hover:text-gray-700" onClick={onClose}>
                    Cerrar
                </button>
                <h2 className="text-3xl mt-16 font-bold text-gray-900 md:hidden ">Detalles del Producto</h2>

                <div className="mt-6 md:grid md:grid-cols-6 ">
                    <div className='hidden md:flex flex-col items-center'>
                        <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="mt-4 h-52 w-full w-5/6 object-cover object-center"
                        />
                        <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="mt-4 h-52 w-full w-5/6 object-cover object-center"
                        />
                        <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="mt-4 h-52 w-full w-5/6 object-cover object-center"
                        />
                    </div>
                    <div className='flex flex-col col-span-3 justify-center items-center'>
                        <h3 className="w-full text-xl font-semibold text-gray-900 md:hidden ">{product.name}</h3>
                        <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="mt-4 h-full md:h-full w-full md:w-3/4 object-cover object-center"
                        />
                    </div>
                    <div className='flex flex-col col-span-2'>
                        <h3 className="hidden md:block w-full text-xl font-semibold text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500">Color: {product.color}</p>
                        <p className="text-xl py-3 font-medium text-gray-900">{product.price}</p>
                        <div className='w-full grid grid-rows-2 gap-2'>
                            <ButtonBuy label="Comprar" linkTo="#" />
                            <AddCart label="Agregar al carrito" linkTo="#" />
                        </div>
                        <h2 className="text-lg py-2 font-bold text-gray-900">Descripcion</h2>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tenetur ratione eveniet commodi modi iusto perferendis dignissimos itaque omnis maxime delectus voluptates eos deserunt laborum provident, quo facilis deleniti fugit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

