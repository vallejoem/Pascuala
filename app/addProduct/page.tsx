'use client'
import { Borel } from 'next/font/google'
import { useState } from 'react';
import { NextPage } from 'next';
import ProductList from '../components/ProductList';
import CreateProductForm from '../components/CreateProductForm';

const borel = Borel({
    subsets: ['latin'],
    weight: '400'
})

interface Product {
    // Define la interfaz del objeto Product según tus necesidades
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

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
                // Manejar errores de la API
                const data = await response.json();
                console.error('Error creating product:', data.message);
            }
        } catch (error) {
            // Manejar errores de red u otros
            console.error('Network error:', error);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await fetch('/products');
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            } else {
                console.error('Error fetching products:', response.status);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return (
        <div className={`${borel.className} mt-48 md:mt-44`}>
            <h1 className=''>Add Product Page</h1>
            <CreateProductForm onCreateProduct={handleCreateProduct} />
            
        </div>
    );
};

export default AddProductPage;
