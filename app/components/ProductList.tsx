
import React from 'react';

import { Product } from '../types/types';


interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    if (!Array.isArray(products)) {
        console.log('Estructura de productos en ProductList:', products);
        return <div>Error: No se pudo cargar la lista de productos.</div>;
    }
    return (
        <div className='bg-fuchsia-300'>
            <h2 className='bg-fuchsia-500'>Lista de Productos</h2>
            <table>
                <thead className='bg-fuchsia-200'>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody className='bg-fuchsia-700'>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    );
};

export default ProductList;
