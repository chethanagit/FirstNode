const express = require('express');
const routes = require('./api/routes/route')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//set up express app

const app = express();

//body parser

app.use(bodyParser.json());

//initialize routes

app.use('/',require('./api/routes/route'));

//connect to db

mongoose.connect('mongodb://localhost/rest')
mongoose.Promise = global.Promise;


//listen for request

app.listen(process.env.port ||4000,function(){

console.log('listening for requests');

})


