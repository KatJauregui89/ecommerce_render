
const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     getCart:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         user_id:
 *           type: integer
 *           example: 1
 *         total_price:
 *           type: integer
 *           example: 0
 *     getProductsInCart:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         user_id:
 *           type: integer
 *           example: 1
 *         total_price:
 *           type: integer
 *           example: 100
 *         productsInCart:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               cart_id:
 *                 type: integer
 *                 example: 1
 *               product_id:
 *                 type: integer
 *                 example: 1
 *               quantity:
 *                 type: integer
 *                 example: 4
 *               price:
 *                 type: integer
 *                 example: 100
 *               status:
 *                 type: string
 *                 example: 'not_purchased'
 *               product:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: 'Teddy Bear'
 *                   price:
 *                     type: integer
 *                     example: 100
 *                   available_qty:
 *                     type: integer
 *                     example: 150
 *                   picture:
 *                     type: string
 *                     example: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WIQG3gSpet18iFtW8rVhbgHaHa%26pid%3DApi&f=1&ipt=a9353b803a7f60b6b75b991acd645d9935c93e9661698e454d720cd6ef0deaa6&ipo=images'
 *                   status:
 *                     type: string
 *                     example: 'not_purchased'
 *                   user_id:
 *                     type: integer
 *                     example: 1
 *     addProductToCart:
 *       type: object
 *       properties:
 *         product_id:
 *           type: integer
 *           example: 1
 *         quantity:
 *           type: integer
 *           example: 10
 *     productAddedToCart:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         cart_id:
 *           type: integer
 *           example: 1
 *         product_id:
 *           type: integer
 *           example: 1
 *         quantity:
 *           type: integer
 *           example: 5
 *         price:
 *           type: float
 *           example: 100
 *
 */

const cart = db.define(
    'cart',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
  
  module.exports = cart;