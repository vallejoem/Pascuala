
import React from 'react';
import { useState } from 'react';
import { Product } from '../types/types';
import CreateProductForm from '../components/CreateProductForm';
import { Alert } from 'flowbite-react';


interface ProductListProps {
    products: Product[];
    fetchProducts: () => void;
    setCreateFormVisibility: (visible: boolean) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products,  fetchProducts, setCreateFormVisibility  }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleEdit = (productId: number) => {
        const productToEdit = products.find(product => product.id === productId);
        if (productToEdit) {
            fetchProducts();
            setSelectedProduct(productToEdit);
            setCreateFormVisibility(false);
        }
    };

    const handleDelete = async (productId: number) => {
        try {
            // Lógica para eliminar el producto por ID desde el servidor
            const response = await fetch(`http://localhost:3500/products/${productId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                fetchProducts();
                console.log('Producto eliminado con éxito');
                setCreateFormVisibility(false);
            } else {   
                const data = await response.json();
                console.error('Error al eliminar producto:', data.message);
            }

        } catch (error) {
            console.error('Error al eliminar producto:', error);
        };
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
                            <td>
                                {/* Botón de editar */}
                                <button onClick={() => handleEdit(product.id)}>Editar</button>
                                {/* Botón de eliminar */}
                                <button onClick={() => handleDelete(product.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedProduct && (
                <CreateProductForm
                    onSubmit={() => {
                        setSelectedProduct(null);
                        
                    }}
                    fetchProducts={fetchProducts}
                    productToEdit={selectedProduct}
                />
            )}
        </div>

    );
};

export default ProductList;
