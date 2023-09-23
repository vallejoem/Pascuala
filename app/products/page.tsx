'use client'

import React, { useState } from 'react';
import products from './productos';
import Card from '../components/card';
import { Borel } from 'next/font/google';

const borel = Borel({
    subsets: ['latin'],
    weight: '400'
})

type Product = {
    id: number;
    name: string;
    color: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
};

export default function Productos() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="bg-white mt-48 md:mt-28">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className={`${borel.className} pt-3 text-3xl font-bold tracking-tight text-fuchsia-950`}>Productos</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative" onClick={() => handleProductClick(product)}>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
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
