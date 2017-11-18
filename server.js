const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./project/src/components/models/userModle.js');

const STATUS_SERVER_ERROR = 500;
const server = express();

server.use(cors());
server.use(body-parser.json());


server.get('/api/budgets', function(req, res) {
  res.status(200).json({ running: 'yes' });
});

server.post('/api/budgets', function(req, res) {
  
})


// connect to the server

mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  'mongodb://localhost/budgets',
  { useMongoClient: true }
);

connect.then(() => {
  const port = 3000;
  server.listen(port);
  console.log(`Server Listening on ${port}`);
}, (err) => {
  console.log("ERROR: NO CONNECTION TO SERVER")
});