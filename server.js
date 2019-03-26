const express = require('express');

const helmet = require('helmet');
const logger = require('morgan');

const server = express();
const routes = require('./data/api/routes');

server.use(express.json(), helmet(), logger('dev'));
server.use('/api', routes);

module.exports = server;