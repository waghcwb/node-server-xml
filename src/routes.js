const express = require('express');
const XmlController = require('./controllers/XmlController');

const routes = new express.Router();

routes.get('/xml', XmlController.index);

module.exports = routes;