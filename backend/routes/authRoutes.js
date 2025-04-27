// authRoutes.js
const express = require('express');
const router = express.Router();

// Import the controller that handles authentication logic
const { login, register } = require('../controllers/authController');  // Ensure this path is correct

// POST route for login
router.post('/login', login);

// POST route for signup
router.post('/register', register);

module.exports = router;
