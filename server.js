const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var user = require('./api/model/userModel');
var routes = require('./api/routes/userRoutes');

var app = express();
var port = process.env.PORT || 3000;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen( port , () => {
  console.log(`Server is up and running at port ` + port);
});
