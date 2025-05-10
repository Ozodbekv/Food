// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const { createOrder, getOrdersByCustomer } = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');  // JWT tekshiruv

// Buyurtma qilish (faqat MIJOZ roli)
router.post('/create', authMiddleware, createOrder);

// Mijozning barcha buyurtmalarini ko‘rish
router.get('/customer/:customerId', authMiddleware, getOrdersByCustomer);

module.exports = router;
