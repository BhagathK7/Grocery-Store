// routes/payment.js or controllers/paymentController.js
const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment'); // import model

router.post('/', async (req, res) => {
  try {
    const {
      userId,
      orderId,
      paymentId,
      amount,
      currency,
      products
    } = req.body;

    const newPayment = new Payment({
      userId,
      orderId,
      paymentId,
      amount,
      currency,
      products
    });

    await newPayment.save();

    res.status(201).json({ message: 'Payment saved successfully' });
  } catch (err) {
    console.error('Error saving payment:', err);
    res.status(500).json({ message: 'Failed to save payment' });
  }
});

module.exports = router;
