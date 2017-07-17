const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

// routes files
var routes = require('./routes/site.js');

//webpage
const PORT = process.env.PORT || 3002;

var app = express();
app.set('views', __dirname + '/views');

const isDev = app.get('env') === 'development';

// middlewares
app.use(express.static('public'))
app.use(helmet()); // security stuffs
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// set up separate routes files for easier management
app.use('/', routes);

// run the server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});