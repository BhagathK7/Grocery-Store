import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard.js';
import './ProductsPage.css'; // Path relative to the current file
 // Ensure you have the base styles

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/products')
      .then((response) => setProducts(response.data))
      .catch((err) => console.error('Failed to fetch products', err));
  }, []);

  return (
    <div className="products-page">
      <h2 className="products-heading">Our Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            productId={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
