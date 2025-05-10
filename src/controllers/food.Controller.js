const Food = require('../models/Food');

const createFood = async (req, res) => {
  try {
    const { name, price, restaurantId } = req.body;

    const food = await Food.create({ name, price, restaurant: restaurantId });
    res.status(201).json(food);
  } catch (err) {
    res.status(500).json({ msg: 'Error creating food', error: err.message });
  }
};

const getFoodsByRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    const foods = await Food.find({ restaurant: restaurantId });
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching food items', error: err.message });
  }
};

module.exports = {
  createFood,
  getFoodsByRestaurant
};
