const { Router } = require('express');
const {
  getAllProducts,
  createProduct,
} = require('../controllers/product.controller');
const getUser = require('../middlewares/user.middleware');

const router = Router();

router.get('/', getAllProducts);
router.post('/', getUser, createProduct);

module.exports = router;