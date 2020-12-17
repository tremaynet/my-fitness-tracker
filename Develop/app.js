const express = require('express');
const cors = require('cors');
const path = require('path');
// const config = require('./config/config');
const routes = require('./routes');

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());

// v1 api routes
app.use('/api', routes);
app.use(express.static(path.join(__dirname, '.')));
app.use(express.static(path.join(__dirname, '.', 'public')));
app.get('/exercise', function (req, res) {
  res.sendFile(path.join(__dirname, '.', 'public', 'exercise.html'));
});
app.get('/stats', function (req, res) {
  res.sendFile(path.join(__dirname, '.', 'public', 'stats.html'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '.', 'public', 'index.html'));
});



module.exports = app;
