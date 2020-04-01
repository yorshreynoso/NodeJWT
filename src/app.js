const express = require('express');
const app = express();
const morgan = require('morgan');
const route = require('./routes/index');


//middleware
app.use(morgan('dev'));

app.use(express.json());    //comprender archivos json
app.use(express.urlencoded({ extended: true })) ;     //enviar json desde formulario

app.set('PORT', 3000);
app.use(('/'), route);

module.exports = app;