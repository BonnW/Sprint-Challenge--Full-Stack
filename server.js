const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./project/src/components/models/userModle.js');

const STATUS_SERVER_ERROR = 500;
const server = express();

server.use(cors());
server.use(body-parser.json());