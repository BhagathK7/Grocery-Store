const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const paymentRoutes = require('./routes/payment');
dotenv.config();

const app = express();

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
app.use('/api/cart', require('./routes/cartRoutes'));         
app.use('/api/checkout', require('./routes/checkoutRoutes')); 
app.use('/api/products', require('./routes/productRoutes'));  
app.use('/api', require('./routes/paymentRoutes'));          
app.use('/api/save-payment', paymentRoutes);
app.use((req, res) => {
  res.status(404).json({ message: "🚫 Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
