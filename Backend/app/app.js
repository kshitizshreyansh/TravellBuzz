const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const authcontroller = require('../controller/authController');
const placesController = require('../controller/placesController');
const places1Controller = require('../controller/places1Controller');
//const cartController = require('../controller/cartController');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
   next();
});

app.use('/auth', authcontroller);
app.use('/places', placesController);
app.use('/places1', places1Controller);
//app.use('/cart', cartController);
app.get('/', (req, res, next) => {
   res.status(200).json({
       name: 'E-tourism: TravelBuzz'
   })
})

module.exports = app;
