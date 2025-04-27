import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderSummaryPage.css';
import {Link} from 'react-router-dom';
const OrderSummaryPage = () => {
  const location = useLocation();
  const { orderDetails, paymentDetails } = location.state;

  return (
    <div className="order-summary-container">
      <h2 className="order-summary-title">Order Summary</h2>
      <div className="order-summary-details">
        <div className="order-summary-item">
          <span className="order-summary-label">Order ID:</span>
          <span className="order-summary-value">{paymentDetails.razorpay_order_id}</span>
        </div>
        <div className="order-summary-item">
          <span className="order-summary-label">Amount Paid:</span>
          <span className="order-summary-value">₹{orderDetails.total}</span>
        </div>
        <div className="order-summary-item">
          <span className="order-summary-label">Delivery Charge:</span>
          <span className="order-summary-value">₹50</span>
        </div>
        <div className="order-summary-item">
          <span className="order-summary-label">Payment Status:</span>
          <span className="order-summary-value">Successful</span>
        </div>
      </div>
      <div className="order-summary-total">
        <h3>Total Amount: ₹{orderDetails.total + 50}</h3> {/* Add delivery charge */}
      </div>
      <Link to="/"><button className="btn">Go to Home</button></Link>
      
    </div>
  );
};

export default OrderSummaryPage;
