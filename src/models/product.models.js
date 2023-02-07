const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     getAllProducts:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: integer
 *             example: 1
 *           name:
 *             type: string
 *             example: 'Teddy Bear'
 *           price:
 *             type: integer
 *             example: 150
 *           available_qty:
 *             type: integer
 *             example: 200
 *           picture:
 *             type: string
 *             example: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WIQG3gSpet18iFtW8rVhbgHaHa%26pid%3DApi&f=1&ipt=a9353b803a7f60b6b75b991acd645d9935c93e9661698e454d720cd6ef0deaa6&ipo=images
 *           status:
 *             type: string
 *             example: 'not_purchased'
 *           user:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               username:
 *                 type: string
 *                 example: 'Katia Jauregui'
 *     createProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: 'cat hat'
 *         price:
 *           type: integer
 *           example: 100
 *         available_qty:
 *           type: integer
 *           example: 200
 *         picture:
 *           type: string
 *           example: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Q7LgKPsYdRXZ9UAZ7fmCzwHaJ2%26pid%3DApi&f=1&ipt=1e922a1326c9978fb294d602644c9d7086f027bbeead1d9d46a5c1c95dfa361f&ipo=images'
 *     productCreated:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: 'cat hat'
 *         price:
 *           type: integer
 *           example: 100
 *         available_qty:
 *           type: integer
 *           example: 200
 *         picture:
 *           type: string
 *           example: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Q7LgKPsYdRXZ9UAZ7fmCzwHaJ2%26pid%3DApi&f=1&ipt=1e922a1326c9978fb294d602644c9d7086f027bbeead1d9d46a5c1c95dfa361f&ipo=images'
 *         status:
 *           type: string
 *           example: 'not_purchased'
 *         user_id:
 *           type: integer
 *           example: 1
 *
 */

const product = db.define(
    'product',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      available_qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM('not_purchased', 'purchased'),
        defaultValue: 'not_purchased',
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
  
  module.exports = product;
  