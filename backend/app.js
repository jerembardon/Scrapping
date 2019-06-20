require("dotenv").config();
var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan'); 
var cors = require('cors');
const path = require('path');

var app = express();

// Mongoose conection
mongoose.connect(
    process.env.DB,
    { useNewUrlParser: true }
);
  
mongoose.connection
    .once("open", () => console.log("Connected to database"))
    .on("error", error => console.log("Connexion to database fail"));

// Parser
app.use(
    bodyParser.json({
        type: "*/*"
    })
);

var corsOptions = {
    origin: process.env.FRONTEND_URL,
    optionsSuccessStatus: 200 
}

// Cors
app.use(cors(corsOptions));

// Routing
var routes = require('./controllers/index.js');
app.use('/', routes);

var port = process.env.PORT || 4444;
app.listen(port, function(){
  console.log('Running on port: ' + port);
});





