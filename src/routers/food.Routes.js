
const express = require('express');
const router = express.Router();
const { createFood, getFoodsByRestaurant } = require('../controllers/food.Controller');
const authMiddleware = require('../middlewares/authMiddleware');  

router.post('/create', authMiddleware, createFood);

router.get('/restaurant/:restaurantId', getFoodsByRestaurant);

module.exports = router;
