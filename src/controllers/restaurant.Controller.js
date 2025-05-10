const Restaurant = require('../models/Restaurant');

const createRestaurant = async (req, res) => {
  try {
    const { name, address, ownerId } = req.body;

    const restaurant = await Restaurant.create({ name, address, owner: ownerId });
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(500).json({ msg: 'Error creating restaurant', error: err.message });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate('owner');
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching restaurants', error: err.message });
  }
};

module.exports = {
  createRestaurant,
  getAllRestaurants
};
