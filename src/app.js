// middlewares y rutas

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const authRoutes = require('./routes/auth.routes');
const transporter = require('./utils/mailer');
const { text } = require('stream/consumers');
const errorMid = require('./middlewares/error.middleware');
const routerApi = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

initModels(app);

app.use(errorMid)
routerApi(app)

db.authenticate()
.then(() => console.log('batabase authenticate'))
.catch((error) => console.log(error));

db.sync({force: false}) 
    .then(() => console.log('database synchronized'))
    .catch((error) => console.log(error));

transporter.verify() 
.then(() => console.log("transporter is ok"))
.catch((error) => console.log(error));

module.exports = app;