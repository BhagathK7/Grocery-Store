const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController');  // Import the controller properly

// POST route for handling checkout
router.post('/', checkoutController.handleCheckout);  // Call the correct function

module.exports = router;
