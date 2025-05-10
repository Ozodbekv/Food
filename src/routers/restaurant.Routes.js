const express = require('express');
const router = express.Router();
const { createRestaurant, getAllRestaurants } = require('../controllers/restaurantController');
const authMiddleware = require('../middlewares/authMiddleware');  

router.post('/create', authMiddleware, createRestaurant);


router.get('/', getAllRestaurants);

module.exports = router;