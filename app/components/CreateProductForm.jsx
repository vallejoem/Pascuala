import { useState, useEffect } from 'react';

const CreateProductForm = ({ onSubmit, fetchProducts, productToEdit, hideForm }) => {
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

    const resetForm = () => {
        setProductCode('');
        setProductCategoria('');
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setProductStock('');
        setProductImages([]);
    };

    const categorias = ['muñecas', 'indumentaria', 'accesorios'];

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
                resetForm();
                hideForm();
            } else {
                const data = await response.json();
                console.error('Error al guardar producto:', data.message);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return (
        <form className=' flex md:w-3/4 flex-col items-center' onSubmit={handleSubmit}>
            <label className='flex w-3/4 text-left text-fuchsia-900 pt-2'>Codigo:</label>
            <input className='flex w-3/4 my-1 py-1' type="text" value={productCode} onChange={(e) => setProductCode(e.target.value)} required />

            <label className='flex w-3/4 text-left text-fuchsia-900 pt-2'>Categoria:</label>
            <select
                className='flex w-3/4 my-1 py-1'
                value={productCategoria}
                onChange={(e) => setProductCategoria(e.target.value)}
                required
            >
                {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>
                        {categoria}
                    </option>
                ))}
            </select>

            <label className='flex w-3/4 text-left text-fuchsia-900 pt-2'>Nombre:</label>
            <input className='flex w-3/4 my-1 py-1' type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />

            <label className='flex w-3/4 text-left text-fuchsia-900 pt-2'>Descripcion:</label>
            <textarea className='flex w-3/4 my-1 py-1' value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />

            <label className='flex w-3/4 text-left text-fuchsia-900 pt-2'>Precio:</label>
            <input className='flex w-3/4 my-1 py-1' type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />

            <label className='flex w-3/4 text-left text-fuchsia-900 pt-2'>Stock:</label>
            <input className='flex w-3/4 my-1 py-1' type="number" value={productStock} onChange={(e) => setProductStock(e.target.value)} required />

            <label className='flex w-3/4 text-left text-fuchsia-900 pt-2'>Imagenes:</label>
            <input className="flex w-3/4 text-sm bg-fuchsia-200 p-3 text-fuchsia-800 
                                file:mr-4 file:py-2 file:px-4
                                file:text-sm file:align-middle
                                file:bg-fuchsia-200 file:text-fuchsia-800
                                hover:file:bg-fuchsia-300"
                type="file" multiple onChange={handleImageChange} required />

            <button className='m-3 bg-fuchsia-300 p-3 text-fuchsia-800 rounded-lg' type="submit">{productToEdit ? 'Guardar cambios' : 'Crear nuevo producto'}</button>

        </form>
    );
};

export default CreateProductForm;
