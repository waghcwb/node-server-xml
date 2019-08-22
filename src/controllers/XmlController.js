const Xml = require('../models/Xml')
const parser = require('xml2json')

module.exports = {
  index(req, res) {
    res.set('Content-Type', 'text/xml')
    res.send(Xml)
  },
  xmlToJson(req, res) {
    res.send(parser.toJson(Xml))
  }
}