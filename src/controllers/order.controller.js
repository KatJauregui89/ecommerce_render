const OrderServices = require('../services/orders.services');

const getOrders = async (req, res, next) => {
  const user_id = req.user.id;
  try {
    const orders = await OrderServices.getOrders(user_id);
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

const makeOrder = async (req, res, next) => {
  const user_id = req.user.id;
  try {
    const order = await OrderServices.makeOrder(user_id);
    res.json({ message: 'Order purchased' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getOrders, makeOrder };
