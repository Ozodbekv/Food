// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Misollar: /register?role=OWNER yoki MIJOZ
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;



