import { useState, useEffect } from 'react';
import { Alert } from 'flowbite-react';

const CreateProductForm = ({ onSubmit, fetchProducts,  productToEdit }) => {
    const [productCode, setProductCode] = useState(productToEdit ? productToEdit.code_product : '');
    const [productCategoria, setProductCategoria] = useState(productToEdit ? productToEdit.categoria : '');
    const [productName, setProductName] = useState(productToEdit ? productToEdit.name : '');
    const [productDescription, setProductDescription] = useState(productToEdit ? productToEdit.description : '');
    const [productPrice, setProductPrice] = useState(productToEdit ? productToEdit.price : '');
    const [productStock, setProductStock] = useState(productToEdit ? productToEdit.stock : '');
    const [productImages, setProductImages] = useState([]);

    useEffect(() => {
        if (productToEdit) {
            setProductCode(productToEdit.code_product || '');
            setProductCategoria(productToEdit.categoria || '');
            setProductName(productToEdit.name || '');
            setProductDescription(productToEdit.description || '');
            setProductPrice(productToEdit.price || '');
            setProductStock(productToEdit.stock || '');
        }
    }, [productToEdit]);


    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setProductImages(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('code_product', productCode);
        formData.append('categoria', productCategoria);
        formData.append('name', productName);
        formData.append('description', productDescription);
        formData.append('price', productPrice);
        formData.append('stock', productStock);

        productImages.forEach((image, index) => {
            formData.append('images', image);

        });

        try {
            let response;

            if (productToEdit) {
                response = await fetch(`http://localhost:3500/products/${productToEdit.id}`, {
                    method: 'PUT',
                    body: formData,
                });
            } else {
                response = await fetch('http://localhost:3500/products', {
                    method: 'POST',
                    body: formData,
                });
            }

            if (response.ok) {
                console.log('onSubmit executed successfully');
                fetchProducts();

            } else {
                const data = await response.json();
                console.error('Error al guardar producto:', data.message);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return (
        <form className='flex flex-col items-center' onSubmit={handleSubmit}>
            <label>Codigo:</label>
            <input type="text" value={productCode} onChange={(e) => setProductCode(e.target.value)} required />

            <label>Categoria:</label>
            <input type="text" value={productCategoria} onChange={(e) => setProductCategoria(e.target.value)} required />

            <label>Nombre:</label>
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />

            <label>Descripcion:</label>
            <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />

            <label>Precio:</label>
            <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />

            <label>Stock:</label>
            <input type="number" value={productStock} onChange={(e) => setProductStock(e.target.value)} required />

            <label>Imagenes:</label>
            <input type="file" multiple onChange={handleImageChange} required />

            <button type="submit">{productToEdit ? 'Guardar cambios' : 'Crear nuevo producto'}</button>

        </form>
    );
};

export default CreateProductForm;
