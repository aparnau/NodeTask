require('ignore-styles');
require('babel-register')({ ignore: /\/(build|node_modules)\//, presets: ['react-app'] });

const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('combined'));

const index = require('./routes/index');
app.use('/', index);
app.use(express.static(path.resolve(__dirname, '..', 'build')));

const api = require('./routes/api');
app.use('/api', api);

const universalLoader = require('./universal');
app.use('/', universalLoader);

module.exports = app;