import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId'); // ✅ Moved inside the component

  useEffect(() => {
    if (!userId) {
      setError("No user ID provided. Please log in.");
      setLoading(false);
      return;
    }

    const fetchCart = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/cart/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch cart');

        const data = await response.json();
        if (data && data.products) {
          setCart(data.products);
          const total = data.products.reduce((acc, item) => {
            const price = item.productId?.price || 0;
            return acc + price * item.quantity;
          }, 0);
          setTotalAmount(total);
        } else {
          setCart([]);
          setTotalAmount(0);
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
        setError('Could not fetch the cart. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userId]);

  const handleCheckout = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products: cart, total: totalAmount, userId })
      });

      const data = await res.json();

      const options = {
        key: data.key,
        amount: totalAmount * 100,
        currency: "INR",
        name: "Grocery Store",
        description: "Order Payment",
        order_id: data.order_id,
        handler: async function (response) {
          try {
            await fetch('http://localhost:5000/api/save-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                userId,
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                amount: totalAmount,
                currency: "INR",
                products: cart
              })
            });
          } catch (err) {
            console.error('Error saving payment:', err);
          }

          navigate('/order-summary', {
            state: {
              orderDetails: { total: totalAmount },
              paymentDetails: response
            }
          });
        },
        prefill: {
          name: "Customer",
          email: "customer@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#3399cc"
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Failed to initiate payment. Please try again.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="cart-card">
              <img src={item.productId?.image} alt={item.productId?.name || "Product"} />
              <div className="cart-details">
                <h3>{item.productId?.name}</h3>
                <p>Price: ₹{item.productId?.price?.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ₹{(item.productId?.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <div className="cart-summary">
        <h3>Order Summary</h3>
        <p>Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
        <p>Total Amount: <strong>₹{totalAmount.toFixed(2)}</strong></p>
        {cart.length > 0 && (
          <button className="btn-checkout" onClick={handleCheckout}>
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};

export default CartPage;
