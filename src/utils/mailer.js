// importamos nodemailer
const nodemailer = require('nodemailer');
//constraseña de aplicaciòn
require('dotenv').config();

// Crear nuestro transportador
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "465", // es el que se usa para gmail 
    secure: true,
    auth: {
        user: "katiajauregui@gmail.com",
        pass: process.env.G_PASSWORD,
    }
});

module.exports = transporter;