const { resolve } = require('path')
const express = require('express')
const XmlController = require('./controllers/XmlController')

const routes = new express.Router()

routes.get('/', (req, res) => res.sendFile(resolve('./src/index.html')))

routes.get('/xml', XmlController.index)
routes.get('/xmlToJson', XmlController.xmlToJson)

module.exports = routes