'use client'
import { Borel } from 'next/font/google'
import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import ProductList from '../components/ProductList';
import CreateProductForm from '../components/CreateProductForm';
import { Product } from '../types/types';

const borel = Borel({
    subsets: ['latin'],
    weight: '400'
})

const AddProductPage: NextPage = () => {
    const [products, setProducts] = useState<Product[]>([]);

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
                // Producto creado con éxito, actualizar la lista de productos
                fetchProducts();
            } else {
                // Maneja errores de la API
                const data = await response.json();
                console.error('Error creating product:', data.message);
            }
        } catch (error) {
            // Maneja errores de red u otros
            console.error('Network error:', error);
        }
    };

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
                // Verificar si la respuesta es JSON antes de intentar analizar
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

    useEffect(() => {
        // Al cargar el componente, cargar la lista de productos
        fetchProducts();
    }, []);

    return (
        <div className={`${borel.className} mt-48 md:mt-44`}>
            <h1 className=''>Add Product Page</h1>
            <CreateProductForm onCreateProduct={handleCreateProduct} />
            <ProductList products={products} />
        </div>
    );
};

export default AddProductPage;
