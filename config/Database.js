const mongoose = require('mongoose');
const {mongodb} = require('./keys');

mongoose.connect(mongodb.URI, {useNewUrlParser: true})
    .then (db => console.log('Base de datos conectada'))
    .catch (err => console.error('database'+err));