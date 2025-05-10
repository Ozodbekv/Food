// controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'adcxcbchjjnc'; 
const REFRESH_SECRET = 'adcxcbchjjnc';

const generateToken = (user) => {
  const accessToken = jwt.sign(
    { id: user._id, role: user.role },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  const refreshToken = jwt.sign(
    { id: user._id },
    REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  return { accessToken, refreshToken };
};

const registerUser = async (req, res) => {
  try {
    const { username, password, role, location } = req.body;

    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ msg: 'Username already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      password: hashedPassword,
      role,
      location
    });

    const tokens = generateToken(user);
    res.status(201).json({ userId: user._id, role: user.role, ...tokens });

  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid password' });

    const tokens = generateToken(user);
    res.status(200).json({ userId: user._id, role: user.role, ...tokens });

  } catch (err) {
    res.status(500).json({ msg: 'Login error', error: err.message });
  }
};

module.exports = {
  registerUser,
  loginUser
};
