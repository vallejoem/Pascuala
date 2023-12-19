const ProductList = ({ products, onDeleteProduct }) => {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <div>
                            <strong>{product.name}</strong>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>
                            <p>Stock: {product.stock}</p>
                            <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

