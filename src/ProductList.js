// src/ProductList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css'; // Asegúrate de tener el archivo de estilos

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (err) {
                setError('Error fetching products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product">
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>{product.description.substring(0, 100)}...</p>
                    <p><strong>${product.price}</strong></p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
