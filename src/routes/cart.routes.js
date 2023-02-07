
const { Router } = require('express');
const {
  addProductToCart,
  getCart,
  getProductsInCart,
} = require('../controllers/cart.controller');
const getUser = require('../middlewares/user.middleware');

const router = Router();

router.get('/', getUser, getCart);
router.post('/', getUser, addProductToCart);
router.get('/products', getUser, getProductsInCart);

module.exports = router;