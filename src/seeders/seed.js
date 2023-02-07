
const db = require('../utils/database');
const Users = require('../models/users.models');
const Product = require('../models/product.models');
const Order = require('../models/Order.models');
const Cart = require('../models/Cart.models');
const ProductsInCart = require('../models/ProductInCart.models');
const ProductsInOrder = require('../models/ProductInOrder.models');
const initModels = require('../models/initModels');

initModels();

const users = [
    {
      username: 'Katia Jauregui',
      email: 'katiajauregui@gmail.com',
      password: '1234',
    },
    {
      username: 'Diego',
      email: 'diego@gmail.com',
      password: '2345',
    },
    {
      username: 'Valeria',
      email: 'valeria@gmail.com',
      password: '3456',
    },
    {
      username: 'Taylor',
      email: 'Taylor@gmail.com',
      password: '4567',
    },
  ];
  
  const products = [
    {
      name: 'product 1',
      price: 100,
      available_qty: 100,
      status: 'not_purchased',
      user_id: 1,
    },
    {
      name: 'product 2',
      price: 200,
      available_qty: 150,
      status: 'not_purchased',
      user_id: 2,
    },
    {
      name: 'product 3',
      price: 300,
      available_qty: 200,
      status: 'purchased',
      user_id: 3,
    },
    {
      name: 'product 4',
      price: 400,
      available_qty: 250,
      status: 'purchased',
      user_id: 4,
    },
  ];
  
  const orders = [
    {
      total_price: 100,
      user_id: 1,
      status: 'purchased',
    },
    {
      total_price: 500,
      user_id: 2,
      status: 'purchased',
    },
    {
      total_price: 1000,
      user_id: 3,
      status: 'purchased',
    },
    {
      total_price: 700,
      user_id: 4,
    },
  ];
  
  const carts = [
    {
      user_id: 1,
      total_price: 200,
    },
    {
      user_id: 2,
      total_price: 500,
    },
    {
      user_id: 3,
      total_price: 1000,
    },
    {
      user_id: 4,
      total_price: 700,
    },
  ];
  
  const productsInCart = [
    {
      cart_id: 1,
      product_id: 1,
      quantity: 2,
      price: 100,
    },
    {
      cart_id: 2,
      product_id: 2,
      quantity: 1,
      price: 200,
      status: 'not_purchased',
    },
    {
      cart_id: 3,
      product_id: 3,
      quantity: 4,
      price: 300,
    },
    {
      cart_id: 4,
      product_id: 4,
      quantity: 2,
      price: 400,
      status: 'purchased',
    },
  ];
  
  const productsInOrder = [
    {
      order_id: 1,
      product_id: 1,
      quantity: 2,
      price: 100,
    },
    {
      order_id: 2,
      product_id: 2,
      quantity: 1,
      price: 200,
      status: 'not_purchased',
    },
    {
      order_id: 3,
      product_id: 3,
      quantity: 4,
      price: 300,
    },
    {
      order_id: 4,
      product_id: 4,
      quantity: 2,
      price: 400,
      status: 'purchased',
    },
  ];
  
  db.sync({ force: true })
    .then(() => {
      console.log('seeding');
      users.forEach((user) => {
        Users.create(user);
      });
      setTimeout(() => {
        products.forEach((product) => {
          Product.create(product);
        });
      }, 1000);
      setTimeout(() => {
        orders.forEach((order) => {
          Order.create(order);
        });
      }, 2000);
      setTimeout(() => {
        carts.forEach((cart) => {
          Cart.create(cart);
        });
      }, 3000);
      setTimeout(() => {
        productsInCart.forEach((product) => {
          ProductsInCart.create(product);
        });
      }, 4000);
      setTimeout(() => {
        productsInOrder.forEach((product) => {
          ProductsInOrder.create(product);
        });
      }, 5000);
    })
    .catch((error) => console.log(error));