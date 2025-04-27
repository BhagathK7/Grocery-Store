const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// POST /api/auth/login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // ✅ Return both token and userId for frontend usage
    res.status(200).json({
      message: 'Login successful',
      token,
      userId: user._id,
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server Error. Please try again later.' });
  }
};

// POST /api/auth/register
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Prevent duplicate registrations
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ message: 'Error registering user. Please try again.' });
  }
};

module.exports = { login, register };
