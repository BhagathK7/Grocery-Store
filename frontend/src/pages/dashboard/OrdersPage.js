// src/pages/dashboard/OrdersPage.js
import React, { useState, useEffect } from 'react';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    // Fetch orders from your backend
    const fetchOrders = async () => {
      const response = await fetch('http://localhost:5000/api/orders'); // Update the API URL as needed
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-page">
      <h2>Your Orders</h2>
      <div className="orders-list">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} className="order-item">
              <p>Order ID: {order.id}</p>
              <p>Total: ₹{order.totalAmount}</p>
              <p>Status: {order.status}</p>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
