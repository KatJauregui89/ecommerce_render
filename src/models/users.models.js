const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');


/**
 * @openapi
 * components:
 *   schemas:
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Katia
 *         email:
 *           type: string
 *           example: katia@gmail.com
 *         password:
 *           type: string
 *           example: password
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: katia@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     loginResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         username:
 *           type: string
 *           example: Katia123
 *         email:
 *           type: string
 *           example: katia@gmail.com
 *         token:
 *           type: string
 *           example: $2b$10$4PXf5QFozx7rr1I31RjABucNbRqDZV8ozjM6k9UQC7PPA3VfTJUdi
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const users = db.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      hooks: {
        beforeCreate: (user, options) => {
          const { password } = user;
          const hash = bcrypt.hashSync(password, 10);
          user.password = hash;
        },
      },
    }
  );
  
  module.exports = users;