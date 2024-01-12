'use client'
import { Borel } from 'next/font/google'
import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import ProductList from '../components/ProductList.tsx';
import CreateProductForm from '../components/CreateProductForm.jsx';
import { Product } from '../types/types';


const borel = Borel({
    subsets: ['latin'],
    weight: '400'
})

const AddProductPage: NextPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isCreateFormVisible, setCreateFormVisibility] = useState(false);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3500/products');
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                const productsWithParsedData = data.data.map((product: Product) => ({
                    ...product,
                    images: product.images
                }));

                setProducts(productsWithParsedData);
            } else {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();
                    console.error('Error fetching products:', data.message);
                } else {
                    console.error('Error fetching products. Unexpected response:', response.statusText);
                }
            }
        } catch (error) {
            console.error('error de red:', error);
        }
    };

    const handleCreateProduct = async (newProduct: Product) => {
        // Lógica para enviar el nuevo producto al servidor y actualizar la lista
        try {
            const response = await fetch('/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            if (response.ok) {
                console.log('Producto creado exitosamente');
                setCreateFormVisibility(false);
                fetchProducts();
                
            } else {
                const data = await response.json();
                console.error('Error creating product:', data.message);
            }
        } catch (error) {
            
            console.error('Network error:', error);
        }
    };

    

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className={`${borel.className} bg-fuchsia-200 flex flex-col items-center mt-60 md:mt-44`}>
            <h1 className='text-xl text-fuchsia-800'>Agregar nuevos productos</h1>
            <button className='m-3 align-middle text-center bg-fuchsia-300 p-3 text-fuchsia-800 border border-fuchsia-950 rounded-lg' onClick={() => setCreateFormVisibility(true)}>
                Agregar nuevo producto
            </button>
            {isCreateFormVisible && (
                <CreateProductForm onSubmit={handleCreateProduct} fetchProducts={fetchProducts} />
            )}
            <ProductList products={products} fetchProducts={fetchProducts} setCreateFormVisibility={setCreateFormVisibility} />
        </div>
    );
};

export default AddProductPage;
