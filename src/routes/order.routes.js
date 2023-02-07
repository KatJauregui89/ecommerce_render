const { Router } = require('express');
const { getOrders, makeOrder } = require('../controllers/order.controller');
const getUser = require('../middlewares/user.middleware');

const router = Router();

router.get('/', getUser, getOrders);
router.put('/', getUser, makeOrder);

module.exports = router;