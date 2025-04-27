const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const paymentRoutes = require('./routes/payment');
// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1); // Stop the app if DB connection fails
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));         // 🛒 Cart routes
app.use('/api/checkout', require('./routes/checkoutRoutes')); // 💳 Checkout routes
app.use('/api/products', require('./routes/productRoutes'));  // 🛍️ Product routes
app.use('/api', require('./routes/paymentRoutes'));           // 💰 Payment route (updated mount path)
app.use('/api/save-payment', paymentRoutes);
// Catch-all route handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "🚫 Route not found" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
