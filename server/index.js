const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const router = require('./router');
const path = require('path');

const database = 'mongodb://localhost/tickets';
mongoose.connect(database);
var port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
console.log(path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

app.listen(port);

router(app);

console.log('Your server is running on port: ' + port);

