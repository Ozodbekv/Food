const Order = require('../models/Order');

const createOrder = async (req, res) => {
  try {
    const { customerId, foodId, quantity } = req.body;

    const order = await Order.create({
      customer: customerId,
      food: foodId,
      quantity
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ msg: 'Error creating order', error: err.message });
  }
};

const getOrdersByCustomer = async (req, res) => {
  try {
    const { customerId } = req.params;

    const orders = await Order.find({ customer: customerId })
      .populate('food')
      .populate('customer');

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching orders', error: err.message });
  }
};

module.exports = {
  createOrder,
  getOrdersByCustomer
};
