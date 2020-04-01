const express = require('express');
const app = express();

app.use(express.json());    //comprender archivos json
app.use(express.urlencoded( {urlencoded : true}));      //enviar json desde formulario

app.set('PORT', 3000);

module.exports = app;