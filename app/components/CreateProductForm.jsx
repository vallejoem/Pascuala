import { useState } from 'react';

const CreateProductForm = ({ onCreateProduct }) => {
    const [productCode, setProductCode] = useState('');
    const [productCategoria, setProductCategoria] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productStock, setProductStock] = useState('');
    const [productImages, setProductImages] = useState([]);

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
            // Hacer una solicitud POST a tu API para crear un nuevo producto
            const response = await fetch('http://localhost:3500/products', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                // Producto creado con éxito, realizar alguna acción (actualizar la lista, etc.)
                onCreateProduct();
            } else {
                // Manejar errores de la API
                const data = await response.json();
                console.error('Error al crear producto:', data.message);
            }
        } catch (error) {
            // Manejar errores de red u otros
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

            <button type="submit" >Crear nuevo producto</button>
        </form>
    );
};

export default CreateProductForm;
