
import React from 'react';
import { useState } from 'react';
import { Product } from '../types/types';
import CreateProductForm from '../components/CreateProductForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare,faTrashCan } from '@fortawesome/free-solid-svg-icons';


interface ProductListProps {
    products: Product[];
    fetchProducts: () => void;
    setCreateFormVisibility: (visible: boolean) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products,  fetchProducts, setCreateFormVisibility  }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const hideForm = () => {
        setSelectedProduct(null);
        setCreateFormVisibility(true); // Cambia la visibilidad del formulario a true
    };

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
        <div className='bg-teal-200 w-full md:w-3/4'>
            <h2 className='p-3 bg-teal-400 w-full '>Lista de Productos</h2>
            <div className="overflow-x-auto">
            <table className='w-full table-auto border-collapse border border-slate-500 mb-5'>
                <thead className='bg-teal-300 '>
                    <tr className='bg-teal-300 align-middle text-center'>
                        <th className='py-2 align-middle text-center'>Categoria</th>
                        <th className='py-2 align-middle text-center'>Nombre</th>
                        <th className='py-2 align-middle text-center'>Descripción</th>
                        <th className='py-2 align-middle text-center'>Precio</th>
                        <th className='py-2 align-middle text-center'>Stock</th>
                        <th className='py-2 align-middle text-center'></th>
                    </tr>
                </thead>
                <tbody className='bg-teal-400 align-middle text-center'>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td className='py-2 align-middle text-center'>{product.categoria}</td>
                            <td className='py-2 align-middle text-center'>{product.name}</td>
                            <td className='py-2 align-middle text-center'>{product.description}</td>
                            <td className='py-2 align-middle text-center'>{product.price}</td>
                            <td className='py-2 align-middle text-center'>{product.stock}</td>
                            <td className='py-2 align-middle text-center'>
                                {/* Botón de editar */}
                                <button className='px-2' onClick={() => handleEdit(product.id)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                {/* Botón de eliminar */}
                                <button className='px-2' onClick={() => handleDelete(product.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            {selectedProduct && (
                <CreateProductForm
                    onSubmit={() => {
                        setSelectedProduct(null);
                        
                    }}
                    fetchProducts={fetchProducts}
                    productToEdit={selectedProduct}
                    hideForm={hideForm}
                />
            )}
        </div>

    );
};

export default ProductList;
