const express = require('express');
const XmlController = require('./controllers/XmlController');

const routes = new express.Router();

routes.get('/xml', XmlController.index);
routes.get('/xmlToJson', XmlController.xmlToJson);

module.exports = routes;