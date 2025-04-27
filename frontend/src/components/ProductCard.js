import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles.css';

const ProductCard = ({ image, name, price, productId }) => {
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      if (!token || !userId || userId === 'undefined') {
        alert('Please log in to add items to the cart');
        navigate('/login');
        return;
      }

      const response = await axios.post(
        'http://localhost:5000/api/cart/add', 
        {
          userId,
          productId,
          quantity: 1
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.status === 200) {
        alert('Product added to cart!');
        navigate('/cart');
      }
    } catch (err) {
      console.error('Error adding product to cart:', err);
      if (err.response && err.response.data && err.response.data.message) {
        alert(`Error: ${err.response.data.message}`);
      } else {
        alert('Failed to add product to cart');
      }
    }
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">{price}</p>
      <button onClick={handleAddToCart} className="btn">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
