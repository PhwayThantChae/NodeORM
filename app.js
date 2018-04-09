const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const router = require('./server/routes');
const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/',router);

app.get('*',(req,res) => res.status(200).send({
    message: 'Welcome to the express app'
}));



module.exports = app;