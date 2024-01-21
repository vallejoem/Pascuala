'use client'

import React, { useState, useEffect } from 'react';
import { Product } from '../types/types';
import Card from '../components/card';
import { Borel } from 'next/font/google';



const borel = Borel({
    subsets: ['latin'],
    weight: '400'
})


export default function Productos() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
    const [products, setProducts] = useState<Product[]>([]);


    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3500/products');
            if (!response.ok) {
                throw new Error('Error al obtener los productos');
            }
            const data = await response.json();

            // Parsear las imágenes para todos los productos
            const productsWithParsedImages = data.data.map((product: Product) => {
                try {
                    const imagesArray = JSON.parse(product.images) as string[];
                    return { ...product, images: imagesArray };
                } catch (error) {
                    console.error("Error al analizar las imágenes del producto:", error);
                    return product;
                }
            });

            console.log(productsWithParsedImages);
            setProducts(productsWithParsedImages);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    useEffect(() => {


        fetchData();
    }, []);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    }

    const handleCategoriaClick = (categoria: string) => {
        setCategoriaSeleccionada(categoria);
    }

    const productosFiltrados = categoriaSeleccionada
        ? products.filter((product) => product.categoria === categoriaSeleccionada)
        : products;


    return (
        <div className="bg-white mt-48 md:mt-28">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className={`${borel.className} pt-3 text-3xl md:ms-3 font-bold tracking-tight text-fuchsia-950`}>Productos</h2>
                <div className='flex justify-center'>
                    <a className={`${borel.className} m-1 md:pt-3 text-lg md:text-xl md:m-3 font-bold tracking-tight text-fuchsia-950 hover:text-fuchsia-700`}
                        onClick={() => handleCategoriaClick('muñecas')}>
                        Muñecas
                    </a>
                    <a className={`${borel.className} m-1 md:pt-3 text-lg md:text-xl md:m-3 font-bold tracking-tight text-fuchsia-950 hover:text-fuchsia-700`}
                        onClick={() => handleCategoriaClick('indumentaria')}>
                        Indumentaria
                    </a>
                    <a className={`${borel.className} m-1 md:pt-3 text-lg md:text-xl md:m-3 font-bold tracking-tight text-fuchsia-950 hover:text-fuchsia-700`}
                        onClick={() => handleCategoriaClick('accesorios')}>
                        Accesorios
                    </a>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {productosFiltrados.map((product) => (
                        <div key={product.id} className="group relative" onClick={() => handleProductClick(product)}>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={`http://localhost:3500/public/products/${product.images[0]}`}

                                    alt={product.name}
                                    className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedProduct && (
                <Card
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
}
