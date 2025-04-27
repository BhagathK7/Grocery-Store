const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();
const Order = require('../models/Order');

const razorpay = new Razorpay({
  key_id: 'rzp_test_8qY0PPemsA7yUW',
  key_secret: 'Fd5kXuZlWGH1Wzp2PzOJEh0w',
});

// 👇 FIXED endpoint path
router.post('/payment', async (req, res) => {
  try {
    const { products, total, userId } = req.body;

    const options = {
      amount: total * 100,
      currency: 'INR',
      receipt: `order_rcptid_${Math.random()}`,
    };

    const order = await razorpay.orders.create(options);

    const items = products.map(p => ({
      product: p.productId._id,
      quantity: p.quantity,
    }));

    const newOrder = new Order({
      user: userId,
      items,
      totalPrice: total,
      status: 'Pending',
    });

    await newOrder.save();

    res.json({ key: razorpay.key_id, order_id: order.id });
  } catch (err) {
    console.error('Error creating payment order:', err);
    res.status(500).json({ message: 'Failed to initiate payment. Please try again.' });
  }
});

module.exports = router;
