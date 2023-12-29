'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Norican, Borel } from 'next/font/google'
import { Product } from '../app/types/types';
import { useState, useEffect } from 'react';


const norican = Norican({ 
  subsets: ['latin'],
  weight:'400' })

const borel = Borel({ 
    subsets: ['latin'],
    weight:'400' })

export default function Home() {
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
                    const imagesArray = JSON.parse(product.images);
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


  return (
    <div className='mt-48 md:mt-28'>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className={`${borel.className} pt-3 text-3xl font-bold text-fuchsia-950`}>Colecciones Primavera-Verano</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {products.map((products) => (
                <div key={products.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={`http://localhost:3500/public/products/${products.images[0]}`}
                      alt={products.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    
                      <span className="absolute inset-0" />
                      {products.name}
                    
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{products.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
